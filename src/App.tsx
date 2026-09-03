import { useEffect, useState } from 'react';
import { Heart, Activity, Leaf, Calendar, Menu, X, Check, Stethoscope, Star, Compass } from 'lucide-react';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import './index.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'initial' | 'followup' | 'package' | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    inPresence: false,
    onlineZoom: false,
    privacyAccepted: false
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'impressum' | 'privacy'>('privacy');

  const handleOpenLegal = (type: 'impressum' | 'privacy') => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setContactForm(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setContactForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setContactSubmitted(true);
    }, 600);
  };

  const handleOpenBooking = (service?: 'initial' | 'followup' | 'package') => {
    setSelectedService(service);
    setIsBookingOpen(true);
    setIsMobileMenuOpen(false);
  };

  // Intersection observer for fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(24px)';
      (el as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            Kathrin <span className="logo-accent">Scheu</span>
            <span className="logo-divider">|</span>
            <span className="logo-role">Ganzheitliche Kinderwunschberaterin</span>
          </a>

          <div className="nav-links">
            <a href="#about" className="nav-link">Über mich</a>
            <a href="#services" className="nav-link">Leistungen</a>
            <a href="#strengthen" className="nav-link">Warum ich</a>
            <a href="#pricing" className="nav-link">Preise</a>
            <button onClick={() => handleOpenBooking()} className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
              <Calendar size={16} /> Termin buchen
            </button>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Navigation öffnen"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Über mich</a>
          <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Leistungen</a>
          <a href="#strengthen" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Warum ich</a>
          <a href="#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Preise</a>
          <button onClick={() => handleOpenBooking()} className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
            <Calendar size={16} /> Termin buchen
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <div className="ambient-blob blob-3"></div>

        <div className="container hero-content">
          <div className="hero-text animate-on-scroll">
            <div className="pill-badge">
              <span className="dot"></span>
              Ganzheitlich • Empathisch • Wissenschaftlich fundiert
            </div>

            <h1>
              Du musst diesen Weg <br />
              <span className="editorial-italic">nicht alleine</span> gehen.
            </h1>

            <p className="hero-subtitle">
              Deine ganzheitliche Begleitung im Kinderwunsch.
            </p>

            <p>
              Ein Kinderwunsch kann eine hochemotionale Reise sein. Zwischen Hoffnung, Ungewissheit und Trauer begleite ich dich auf deinem Weg zum Wunschkind – mit Empathie, Erfahrung und Herz bin ich an deiner Seite.
            </p>

            <div className="hero-actions">
              <button onClick={() => handleOpenBooking('initial')} className="btn btn-primary">
                Erstgespräch buchen
              </button>
              <a href="#services" className="btn btn-outline">
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div className="hero-image-container">
              <img
                src="hero.jpg"
                alt="Kathrin - Ihre Kinderwunschbegleiterin"
                className="hero-image"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="floating-badge">
              <div className="floating-badge-icon">
                <Heart size={20} />
              </div>
              <div>
                <div className="floating-badge-title">8 Jahre eigene Erfahrung</div>
                <div className="floating-badge-desc">Mit Herz, Empathie & Wissen</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section section-light">
        <div className="container about-grid">
          {/* Left: Foto (Spiegelbild/Portrait) */}
          <div className="animate-on-scroll">
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img
                  src="about_kathrin.png"
                  alt="Kathrin - Ihre Kinderwunschbegleiterin"
                  className="about-image"
                />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="animate-on-scroll">
            <div className="pill-badge" style={{ backgroundColor: 'var(--color-sage-soft)', color: 'var(--color-sage)', borderColor: 'var(--color-sage-border)' }}>
              <span className="dot" style={{ backgroundColor: 'var(--color-sage)' }}></span>
              Über mich
            </div>

            <h2 className="section-title">Wer dich auf deinem Weg begleitet</h2>
            <div style={{ width: '56px', height: '3px', backgroundColor: 'var(--color-primary)', borderRadius: '2px', marginBottom: '28px' }}></div>

            <div className="about-text">
              <p>
                Der Weg zum Wunschkind ist oft kein gerader Strich auf einem Test. Manchmal ist er ein jahrelanger, kräftezehrender Marathon. Ich kenne diesen Weg nicht nur aus Lehrbüchern, von Freunden oder Kollegen – <strong>ich bin ihn selbst acht Jahre lang gegangen.</strong> Aus tiefster eigener Erfahrung weiß ich, wie sich das Bangen, die Trauer und die schmerzhaften Rückschläge anfühlen. Etwas, das vermeintlich so einfach scheint - schwanger zu werden - wird zu einer scheinbar unlösbaren und unkontrollierbaren Situation. Ich selbst habe mich damals so ohnmächtig gefühlt und hätte all’ meine Fragen, Gedanken & Ängste gerne mit jemandem geteilt, der einen ganzheitlichen Blick auf das Thema Kinderwunsch wirft und mich empathisch und professionell begleitet.
              </p>
              <p>
                Genau deshalb habe ich es mir zur Lebensaufgabe gemacht, Frauen und Paare auf diesem sensiblen Weg zu begleiten und einen Raum für dich zu schaffen, in dem deine Seele endlich wieder zur Ruhe kommen darf. Alle Gefühle haben im Gespräch ihren berechtigten Platz: Wut, Verzweiflung, Trauer – aber auch die leise, unerschütterliche Hoffnung. Und genau in dieser Hoffnung liegt deine Kraft: Gemeinsam gehen wir Schritt für Schritt vorwärts, im tiefen Vertrauen darauf, dass dein Weg ein gutes Ziel finden wird.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <div className="pill-badge">
              <span className="dot"></span>
              Leistungen
            </div>
            <h2 className="section-title">Wie ich dich unterstützen kann</h2>
            <p className="section-subtitle">
              Ich begleite dich sicher, einfühlsam und absolut urteilsfrei durch deine individuelle Situation:
            </p>
          </div>

          <div className="services-grid">
            {/* Card 1: Kinderwunschbehandlung (Theme Sage) */}
            <div className="service-card theme-sage animate-on-scroll">
              <div className="category-tag">Kinderwunsch</div>
              <div className="service-icon">
                <Stethoscope size={28} />
              </div>
              <h3>Kinderwunschbehandlung</h3>
              <p>
                Vorbereitung und Begleitung deiner IUI, IVF oder ICSI.
              </p>
            </div>

            {/* Card 2: Gefühlschaos & Sorgen (Theme Rose) */}
            <div className="service-card theme-rose animate-on-scroll" style={{ transitionDelay: '0.05s' }}>
              <div className="category-tag">Emotionale Stärke</div>
              <div className="service-icon">
                <Heart size={28} />
              </div>
              <h3>Gefühlschaos & Sorgen</h3>
              <p>
                Umgang mit Ängsten vor, während und nach der Schwangerschaft.
              </p>
            </div>

            {/* Card 3: Sternenkind-Begleitung (Theme Lavender) */}
            <div className="service-card theme-lavender animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="category-tag">Trost & Halt</div>
              <div className="service-icon">
                <Star size={28} />
              </div>
              <h3>Sternenkind-Begleitung</h3>
              <p>
                Halt und Verarbeitung bei Verlust deines Wunders.
              </p>
            </div>

            {/* Card 4: Abschied & Neuorientierung (Theme Amber) */}
            <div className="service-card theme-amber animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
              <div className="category-tag">Perspektiven</div>
              <div className="service-icon">
                <Compass size={28} />
              </div>
              <h3>Abschied & Neuorientierung</h3>
              <p>
                Loslassen des Kinderwunsches und das Erarbeiten eines möglichen „Plan B“ (z. B. Adoption, Pflegschaft).
              </p>
            </div>

            {/* Card 5: Körper & Diagnose (Theme Sky) */}
            <div className="service-card theme-sky animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="category-tag">Gesundheit</div>
              <div className="service-icon">
                <Activity size={28} />
              </div>
              <h3>Körper & Diagnose</h3>
              <p>
                Leben und Kraft finden mit Endometriose bei Kinderwunsch.
              </p>
            </div>

            {/* Card 6: Alternative Wege (Theme Primary) */}
            <div className="service-card theme-primary animate-on-scroll" style={{ transitionDelay: '0.25s' }}>
              <div className="category-tag">Beratung</div>
              <div className="service-icon">
                <Leaf size={28} />
              </div>
              <h3>Alternative Wege</h3>
              <p>
                Beratung und Begleitung bei Samen- oder Eizellspende (Gametenspende).
              </p>
            </div>
          </div>

          <div className="text-center animate-on-scroll" style={{ marginTop: '56px' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
              Ganz egal, an welchem Punkt du gerade stehst: Wir schauen gemeinsam, was du <em>jetzt</em> brauchst, um wieder in deine Kraft zu finden.
            </p>
          </div>
        </div>
      </section>

      {/* Why I can strengthen you Section */}
      <section id="strengthen" className="section section-light">
        <div className="container strengthen-grid">
          {/* Left: Text Content */}
          <div className="animate-on-scroll" style={{ textAlign: 'left' }}>
            <div className="pill-badge" style={{ backgroundColor: 'var(--color-gold-soft)', color: 'var(--color-gold)', borderColor: 'rgba(184, 134, 61, 0.25)' }}>
              <span className="dot" style={{ backgroundColor: 'var(--color-gold)' }}></span>
              Qualifikation & Erfahrung
            </div>

            <h2 className="section-title">Warum ich dich auf deinem Weg stärken kann</h2>
            <div style={{ width: '56px', height: '3px', backgroundColor: 'var(--color-primary)', borderRadius: '2px', marginBottom: '28px' }}></div>

            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-main)', marginBottom: '32px' }}>
              Ich bin Kathrin, ausgebildete ganzheitliche Kinderwunschberaterin, Business Coach und habe 10 Jahre Erfahrung in der Persönlichkeitsentwicklung von jungen Erwachsenen. Mit dieser Verbindung aus tiefem Mitgefühl und professioneller Struktur begleite ich dich dabei, um dir in einer emotionalen Zeit die Stabilität und das Vertrauen zurückzugeben, das du gerade brauchst. Aus eigener Erfahrung weiß ich, wie viel Kraft in dir steckt – lass’ sie uns gemeinsam wieder sichtbar machen!
            </p>

            {/* Certification Badge */}
            <div className="certification-card">
              <div className="seal-icon-wrapper">
                <svg width="50" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="22" fill="#FFFBF8" stroke="var(--color-primary)" strokeWidth="1.5" />
                  <circle cx="24" cy="24" r="19" fill="none" stroke="var(--color-amber)" strokeWidth="0.75" strokeDasharray="3 2" />
                  <path d="M24 14 C24 14 20 10 17 13 C14 16 17 21 24 27 C31 21 34 16 31 13 C28 10 24 14 24 14 Z" fill="var(--color-primary)" opacity="0.85" />
                  <path d="M24 23 L26 34 L24 32 L22 34 Z" fill="var(--color-primary)" />
                  <path d="M20 25 L15 33 L18 32 L20 30 Z" fill="var(--color-amber)" />
                  <path d="M28 25 L33 33 L30 32 L28 30 Z" fill="var(--color-amber)" />
                </svg>
              </div>
              <div>
                <div className="seal-category">Ausbildung & Siegel</div>
                <div className="seal-title">Zertifizierte Kinderwunschberaterin</div>
              </div>
            </div>
          </div>

          {/* Right: Bild/Grafik */}
          <div className="animate-on-scroll">
            <div className="strengthen-image-wrapper">
              <div className="strengthen-image-container">
                <img
                  src="strengthen_graphic.jpg"
                  alt="Wachstum und Unterstützung im Kinderwunsch"
                  className="strengthen-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <div className="pill-badge">
              <span className="dot"></span>
              Preise & Konditionen
            </div>
            <h2 className="section-title">Was du erwarten kannst und dafür investierst</h2>
            <p className="section-subtitle">
              Transparente Preisgestaltung für eine verlässliche und liebevolle Unterstützung auf deinem individuellen Weg.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Card 1: Erstgespräch */}
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-header">
                <h3>Erstgespräch</h3>
                <div className="pricing-price-wrap">
                  <span className="pricing-amount">120</span>
                  <span className="pricing-currency">€</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>einzeln oder als Paar</div>
              </div>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '24px' }}>
                Der Kinderwunschweg kann emotional aufwühlend sein und <strong>brennende Fragen</strong> oder <strong>Sorgen</strong> hinterlassen, die dich gedanklich kaum zur Ruhe kommen lassen. In unserem Erstgespräch schenke ich dir einen geschützten, bewertungsfreien Raum, in dem alles, was dich aktuell belastet, laut ausgesprochen und sortiert werden darf. Gemeinsam ordnen wir das <strong>Chaos im Kopf</strong>, damit du schon nach dem ersten Gespräch mit spürbar mehr <strong>Klarheit</strong>, <strong>Erleichterung</strong> und einem <strong>sicheren Gefühl</strong> für deine nächsten Schritte nach Hause gehst. Lass uns den ersten Schritt gemeinsam machen.
              </p>

              <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '20px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '14px', fontWeight: 600, color: 'var(--color-text-heading)' }}>
                  Mein Angebot für dich:
                </h4>
                <ul className="pricing-features">
                  <li className="pricing-feature-item">
                    <div className="feature-check-icon">
                      <Check size={14} />
                    </div>
                    <span><strong>Dauer:</strong> 60 Minuten</span>
                  </li>
                  <li className="pricing-feature-item">
                    <div className="feature-check-icon">
                      <Check size={14} />
                    </div>
                    <span><strong>Kosten:</strong> 120 € (einzeln oder als Paar)</span>
                  </li>
                  <li className="pricing-feature-item">
                    <div className="feature-check-icon">
                      <Check size={14} />
                    </div>
                    <span><strong>Ort:</strong> in Präsenz oder online via Zoom</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenBooking('initial')}
                className="btn btn-outline"
                style={{ width: '100%', marginTop: 'auto' }}
              >
                Erstgespräch buchen
              </button>
            </div>

            {/* Card 2: Folgegespräche (Featured) */}
            <div className="pricing-card featured animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="pricing-badge">Begleitend</div>

              <div className="pricing-header">
                <h3>Folgegespräche</h3>
                <div className="pricing-price-wrap">
                  <span className="pricing-amount">110</span>
                  <span className="pricing-currency">€</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>einzeln oder als Paar</div>
              </div>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '24px' }}>
                Du merkst nach dem Erstgespräch, dass du dir eine <strong>weiterführende, intensive Wegbegleitung</strong> wünschst? Nachdem wir im Erstgespräch die Basis gelegt haben, gehen wir in einem oder mehreren Folgegesprächen Schritt für Schritt weiter. Wir nehmen uns den Raum für deine <strong>aktuellen Fragen</strong>, sortieren die nächsten <strong>medizinischen</strong> oder <strong>emotionalen Schritte</strong> und fangen aufkommende <strong>Sorgen</strong> und <strong>Ängste</strong> direkt auf. Dabei knüpfen wir genau dort an, wo du gerade stehst und dir Begleitung wünschst.
              </p>

              <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '20px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '14px', fontWeight: 600, color: 'var(--color-text-heading)' }}>
                  Mein Angebot für dich:
                </h4>
                <ul className="pricing-features">
                  <li className="pricing-feature-item">
                    <div className="feature-check-icon" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}>
                      <Check size={14} />
                    </div>
                    <span><strong>Dauer:</strong> 60 Minuten</span>
                  </li>
                  <li className="pricing-feature-item">
                    <div className="feature-check-icon" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}>
                      <Check size={14} />
                    </div>
                    <span><strong>Kosten:</strong> 110 € (einzeln oder als Paar)</span>
                  </li>
                  <li className="pricing-feature-item">
                    <div className="feature-check-icon" style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}>
                      <Check size={14} />
                    </div>
                    <span><strong>Ort:</strong> in Präsenz oder online via Zoom</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenBooking('followup')}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 'auto' }}
              >
                Folgegespräch buchen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Booking Section */}
      <section id="contact" className="section section-light">
        <div className="container">
          <div className="contact-card animate-on-scroll">
            <div className="text-center">
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-primary-soft)', 
                color: 'var(--color-primary)', 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '20px',
                boxShadow: 'var(--shadow-subtle)'
              }}>
                <Calendar size={32} />
              </div>
              <h2 className="section-title">Lass‘ uns deinen ersten Schritt gehen.</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '36px' }}>
                Ich freue mich darauf, dich kennenzulernen und dir zuzuhören.
              </p>
            </div>

            {contactSubmitted ? (
              <div style={{ padding: '36px', backgroundColor: 'var(--color-sage-soft)', border: '1px solid var(--color-sage-border)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-sage)', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--color-text-heading)' }}>Vielen Dank für deine Nachricht!</h3>
                <p style={{ color: 'var(--color-text-main)', fontSize: '1.05rem' }}>Ich habe deine Anfrage erhalten und werde mich in Kürze bei dir melden.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Vor- und Nachname</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">E-Mail-Adresse</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">
                    Deine Nachricht: Schreibe mir gern‘ ein paar Zeilen über dich und wo du gerade stehst.
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    placeholder="Deine Nachricht (Freitextfeld - unbegrenzte Wortanzahl)"
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '12px', fontSize: '0.95rem' }}>
                    Erstgespräch gewünscht
                  </label>
                  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="inPresence"
                        checked={contactForm.inPresence}
                        onChange={handleContactChange}
                      />
                      <span>in Präsenz</span>
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="onlineZoom"
                        checked={contactForm.onlineZoom}
                        onChange={handleContactChange}
                      />
                      <span>online via Zoom</span>
                    </label>
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label className="checkbox-label" style={{ alignItems: 'flex-start', lineHeight: '1.5', fontSize: '0.9rem' }}>
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      checked={contactForm.privacyAccepted}
                      onChange={handleContactChange}
                      required
                      style={{ marginTop: '2px', flexShrink: 0 }}
                    />
                    <span>
                      Ich habe die <a href="#datenschutz" onClick={(e) => { e.preventDefault(); handleOpenLegal('privacy'); }} style={{ color: 'var(--color-primary)', textDecoration: 'underline', fontWeight: 600 }}>Datenschutzerklärung</a> gelesen und stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1.05rem', cursor: 'pointer' }}
                >
                  Nachricht abschicken
                </button>
              </form>
            )}

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '24px', textAlign: 'center' }}>
              Ihre Daten werden vertraulich behandelt (Standort DE/DSGVO konform).
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Kathrin Kinderwunsch</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '16px', lineHeight: 1.6, maxWidth: '340px' }}>
                Einfühlsame und professionelle Begleitung auf Ihrem Weg zum Wunschkind und bei Verlusten.
              </p>
            </div>

            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">Über mich</a></li>
                <li><a href="#services">Leistungen</a></li>
                <li><a href="#pricing">Preise</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleOpenBooking(); }}>Termin buchen</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul>
                <li><a href="mailto:kontakt@kathrin-kinderwunsch.de">kontakt@kathrin-kinderwunsch.de</a></li>
                <li><a href="#impressum" onClick={(e) => { e.preventDefault(); handleOpenLegal('impressum'); }}>Impressum</a></li>
                <li><a href="#datenschutz" onClick={(e) => { e.preventDefault(); handleOpenLegal('privacy'); }}>Datenschutz</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Kathrin Kinderwunschbegleitung. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedService(undefined);
        }}
        initialService={selectedService}
      />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        type={legalType}
      />
    </>
  );
}

export default App;
