import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserBookings, cancelBooking } from '../services/api'
import { useTheme } from '../context/ThemeContext'
import Navbar from '../components/Navbar'

function MyTickets() {
  const navigate = useNavigate()
  const { dark } = useTheme()
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)

  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const bg = dark ? '#0f0f1a' : '#f0f4ff'
  const cardBg = dark ? '#1e1e2e' : 'white'
  const textColor = dark ? '#e0e0e0' : '#333'
  const subColor = dark ? '#aaa' : '#666'

  const categoryColors = {
    '1AC': '#7b1fa2',
    '2AC': '#1565c0',
    '3AC': '#2e7d32',
    'Sleeper': '#e65100',
    'General': '#546e7a',
  }

  const fetchTickets = async () => {
    try {
      // Backend tickets
      let backendTickets = []
      try {
        const res = await getUserBookings(user.id)
        backendTickets = res.data || []
      } catch (err) {
        console.log('Backend error:', err)
      }

      // Frontend tickets localStorage se
      const frontendTickets = JSON.parse(localStorage.getItem(`tickets_${user.id}`) || '[]')

      // Dono merge karo
      setTickets([...backendTickets, ...frontendTickets])
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  const handleCancel = async (ticket) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        if (ticket.train?.id) {
          // Backend ticket cancel
          await cancelBooking(ticket.id)
        } else {
          // Frontend ticket cancel — localStorage update karo
          const existing = JSON.parse(localStorage.getItem(`tickets_${user.id}`) || '[]')
          const updated = existing.map(t =>
            t.id === ticket.id ? { ...t, status: 'Cancelled' } : t
          )
          localStorage.setItem(`tickets_${user.id}`, JSON.stringify(updated))
        }
        alert('Booking cancelled successfully!')
        fetchTickets()
      } catch (err) {
        alert('Cancellation failed!')
      }
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: bg, transition: 'all 0.3s' }}>
      <Navbar />

      {/* Header */}
      <div style={{
        background: dark
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
          : 'linear-gradient(135deg, #1565c0 0%, #1a73e8 100%)',
        padding: '40px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 8px' }}>🎫 My Tickets</h1>
        <p style={{ margin: 0, opacity: 0.85 }}>View and manage your bookings</p>
      </div>

      <div style={{ maxWidth: '750px', margin: '-30px auto 0', padding: '0 20px 60px', position: 'relative', zIndex: 10 }}>
        {loading ? (
          <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '60px', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', marginTop: '32px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>⏳</div>
            <p style={{ color: subColor }}>Loading your tickets...</p>
          </div>
        ) : tickets.length === 0 ? (
          <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '60px', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', marginTop: '32px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎫</div>
            <h3 style={{ color: textColor, marginBottom: '8px' }}>No tickets yet!</h3>
            <p style={{ color: subColor, marginBottom: '24px' }}>You haven't booked any tickets yet.</p>
            <button
              onClick={() => navigate('/search')}
              style={{ padding: '12px 32px', background: 'linear-gradient(135deg, #1a73e8, #0d47a1)', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}
            >
              Search Trains
            </button>
          </div>
        ) : (
          <>
            <div style={{ margin: '32px 0 20px' }}>
              <h2 style={{ color: textColor, fontSize: '20px', margin: 0 }}>
                {tickets.length} Booking{tickets.length > 1 ? 's' : ''} Found
              </h2>
            </div>

            {tickets.map((ticket) => (
              <div key={ticket.id} style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '24px', marginBottom: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>

                {/* Ticket Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px', color: textColor, fontSize: '18px' }}>
                      {ticket.train?.name}
                      <span style={{ color: subColor, fontSize: '13px', marginLeft: '8px' }}>#{ticket.train?.number}</span>
                    </h3>
                    <p style={{ margin: 0, color: subColor, fontSize: '14px' }}>
                      {ticket.train?.from} → {ticket.train?.to}
                    </p>
                  </div>
                  <span style={{
                    backgroundColor: ticket.status === 'Confirmed' ? '#e8f5e9' : '#fce8e6',
                    color: ticket.status === 'Confirmed' ? '#2e7d32' : '#c62828',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 'bold'
                  }}>
                    {ticket.status === 'Confirmed' ? '✅ Confirmed' : '❌ Cancelled'}
                  </span>
                </div>

                {/* Ticket Details */}
                <div style={{ backgroundColor: dark ? '#2a2a3e' : '#f8f9ff', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {[
                      { icon: '🕐', label: 'Time', value: `${ticket.train?.departure} - ${ticket.train?.arrival}` },
                      { icon: '📅', label: 'Date', value: ticket.travelDate },
                      { icon: '👤', label: 'Passenger', value: `${ticket.passengerName} | ${ticket.age}yrs | ${ticket.gender}` },
                      { icon: '🎫', label: 'Class', value: ticket.category },
                    ].map((item) => (
                      <div key={item.label} style={{ flex: '1', minWidth: '180px' }}>
                        <p style={{ margin: '0 0 2px', fontSize: '12px', color: subColor }}>{item.icon} {item.label}</p>
                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: textColor }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Badge */}
                <div style={{ marginBottom: '16px' }}>
                  <span style={{
                    backgroundColor: categoryColors[ticket.category] || '#546e7a',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {ticket.category}
                  </span>
                </div>

                {/* Price + Cancel */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: 0, fontSize: '12px', color: subColor }}>Amount Paid</p>
                    <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#1a73e8' }}>₹{ticket.price}</p>
                  </div>
                  {ticket.status === 'Confirmed' && (
                    <button
                      onClick={() => handleCancel(ticket)}
                      style={{ padding: '10px 24px', backgroundColor: 'transparent', color: '#c62828', border: '2px solid #c62828', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fce8e6' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default MyTickets