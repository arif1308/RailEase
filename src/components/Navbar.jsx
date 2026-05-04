import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const navigate = useNavigate()
  const { dark, toggleTheme } = useTheme()
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const handleLogout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('theme')
  localStorage.removeItem('search_from')
  localStorage.removeItem('search_to')
  localStorage.removeItem('search_date')
  navigate('/')
}

  return (
    <div style={{
      backgroundColor: dark ? '#1e1e2e' : '#1565c0',
      padding: '14px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s'
    }}>
      {/* Logo */}
      <div onClick={() => navigate('/home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <span style={{ fontSize: '26px' }}>🚂</span>
        <div>
          <span style={{ color: 'white', fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>RailEase</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', display: 'block', marginTop: '-2px' }}>Book Smarter, Travel Faster</span>
        </div>
      </div>

      {/* Right Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>

        {/* Profile Button */}
        <div
          onClick={() => navigate('/profile')}
          style={{ backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '20px', padding: '6px 14px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}
        >
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#ffd54f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', color: '#1a1a1a' }}>
            {(user.name || 'G').charAt(0).toUpperCase()}
          </div>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: '500' }}>
            {user.name || 'Guest'}
          </span>
        </div>

        {/* Search */}
        <button
          onClick={() => navigate('/search')}
          style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '7px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}
        >
          🔍 Search
        </button>

        {/* My Tickets */}
        <button
          onClick={() => navigate('/my-tickets')}
          style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '7px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}
        >
          🎫 My Tickets
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '7px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '16px', transition: 'all 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}
          title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {dark ? '☀️' : '🌙'}
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{ backgroundColor: '#ffd54f', color: '#1a1a1a', border: 'none', padding: '8px 18px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', fontWeight: '700', transition: 'all 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffca28'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffd54f'}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar