import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Navbar from '../components/Navbar'

function Home() {
  const navigate = useNavigate()
  const { dark } = useTheme()

  const cardBg = dark ? '#1e1e2e' : 'white'
  const textColor = dark ? '#e0e0e0' : '#333'
  const subColor = dark ? '#aaa' : '#666'
  const borderColor = dark ? '#2a2a4e' : '#e8f0fe'
  const sectionBg = dark ? '#0f0f1a' : '#f0f4ff'

  return (
    <div style={{ minHeight: '100vh', backgroundColor: sectionBg, transition: 'all 0.3s' }}>
      <Navbar />

      {/* Hero — Full Screen BG + Right Side Text */}
      <div style={{
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1560607985-ba7df7f6faf6?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        //backgroundImage: 'url(https://images.unsplash.com/photo-1761242865734-103c53c8a57a?w=2800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kaWFuJTIwcmFpbHdheSUyMHNpZW1lbnN8ZW58MHx8MHx8fDA%3D)',
        //backgroundImage: 'url(https://images.unsplash.com/photo-1601999007938-f584b47324ac?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        //backgroundImage: 'url(https://images.unsplash.com/photo-1705605055785-eea663986001?w=1600&auto=format&fit=crop&q=80)',
        //backgroundImage: 'url(https://images.pexels.com/photos/22840300/pexels-photo-22840300.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
        {/* Full dark overlay — left side darker, right side more dark for text */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,20,0.88) 70%, rgba(0,0,20,0.95) 100%)'
        }} />

        {/* Right Side Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: '580px',
          padding: '48px',
          marginLeft: 'auto',
          marginRight: '40px',
        }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,213,79,0.15)', borderRadius: '30px', padding: '8px 18px', marginBottom: '24px', border: '1px solid rgba(255,213,79,0.4)' }}>
            <span style={{ fontSize: '18px' }}>🚂</span>
            <span style={{ color: '#ffd54f', fontSize: '13px', fontWeight: '600' }}>Journey Begins Here </span>
          </div>

          <h1 style={{ fontSize: '44px', fontWeight: '800', color: 'white', margin: '0 0 16px', lineHeight: 1.2, letterSpacing: '-1px', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Your Safe<br />
            Travel Journey<br />
            <span style={{ color: '#ffd54f' }}>Is Our Main Goal</span>
          </h1>

          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', margin: '0 0 32px', lineHeight: 1.8 }}>
            Search, compare and book train tickets across India in seconds. Fast, easy and 100% reliable.
          </p>

          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: '28px', margin: '0 0 36px' }}>
            {[
              { value: '500+', label: 'Trains' },
              { value: '100+', label: 'Cities' },
              { value: '10L+', label: 'Passengers' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#ffd54f' }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: '60px', height: '3px', backgroundColor: '#ffd54f', borderRadius: '2px', marginBottom: '32px' }} />

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <button
              onClick={() => navigate('/search')}
              style={{ padding: '14px 32px', backgroundColor: '#ffd54f', color: '#1a1a1a', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 20px rgba(255,213,79,0.4)', letterSpacing: '0.5px' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,213,79,0.6)'; e.currentTarget.style.backgroundColor = '#ffe082' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,213,79,0.4)'; e.currentTarget.style.backgroundColor = '#ffd54f' }}
            >
              🔍 GET YOUR TICKET
            </button>
            <button
              onClick={() => navigate('/my-tickets')}
              style={{ padding: '14px 32px', backgroundColor: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.5)', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'white' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
            >
              🎫 MY TICKETS
            </button>
          </div>

          {/* Features List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              '⚡ Instant booking in under 60 seconds',
              '💺 1AC, 2AC, 3AC, Sleeper & General',
              '🔒 100% secure payments',
              '📱 Easy cancellation anytime',
            ].map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffd54f', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {[
            { icon: '🚆', label: 'Trains Available', value: '500+', color: '#1a73e8' },
            { icon: '🏙️', label: 'Cities Connected', value: '100+', color: '#7b1fa2' },
            { icon: '👥', label: 'Happy Passengers', value: '10L+', color: '#2e7d32' },
            { icon: '⭐', label: 'Customer Rating', value: '4.8/5', color: '#e65100' },
          ].map((stat) => (
            <div key={stat.label}
              style={{ backgroundColor: cardBg, borderRadius: '20px', padding: '28px 24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', minWidth: '150px', flex: '1', border: `1px solid ${borderColor}`, transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{stat.icon}</div>
              <div style={{ fontSize: '26px', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '13px', color: subColor, marginTop: '6px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Routes */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ color: textColor, fontSize: '30px', margin: '0 0 8px', fontWeight: '700' }}>🔥 Popular Routes</h2>
          <p style={{ color: subColor, margin: 0 }}>Most booked train routes in India</p>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { from: 'Delhi', to: 'Mumbai', duration: '16h', price: '₹700', trains: '4 Trains' },
            { from: 'Mumbai', to: 'Delhi', duration: '16h', price: '₹700', trains: '4 Trains' },
            { from: 'Delhi', to: 'Mumbai', duration: '18h', price: '₹300', trains: '2 Trains' },
            { from: 'Mumbai', to: 'Delhi', duration: '18h', price: '₹300', trains: '2 Trains' },
          ].map((route, i) => (
            <div
              key={i}
              onClick={() => navigate('/search')}
              style={{ backgroundColor: cardBg, borderRadius: '16px', padding: '22px 26px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', cursor: 'pointer', flex: '1', minWidth: '180px', border: `1px solid ${borderColor}`, transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(26,115,232,0.2)'; e.currentTarget.style.borderColor = '#1a73e8' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = borderColor }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontWeight: '700', color: textColor, fontSize: '16px' }}>{route.from}</span>
                <span style={{ color: '#1a73e8', fontSize: '20px' }}>→</span>
                <span style={{ fontWeight: '700', color: textColor, fontSize: '16px' }}>{route.to}</span>
              </div>
              <p style={{ margin: '0 0 4px', fontSize: '13px', color: subColor }}>⏱ {route.duration} journey</p>
              <p style={{ margin: '0 0 10px', fontSize: '13px', color: subColor }}>🚆 {route.trains} available</p>
              <p style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#1a73e8' }}>From {route.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why RailEase */}
      <div style={{ backgroundColor: dark ? '#1a1a2e' : '#1565c0', padding: '70px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ color: 'white', fontSize: '30px', margin: '0 0 10px', fontWeight: '700' }}>Why Choose RailEase?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>Everything you need for a perfect journey</p>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { icon: '⚡', title: 'Instant Booking', desc: 'Book your ticket in under 60 seconds!' },
              { icon: '💺', title: 'All Classes', desc: '1AC, 2AC, 3AC, Sleeper & General' },
              { icon: '🔒', title: '100% Secure', desc: 'Your data and payments fully protected.' },
              { icon: '📱', title: 'Easy Cancellation', desc: 'Cancel anytime with one click.' },
            ].map((f) => (
              <div key={f.title}
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', flex: '1', minWidth: '180px', border: '1px solid rgba(255,255,255,0.12)', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)' }}
              >
                <div style={{ fontSize: '44px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ margin: '0 0 10px', color: 'white', fontSize: '17px', fontWeight: '700' }}>{f.title}</h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.7' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enquiries Section */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ color: textColor, fontSize: '30px', margin: '0 0 8px', fontWeight: '700' }}>📋 Enquiries</h2>
          <p style={{ color: subColor, margin: 0 }}>Quick access to all railway enquiry services</p>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: '🎫', title: 'Reservation Enquiries', desc: 'Check your reservation status and details', link: 'https://www.irctc.co.in' },
            { icon: '📋', title: 'PNR Enquiry', desc: 'Check your PNR status instantly', link: 'https://www.indianrail.gov.in/pnr_Enq.html' },
            { icon: '🚆', title: 'Train Enquiry', desc: 'Get complete train schedule and info', link: 'https://enquiry.indianrail.gov.in/mntes/' },
            { icon: '💺', title: 'Train/Fare & Accommodation', desc: 'Check fare and seat availability', link: 'https://www.irctc.co.in' },
            { icon: '🗺️', title: 'Train Between Stations', desc: 'Find trains between important stations', link: 'https://enquiry.indianrail.gov.in/mntes/' },
            { icon: '📞', title: 'Railway Enquiry — 139', desc: 'Call 139 for 24/7 railway enquiry', link: 'tel:139' },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => window.open(item.link, '_blank')}
              style={{ backgroundColor: cardBg, borderRadius: '16px', padding: '22px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', cursor: 'pointer', flex: '1', minWidth: '250px', border: `1px solid ${borderColor}`, transition: 'all 0.3s', display: 'flex', alignItems: 'flex-start', gap: '16px' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(26,115,232,0.15)'; e.currentTarget.style.borderColor = '#1a73e8' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = borderColor }}
            >
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <h3 style={{ margin: '0 0 6px', color: textColor, fontSize: '15px', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ margin: '0 0 10px', color: subColor, fontSize: '13px', lineHeight: '1.5' }}>{item.desc}</p>
                <span style={{ color: '#1a73e8', fontSize: '13px', fontWeight: '600' }}>Enquire Now →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: sectionBg, padding: '70px 20px', textAlign: 'center' }}>
        <h2 style={{ color: textColor, fontSize: '30px', margin: '0 0 14px', fontWeight: '700' }}>Ready to Travel? 🚀</h2>
        <p style={{ color: subColor, margin: '0 0 32px', fontSize: '16px' }}>Join millions of happy passengers booking with RailEase</p>
        <button
          onClick={() => navigate('/search')}
          style={{ padding: '18px 56px', background: 'linear-gradient(135deg, #1a73e8, #0d47a1)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 20px rgba(26,115,232,0.4)', transition: 'all 0.3s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(26,115,232,0.5)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,115,232,0.4)' }}
        >
          BOOK YOUR TICKET NOW →
        </button>
      </div>

  {/* Footer
  <div style={{ background: 'linear-gradient(135deg, #370c0c, #000000)', padding: '40px 32px 24px' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginBottom: '24px', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, minWidth: '180px' }}>
          <p style={{ color: 'white', fontSize: '18px', fontWeight: '800', margin: '0 0 10px' }}>🚂 RailEase</p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: '0', lineHeight: '1.6' }}>India's fastest train booking platform. Book smarter, travel better.</p>
        </div>
        <div style={{ flex: 1, minWidth: '140px' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: '0 0 6px' }}>🔍 Search Trains</p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: '0 0 6px' }}>🎫 My Tickets</p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: '0' }}>👤 My Account</p>
        </div>
        <div style={{ flex: 1, minWidth: '140px' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Developer</p>
          <p style={{ color: '#ffd54f', fontSize: '15px', fontWeight: '700', margin: '0 0 4px' }}>Arif Siddique</p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: '0' }}>Full Stack Developer</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', margin: '0' }}>© 2026 RailEase. Made with ❤️ in India 🇮🇳</p>
      </div>
    </div>
  </div> */}

      {/* Footer */}
    <div style={{ backgroundColor: dark ? '#1e1e2e' : '#0d47a1', padding: '28px 20px', textAlign: 'center' }}>
      <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 6px', fontSize: '15px', fontWeight: '600' }}>
        🚂 RailEase — India's Fast Train Booking Platform
      </p>
      <p style={{ color: 'rgba(255,255,255,0.45)', margin: '0 0 6px', fontSize: '12px' }}>
        © 2026 RailEase. Made with ❤️ in India
      </p>
      <p style={{ color: 'rgba(255,255,255,0.4)', margin: 0, fontSize: '12px' }}>
        Designed & Developed by <span style={{ color: '#ffd54f', fontWeight: '600' }}>Arif Siddique</span>
      </p>
    </div>
    </div>
  )
}

export default Home