import { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({
    restaurant_name: '',
    business_type: '',
    city_country: '',
    employee_count: '',
    contact: '',
    main_pain_point: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simular envio por agora
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
        a:hover { opacity: 0.8; }
        input:focus, select:focus, textarea:focus { border-color: #F97316 !important; outline: none; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
      
      <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc' }}>
        {/* HEADER */}
        <header style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          padding: '1rem 2rem',
          backgroundColor: 'rgba(2, 6, 23, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
              <img src="/logo.png" alt="ChefIApp" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                ChefI<span style={{ color: '#F97316' }}>App</span>
                <span style={{ fontSize: '0.65rem', verticalAlign: 'super', color: '#64748b' }}>™</span>
              </span>
            </a>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="#features" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem' }}>Features</a>
              <a href="#early-access" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem' }}>Early Access</a>
              <a href="#early-access" style={{
                padding: '0.625rem 1.25rem',
                background: 'linear-gradient(135deg, #F97316, #EA580C)',
                borderRadius: '0.5rem',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.875rem',
                textDecoration: 'none'
              }}>Quero testar</a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section style={{ paddingTop: '8rem', paddingBottom: '5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            <img src="/logo.png" alt="ChefIApp" style={{ width: '90px', height: '90px', margin: '0 auto 1.5rem' }} />
            
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              borderRadius: '999px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              color: '#F97316'
            }}>
              <span style={{ width: '8px', height: '8px', background: '#F97316', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
              Beta aberto para restaurantes
            </div>
            
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Controle total da sua{' '}
              <span style={{
                background: 'linear-gradient(90deg, #F97316, #FB923C, #FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>equipe de restaurante</span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Plataforma de gestão para hospitality. Tarefas, check-in GPS, gamificação e dashboards.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#early-access" style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #F97316, #EA580C)',
                borderRadius: '0.75rem',
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)'
              }}>Quero testar no meu restaurante →</a>
            </div>
            
            <div style={{ marginTop: '3rem' }}>
              <p style={{ color: '#64748b', marginBottom: '1rem', fontSize: '0.875rem' }}>Funciona para:</p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['🍽️ Restaurantes', '🍸 Bares', '🏨 Hotéis', '🎉 Buffets'].map(t => (
                  <span key={t} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', fontSize: '0.875rem', color: '#94a3b8' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" style={{ padding: '4rem 1.5rem', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2.5rem' }}>Funcionalidades</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { emoji: '✅', title: 'Tarefas & Checklists', desc: 'Crie e atribua tarefas por turno' },
                { emoji: '📍', title: 'Check-in GPS', desc: 'Validação de presença por localização' },
                { emoji: '🎮', title: 'Gamificação XP', desc: 'Funcionários ganham XP e níveis' },
                { emoji: '🏆', title: 'Ranking', desc: 'Competição saudável entre equipe' },
                { emoji: '📊', title: 'Dashboards', desc: 'Métricas em tempo real' },
                { emoji: '🌍', title: 'Multi-idioma', desc: 'PT, ES, EN disponíveis' },
              ].map((f, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.emoji}</div>
                  <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{f.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EARLY ACCESS */}
        <section id="early-access" style={{ padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '650px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', padding: '0.375rem 1rem', background: 'rgba(249, 115, 22, 0.1)', border: '1px solid rgba(249, 115, 22, 0.2)', borderRadius: '999px', marginBottom: '1rem', fontSize: '0.875rem', color: '#F97316' }}>✨ Vagas Limitadas</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Early Access</h2>
              <p style={{ color: '#94a3b8' }}>Seja um dos primeiros a testar o ChefIApp™</p>
            </div>
            
            {submitted ? (
              <div style={{ textAlign: 'center', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Recebemos!</h3>
                <p style={{ color: '#94a3b8' }}>Vamos entrar em contacto em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <input name="restaurant_name" placeholder="Nome do restaurante" required value={formData.restaurant_name} onChange={e => setFormData({...formData, restaurant_name: e.target.value})} style={{ width: '100%', padding: '0.875rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white', fontSize: '1rem' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <select name="business_type" required value={formData.business_type} onChange={e => setFormData({...formData, business_type: e.target.value})} style={{ padding: '0.875rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white', fontSize: '1rem' }}>
                      <option value="">Tipo de negócio</option>
                      <option value="restaurante">Restaurante</option>
                      <option value="bar">Bar</option>
                      <option value="hotel">Hotel</option>
                      <option value="buffet">Buffet</option>
                    </select>
                    <input name="city_country" placeholder="Cidade, País" required value={formData.city_country} onChange={e => setFormData({...formData, city_country: e.target.value})} style={{ padding: '0.875rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white', fontSize: '1rem' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input name="employee_count" placeholder="Nº funcionários" required value={formData.employee_count} onChange={e => setFormData({...formData, employee_count: e.target.value})} style={{ padding: '0.875rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white', fontSize: '1rem' }} />
                    <input name="contact" placeholder="WhatsApp ou Email" required value={formData.contact} onChange={e => setFormData({...formData, contact: e.target.value})} style={{ padding: '0.875rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white', fontSize: '1rem' }} />
                  </div>
                  <textarea name="main_pain_point" placeholder="O que mais dói na gestão da sua equipe?" rows={2} value={formData.main_pain_point} onChange={e => setFormData({...formData, main_pain_point: e.target.value})} style={{ width: '100%', padding: '0.875rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: 'white', fontSize: '1rem', resize: 'none' }} />
                </div>
                <button type="submit" disabled={loading} style={{ marginTop: '1rem', width: '100%', padding: '1rem', background: loading ? '#64748b' : 'linear-gradient(135deg, #F97316, #EA580C)', border: 'none', borderRadius: '0.5rem', color: 'white', fontWeight: '600', fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer' }}>
                  {loading ? 'Enviando...' : 'Quero ser um dos primeiros!'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FOUNDER */}
        <section id="founder" style={{ padding: '4rem 1.5rem', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '1rem', background: 'linear-gradient(135deg, #F97316, #EA580C)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1rem' }}>EA</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Elder Miranda de Andrade</h3>
            <p style={{ color: '#F97316', marginBottom: '1rem' }}>Fundador & CEO</p>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Com experiência em tecnologia e paixão pela indústria de hospitality, criei o ChefIApp para resolver problemas reais de restaurantes.
            </p>
            <div style={{ padding: '1rem', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '0.5rem', borderLeft: '3px solid #F97316' }}>
              <p style={{ fontStyle: 'italic' }}>"From Ibiza with Love"</p>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>— goldmonkey.studio</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '2rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <img src="/logo.png" alt="ChefIApp" style={{ width: '28px', height: '28px' }} />
            <span style={{ fontWeight: '600' }}>ChefI<span style={{ color: '#F97316' }}>App</span>™</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>© 2025 ChefIApp™ by goldmonkey.studio</p>
          <p style={{ color: '#475569', fontSize: '0.75rem', marginBottom: '1rem' }}>Goldmonkey Studio LLC (Wyoming, USA) • Ibiza, Espanha</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.875rem' }}>
            <a href="/legal/privacy.html" style={{ color: '#64748b', textDecoration: 'none' }}>Privacidade</a>
            <a href="/legal/terms.html" style={{ color: '#64748b', textDecoration: 'none' }}>Termos</a>
            <a href="mailto:contact@goldmonkey.studio" style={{ color: '#64748b', textDecoration: 'none' }}>Contacto</a>
          </div>
          <p style={{ marginTop: '1rem' }}>🧡</p>
        </footer>
      </div>
    </>
  )
}
