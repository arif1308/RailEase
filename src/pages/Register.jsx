import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/api'
import { useTheme } from '../context/ThemeContext'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { dark, toggleTheme } = useTheme()
  const [showPass, setShowPass] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await registerUser({ name, email, password })
      alert('Register successful! Login karo!')
      navigate('/')
    } catch (err) {
      setError('Email already registered!')
    }
  }

  const bg = dark
    ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  const cardBg = dark ? '#1e1e2e' : 'rgba(255,255,255,0.97)'
  const textColor = dark ? '#e0e0e0' : '#333'
  const labelColor = dark ? '#aaa' : '#444'
  const inputBg = dark ? '#2a2a3e' : '#fff'
  const inputBorder = dark ? '#3a3a5e' : '#ddd'
  const inputColor = dark ? '#fff' : '#333'
  const subText = dark ? '#888' : '#666'

  return (
    <div style={{
      minHeight: '100vh',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.4s'
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' }} />
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' }} />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'absolute', top: '20px', right: '20px',
          backgroundColor: dark ? '#2a2a3e' : 'rgba(255,255,255,0.2)',
          color: dark ? '#ffd700' : 'white',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '20px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Card */}
      <div style={{
        backgroundColor: cardBg,
        borderRadius: '24px',
        padding: '40px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: dark ? '0 20px 60px rgba(0,0,0,0.6)' : '0 20px 60px rgba(0,0,0,0.2)',
        position: 'relative',
        zIndex: 1,
        transition: 'all 0.4s'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '48px', marginBottom: '8px' }}>🚂</div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a73e8', margin: '0 0 4px' }}>RailEase</h1>
          <p style={{ color: subText, fontSize: '14px', margin: 0 }}>Create your account!</p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: '600', color: textColor, marginBottom: '24px', textAlign: 'center' }}>
          Create Account 🎉
        </h2>

        {error && (
          <div style={{ backgroundColor: '#fce8e6', color: '#c62828', padding: '10px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500', color: labelColor, display: 'block', marginBottom: '6px' }}>👤 Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500', color: labelColor, display: 'block', marginBottom: '6px' }}>📧 Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
          <label style={{ fontSize: '14px', fontWeight: '500', color: labelColor, display: 'block', marginBottom: '6px' }}>🔒 Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{ width: '100%', padding: '12px 16px', paddingRight: '48px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
            />
            <span onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '18px' }}>
              {showPass ? '🙈' : '👁️'}
            </span>
          </div>
        </div>

          <button
            type="submit"
            style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(102,126,234,0.4)' }}
          >
            Register →
          </button>

          <p style={{ textAlign: 'center', marginTop: '20px', color: subText, fontSize: '14px' }}>
            Already have an account?{' '}
            <span onClick={() => navigate('/')} style={{ color: '#1a73e8', cursor: 'pointer', fontWeight: '600' }}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register