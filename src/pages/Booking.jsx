import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Navbar from '../components/Navbar'

function Booking() {
  const navigate = useNavigate()
  const location = useLocation()
  const { train, date, category, price } = location.state || {}
  const { dark } = useTheme()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('Male')
  const [booked, setBooked] = useState(false)
  const [error, setError] = useState('')
  const [pnr, setPnr] = useState('')

  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const bg = dark ? '#0f0f1a' : '#f0f4ff'
  const cardBg = dark ? '#1e1e2e' : 'white'
  const textColor = dark ? '#e0e0e0' : '#333'
  const subColor = dark ? '#aaa' : '#666'
  const inputBg = dark ? '#2a2a3e' : '#fff'
  const inputBorder = dark ? '#3a3a5e' : '#ddd'
  const inputColor = dark ? '#fff' : '#333'

  const handleBooking = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const generatedPnr = Math.floor(1000000000 + Math.random() * 9000000000).toString()
      setPnr(generatedPnr)

      const newTicket = {
        id: Date.now(),
        pnr: generatedPnr,
        passengerName: name,
        age: parseInt(age),
        gender: gender,
        category: category,
        price: price,
        travelDate: date,
        status: 'Confirmed',
        train: {
          name: train.name,
          number: train.number,
          from: train.from,
          to: train.to,
          departure: train.departure,
          arrival: train.arrival,
        }
      }

      const existing = JSON.parse(localStorage.getItem(`tickets_${user.id}`) || '[]')
      existing.push(newTicket)
      localStorage.setItem(`tickets_${user.id}`, JSON.stringify(existing))
      setBooked(true)
    } catch (err) {
      setError('Booking failed! Please try again.')
    }
  }

  if (!train) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: bg }}>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🚫</div>
          <h2 style={{ color: textColor }}>No train selected!</h2>
          <button onClick={() => navigate('/search')} style={{ marginTop: '20px', padding: '12px 32px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer', fontSize: '16px' }}>
            Search Trains
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: bg, transition: 'all 0.3s' }}>
      <Navbar />

      {/* Header */}
      <div style={{
        background: dark
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
          : 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
        padding: '40px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 8px' }}>🎫 Book Ticket</h1>
        <p style={{ margin: 0, opacity: 0.85 }}>Complete your booking details</p>
      </div>

      <div style={{ maxWidth: '650px', margin: '-30px auto 0', padding: '0 20px 60px', position: 'relative', zIndex: 10 }}>

        {/* Train Info Card */}
        <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '24px', marginBottom: '20px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ margin: '0 0 4px', color: textColor }}>{train.name} <span style={{ color: subColor, fontSize: '13px' }}>#{train.number}</span></h3>
              <p style={{ margin: '4px 0', color: subColor, fontSize: '14px' }}>📍 {train.from} → {train.to}</p>
              <p style={{ margin: '4px 0', color: subColor, fontSize: '14px' }}>🕐 {train.departure} - {train.arrival}</p>
              <p style={{ margin: '4px 0', color: subColor, fontSize: '14px' }}>📅 {date}</p>
              <p style={{ margin: '4px 0', color: subColor, fontSize: '14px' }}>🎫 Class: <strong style={{ color: textColor }}>{category}</strong></p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a73e8', margin: 0 }}>₹{price}</p>
              <p style={{ color: subColor, fontSize: '12px', margin: '4px 0 0' }}>per person</p>
            </div>
          </div>
        </div>

        {/* Booking Form or Success */}
        {!booked ? (
          <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <h2 style={{ color: textColor, marginBottom: '24px', fontSize: '20px' }}>👤 Passenger Details</h2>

            {error && (
              <div style={{ backgroundColor: '#fce8e6', color: '#c62828', padding: '12px 16px', borderRadius: '10px', marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>
                ❌ {error}
              </div>
            )}

            <form onSubmit={handleBooking}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter passenger name"
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
                />
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '120px', marginBottom: '16px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    min="1" max="120"
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: '120px', marginBottom: '16px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', backgroundColor: inputBg, color: inputColor, outline: 'none' }}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div style={{ backgroundColor: dark ? '#2a2a3e' : '#f8f9ff', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: subColor, fontSize: '14px' }}>Ticket Price</span>
                  <span style={{ color: textColor, fontWeight: '600' }}>₹{price}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: subColor, fontSize: '14px' }}>Service Fee</span>
                  <span style={{ color: '#2e7d32', fontWeight: '600' }}>FREE</span>
                </div>
                <div style={{ borderTop: `1px solid ${inputBorder}`, paddingTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: textColor, fontWeight: 'bold' }}>Total Amount</span>
                  <span style={{ color: '#1a73e8', fontWeight: 'bold', fontSize: '18px' }}>₹{price}</span>
                </div>
              </div>

              <button
                type="submit"
                style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #1a73e8, #0d47a1)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(26,115,232,0.4)' }}
              >
                ✅ Confirm Booking
              </button>
            </form>
          </div>
        ) : (
          <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '40px', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎉</div>
            <h2 style={{ color: '#2e7d32', marginBottom: '8px' }}>Booking Confirmed!</h2>
            <p style={{ color: subColor, marginBottom: '24px' }}>Your ticket has been booked successfully!</p>

            {/* PNR Highlight */}
            <div style={{ backgroundColor: dark ? '#1a2a1a' : '#e8f5e9', borderRadius: '12px', padding: '16px', marginBottom: '24px', border: '2px dashed #2e7d32' }}>
              <p style={{ color: subColor, fontSize: '13px', margin: '0 0 4px' }}>Your PNR Number</p>
              <p style={{ color: '#2e7d32', fontSize: '28px', fontWeight: '800', margin: 0, letterSpacing: '2px' }}>{pnr}</p>
              <p style={{ color: subColor, fontSize: '11px', margin: '4px 0 0' }}>Save this PNR for future reference</p>
            </div>

            <div style={{ backgroundColor: dark ? '#2a2a3e' : '#f8f9ff', borderRadius: '12px', padding: '20px', marginBottom: '24px', textAlign: 'left' }}>
              {[
                { label: 'Passenger', value: name },
                { label: 'Train', value: `${train.name} #${train.number}` },
                { label: 'Route', value: `${train.from} → ${train.to}` },
                { label: 'Date', value: date },
                { label: 'Class', value: category },
                { label: 'Amount Paid', value: `₹${price}` },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: subColor, fontSize: '14px' }}>{item.label}</span>
                  <span style={{ color: textColor, fontWeight: '600', fontSize: '14px' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/my-tickets')} style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #1a73e8, #0d47a1)', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
                View My Tickets
              </button>
              <button onClick={() => navigate('/search')} style={{ padding: '12px 28px', backgroundColor: 'transparent', color: '#1a73e8', border: '2px solid #1a73e8', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
                Search More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Booking