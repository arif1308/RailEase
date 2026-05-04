import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchTrains } from '../services/api'
import { searchByCity, searchByNumber, cities } from '../services/trainsData'
import { useTheme } from '../context/ThemeContext'
import Navbar from '../components/Navbar'

function SearchTrain() {
  const navigate = useNavigate()
  const { dark } = useTheme()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [trainNumber, setTrainNumber] = useState('')
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchType, setSearchType] = useState('city')

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 2)
  const formatDate = (d) => d.toISOString().split('T')[0]

  const bg = dark ? '#0f0f1a' : '#f0f4ff'
  const cardBg = dark ? '#1e1e2e' : 'white'
  const textColor = dark ? '#e0e0e0' : '#333'
  const subColor = dark ? '#aaa' : '#666'
  const inputBg = dark ? '#2a2a3e' : '#fff'
  const inputBorder = dark ? '#3a3a5e' : '#ddd'
  const inputColor = dark ? '#fff' : '#333'

  const categoryColors = {
    '1AC': '#7b1fa2',
    '2AC': '#1565c0',
    '3AC': '#2e7d32',
    'Sleeper': '#e65100',
    'General': '#546e7a',
  }

  const handleSearch = async (e) => {
    e.preventDefault()

    if (searchType === 'city') {
      const selectedDate = new Date(date)
      selectedDate.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        alert('Past date booking is not allowed!')
        return
      }
      if (selectedDate > maxDate) {
        alert('Tickets available only up to 2 months in advance!')
        return
      }
    }

    setLoading(true)

    if (searchType === 'number') {
      const res = searchByNumber(trainNumber)
      setResults(res)
      setSearched(true)
      setLoading(false)
      return
    }

    const frontendResults = searchByCity(from, to)

    let backendResults = []
    try {
      const res = await searchTrains(from, to)
      backendResults = res.data || []
    } catch (err) {
      console.log('Backend error:', err)
    }

    const allTrains = [...backendResults]
    frontendResults.forEach(ft => {
      const exists = backendResults.find(bt => bt.number === ft.number)
      if (!exists) allTrains.push(ft)
    })

    setResults(allTrains)
    setSearched(true)
    setLoading(false)
  }

  const getAvailableSeats = (cat, trainId) => {
    if (cat.bookedSeats !== undefined) {
      return cat.totalSeats - cat.bookedSeats
    }
    const key = `booked_${trainId}_${cat.name}_${date}`
    const booked = parseInt(localStorage.getItem(key) || '0')
    return cat.totalSeats - booked
  }

  const handleBookNow = (train, cat) => {
    navigate('/booking', { state: { train, date, category: cat.name, price: cat.price, isFrontend: cat.bookedSeats === undefined } })
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
        <h1 style={{ fontSize: '32px', margin: '0 0 8px', fontWeight: '700' }}>🔍 Search Trains</h1>
        <p style={{ margin: 0, opacity: 0.85 }}>Find and book your perfect train journey</p>
      </div>

      {/* Search Form */}
      <div style={{ maxWidth: '650px', margin: '-30px auto 0', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>

          {/* Search Type Toggle */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <button
              onClick={() => setSearchType('city')}
              style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '14px', backgroundColor: searchType === 'city' ? '#1a73e8' : (dark ? '#2a2a3e' : '#f0f4ff'), color: searchType === 'city' ? 'white' : textColor, transition: 'all 0.2s' }}
            >
              🏙️ Search by City
            </button>
            <button
              onClick={() => setSearchType('number')}
              style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '14px', backgroundColor: searchType === 'number' ? '#1a73e8' : (dark ? '#2a2a3e' : '#f0f4ff'), color: searchType === 'number' ? 'white' : textColor, transition: 'all 0.2s' }}
            >
              🔢 Search by Train No.
            </button>
          </div>

          <form onSubmit={handleSearch}>
            {searchType === 'city' ? (
              <>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {/* From */}
                  <div style={{ flex: 1, minWidth: '140px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>🚉 From</label>
                    <input
                      list="from-cities"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      placeholder="Type or select city"
                      required
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', backgroundColor: inputBg, color: inputColor, outline: 'none', boxSizing: 'border-box' }}
                    />
                    <datalist id="from-cities">
                      {cities.map((city) => (
                        <option key={city} value={city} />
                      ))}
                    </datalist>
                  </div>

                  {/* Swap Button */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '12px' }}>
                    <span
                      style={{ fontSize: '22px', color: '#1a73e8', cursor: 'pointer', transition: 'transform 0.2s' }}
                      onClick={() => { setFrom(to); setTo(from) }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(180deg)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                    >⇄</span>
                  </div>

                  {/* To */}
                  <div style={{ flex: 1, minWidth: '140px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>🏁 To</label>
                    <input
                      list="to-cities"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      placeholder="Type or select city"
                      required
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', backgroundColor: inputBg, color: inputColor, outline: 'none', boxSizing: 'border-box' }}
                    />
                    <datalist id="to-cities">
                      {cities.map((city) => (
                        <option key={city} value={city} />
                      ))}
                    </datalist>
                  </div>
                </div>

                {/* Date */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>📅 Travel Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={formatDate(today)}
                    max={formatDate(maxDate)}
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', backgroundColor: inputBg, color: inputColor, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </>
            ) : (
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>🔢 Train Number</label>
                <input
                  type="text"
                  value={trainNumber}
                  onChange={(e) => setTrainNumber(e.target.value)}
                  placeholder="e.g. 12951"
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', backgroundColor: inputBg, color: inputColor, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            )}

            <button
              type="submit"
              style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #1565c0, #1a73e8)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {loading ? '🔍 Searching...' : '🔍 Search Trains'}
            </button>
          </form>
        </div>
      </div>

      {/* Results */}
      {searched && (
        <div style={{ maxWidth: '750px', margin: '32px auto', padding: '0 20px 60px' }}>
          <h2 style={{ color: textColor, marginBottom: '20px', fontSize: '20px' }}>
            {results.length === 0 ? '🚫 No trains found!' : `🚆 ${results.length} Train(s) Found`}
          </h2>

          {results.length === 0 ? (
            <div style={{ backgroundColor: cardBg, borderRadius: '16px', padding: '40px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚫</div>
              <p style={{ color: subColor, fontSize: '16px' }}>No trains available for this route.</p>
              <p style={{ color: subColor, fontSize: '14px' }}>Try a different route or date.</p>
            </div>
          ) : (
            results.map((train) => (
              <div key={`${train.id}-${train.number}`} style={{ backgroundColor: cardBg, borderRadius: '16px', padding: '24px', marginBottom: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: `1px solid ${dark ? '#2a2a4e' : '#e8f0fe'}` }}>

                {/* Train Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px', color: textColor, fontSize: '18px', fontWeight: '700' }}>
                      {train.name}
                      <span style={{ color: subColor, fontSize: '13px', marginLeft: '8px', fontWeight: '400' }}>#{train.number}</span>
                    </h3>
                    <p style={{ margin: 0, color: subColor, fontSize: '14px' }}>
                      📍 {train.from} → {train.to} &nbsp;|&nbsp; 🕐 {train.departure} - {train.arrival}
                    </p>
                  </div>
                  <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                    ✅ Available
                  </span>
                </div>

                {/* Categories */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {train.categories.map((cat) => {
                    const available = getAvailableSeats(cat, train.id)
                    return (
                      <div key={cat.name || cat.id}
                        style={{ border: `1.5px solid ${categoryColors[cat.name] || '#666'}`, borderRadius: '12px', padding: '14px 18px', minWidth: '130px', textAlign: 'center', transition: 'transform 0.2s', backgroundColor: dark ? 'rgba(255,255,255,0.03)' : 'white' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      >
                        <p style={{ margin: '0 0 4px', fontWeight: 'bold', color: categoryColors[cat.name] || '#666', fontSize: '14px' }}>{cat.name}</p>
                        <p style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 'bold', color: '#1a73e8' }}>₹{cat.price}</p>
                        <p style={{ margin: '0 0 10px', fontSize: '12px', color: available > 0 ? '#2e7d32' : '#c62828' }}>
                          {available > 0 ? `${available} seats left` : 'Sold Out'}
                        </p>
                        <button
                          disabled={available === 0}
                          onClick={() => handleBookNow(train, cat)}
                          style={{
                            padding: '7px 16px',
                            backgroundColor: available > 0 ? categoryColors[cat.name] || '#666' : '#ccc',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: available > 0 ? 'pointer' : 'not-allowed',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            transition: 'opacity 0.2s'
                          }}
                          onMouseEnter={(e) => available > 0 && (e.currentTarget.style.opacity = '0.85')}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        >
                          {available > 0 ? 'Book Now' : 'Sold Out'}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default SearchTrain