import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Navbar from '../components/Navbar'
import { updateProfile, changePassword } from '../services/api'

function Profile() {
  const navigate = useNavigate()
  const { dark } = useTheme()

  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const [name, setName] = useState(user.name || '')
  const [editing, setEditing] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveError, setSaveError] = useState('')

  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMsg, setPasswordMsg] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const bg = dark ? '#0f0f1a' : '#f0f4ff'
  const cardBg = dark ? '#1e1e2e' : 'white'
  const textColor = dark ? '#e0e0e0' : '#333'
  const subColor = dark ? '#aaa' : '#666'
  const inputBg = dark ? '#2a2a3e' : '#fff'
  const inputBorder = dark ? '#3a3a5e' : '#ddd'
  const inputColor = dark ? '#fff' : '#333'

  const tickets = JSON.parse(localStorage.getItem(`tickets_${user.id}`) || '[]')
  const confirmedTickets = tickets.filter(t => t.status === 'Confirmed').length
  const cancelledTickets = tickets.filter(t => t.status === 'Cancelled').length

  const handleLogout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('theme')
  localStorage.removeItem('search_from')
  localStorage.removeItem('search_to')
  localStorage.removeItem('search_date')
  navigate('/')
}

  const handleSave = async () => {
    setSaveError('')
    try {
      const res = await updateProfile(user.id, {
        name: name,
        email: user.email,
        password: '',
        role: user.role || 'User'
      })
      const updatedUser = { ...user, name: res.data.name, email: res.data.email }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setSaved(true)
      setEditing(false)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      setSaveError('Failed to update profile!')
    }
  }

  const handleChangePassword = async (e) => {
    e.preventDefault()
    setPasswordError('')
    setPasswordMsg('')

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match!')
      return
    }
    if (newPassword.length < 4) {
      setPasswordError('Password must be at least 4 characters!')
      return
    }

    try {
      await changePassword(user.id, { currentPassword, newPassword, confirmPassword })
      setPasswordMsg('Password changed successfully!')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
      setTimeout(() => {
        setPasswordMsg('')
        setShowPasswordForm(false)
      }, 3000)
    } catch (err) {
      setPasswordError(err.response?.data || 'Failed to change password!')
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
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ffd54f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '36px', fontWeight: '800', color: '#1a1a1a', border: '3px solid rgba(255,255,255,0.5)' }}>
          {(name || 'U').charAt(0).toUpperCase()}
        </div>
        <h1 style={{ fontSize: '28px', margin: '0 0 4px', fontWeight: '700' }}>{name}</h1>
        <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>{user.email}</p>
      </div>

      <div style={{ maxWidth: '650px', margin: '-30px auto 0', padding: '0 20px 60px', position: 'relative', zIndex: 10 }}>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {[
            { icon: '🎫', label: 'Total Bookings', value: tickets.length },
            { icon: '✅', label: 'Confirmed', value: confirmedTickets },
            { icon: '❌', label: 'Cancelled', value: cancelledTickets },
          ].map((stat) => (
            <div key={stat.label} style={{ backgroundColor: cardBg, borderRadius: '16px', padding: '20px', textAlign: 'center', flex: '1', minWidth: '120px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a73e8' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: subColor, marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Profile Card */}
        <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ color: textColor, fontSize: '20px', margin: 0 }}>👤 Profile Details</h2>
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                style={{ padding: '8px 20px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
              >
                ✏️ Edit
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleSave}
                  style={{ padding: '8px 20px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
                >
                  ✅ Save
                </button>
                <button
                  onClick={() => { setEditing(false); setSaveError('') }}
                  style={{ padding: '8px 20px', backgroundColor: 'transparent', color: '#c62828', border: '1px solid #c62828', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {saved && (
            <div style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '12px 16px', borderRadius: '10px', marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>
              ✅ Profile updated successfully!
            </div>
          )}

          {saveError && (
            <div style={{ backgroundColor: '#fce8e6', color: '#c62828', padding: '12px 16px', borderRadius: '10px', marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>
              ❌ {saveError}
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>Full Name</label>
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
              />
            ) : (
              <p style={{ margin: 0, color: textColor, fontSize: '16px', fontWeight: '500', padding: '12px 16px', backgroundColor: dark ? '#2a2a3e' : '#f8f9ff', borderRadius: '10px' }}>{name}</p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>Email</label>
            <p style={{ margin: 0, color: textColor, fontSize: '16px', fontWeight: '500', padding: '12px 16px', backgroundColor: dark ? '#2a2a3e' : '#f8f9ff', borderRadius: '10px', opacity: 0.8 }}>
              {user.email || 'Not available'}
            </p>
          </div>

          <div>
            <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>Role</label>
            <p style={{ margin: 0, padding: '12px 16px', backgroundColor: dark ? '#2a2a3e' : '#f8f9ff', borderRadius: '10px' }}>
              <span style={{ backgroundColor: '#e8f0fe', color: '#1a73e8', padding: '4px 12px', borderRadius: '10px', fontSize: '13px', fontWeight: '600' }}>
                {user.role || 'User'}
              </span>
            </p>
          </div>
        </div>

        {/* Change Password Card */}
        <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: showPasswordForm ? '24px' : '0' }}>
            <h2 style={{ color: textColor, fontSize: '20px', margin: 0 }}>🔒 Change Password</h2>
            <button
              onClick={() => {
                setShowPasswordForm(!showPasswordForm)
                setPasswordError('')
                setPasswordMsg('')
              }}
              style={{ padding: '8px 20px', backgroundColor: showPasswordForm ? 'transparent' : '#1a73e8', color: showPasswordForm ? '#c62828' : 'white', border: showPasswordForm ? '1px solid #c62828' : 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
            >
              {showPasswordForm ? 'Cancel' : '🔑 Change Password'}
            </button>
          </div>

          {showPasswordForm && (
            <form onSubmit={handleChangePassword}>
              {passwordMsg && (
                <div style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '12px 16px', borderRadius: '10px', marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>
                  ✅ {passwordMsg}
                </div>
              )}
              {passwordError && (
                <div style={{ backgroundColor: '#fce8e6', color: '#c62828', padding: '12px 16px', borderRadius: '10px', marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>
                  ❌ {passwordError}
                </div>
              )}

            <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: subColor, display: 'block', marginBottom: '8px' }}>Current Password</label>
            <div style={{ position: 'relative' }}>
                <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                required
                style={{ width: '100%', padding: '12px 16px', paddingRight: '48px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
                />
                <span onClick={() => setShowCurrent(!showCurrent)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '18px' }}>
                {showCurrent ? '🙈' : '👁️'}
                </span>
            </div>
            </div>

            <div style={{ position: 'relative' }}>
            <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
                style={{ width: '100%', padding: '12px 16px', paddingRight: '48px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
            />
            <span onClick={() => setShowNew(!showNew)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '18px' }}>
                {showNew ? '🙈' : '👁️'}
            </span>
            </div>
            <br />

            <div style={{ position: 'relative' }}>
            <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
                style={{ width: '100%', padding: '12px 16px', paddingRight: '48px', borderRadius: '10px', border: `1.5px solid ${inputBorder}`, fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: inputBg, color: inputColor }}
            />
            <span onClick={() => setShowConfirm(!showConfirm)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '18px' }}>
                {showConfirm ? '🙈' : '👁️'}
            </span>
            </div>
            <br />

              <button
                type="submit"
                style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #1a73e8, #0d47a1)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                🔒 Update Password
              </button>
            </form>
          )}
        </div>

        {/* Quick Actions */}
        <div style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
          <h2 style={{ color: textColor, fontSize: '18px', margin: '0 0 16px' }}>⚡ Quick Actions</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/search')}
              style={{ flex: '1', minWidth: '140px', padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: '600', fontSize: '14px' }}
            >
              🔍 Search Trains
            </button>
            <button
              onClick={() => navigate('/my-tickets')}
              style={{ flex: '1', minWidth: '140px', padding: '12px', backgroundColor: dark ? '#2a2a3e' : '#f0f4ff', color: textColor, border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: '600', fontSize: '14px' }}
            >
              🎫 My Tickets
            </button>
            <button
              onClick={handleLogout}
              style={{ flex: '1', minWidth: '140px', padding: '12px', backgroundColor: 'transparent', color: '#c62828', border: '1px solid #c62828', borderRadius: '12px', cursor: 'pointer', fontWeight: '600', fontSize: '14px' }}
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile