import { useEffect, useState } from 'react';
import { Heart, Activity, Leaf, Calendar, Menu, Check, Stethoscope, Star, Compass } from 'lucide-react';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import './index.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'initial' | 'followup' | 'package' | undefined>(undefined);

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
    // Simulate submission
    setTimeout(() => {
      setContactSubmitted(true);
    }, 600);
  };

  const handleOpenBooking = (service?: 'initial' | 'followup' | 'package') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  // Simple intersection observer setup for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
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
          <div className="nav-logo">
            Kathrin <span>Scheu</span> <span>|</span> <span>Ganzheitliche Kinderwunschberaterin</span>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">Über mich</a>
            <a href="#services" className="nav-link">Leistungen</a>
            <a href="#pricing" className="nav-link">Preise</a>
            <button onClick={() => handleOpenBooking()} className="btn btn-outline" style={{ padding: '8px 20px', cursor: 'pointer' }}>Termin buchen</button>
          </div>
          <div className="mobile-menu" style={{ display: 'none' /* Handled by media queries normally */ }}>
            <Menu className="text-gray-600" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text animate-on-scroll">
            <h1>Du musst diesen Weg <span className="hero-highlight">nicht alleine</span> gehen.</h1>
            <br />
            <p className="hero-subtitle">
              Deine <span className="hero-highlight">ganzheitliche</span> Begleitung im Kinderwunsch.
            </p>
            <p className="hero-description">
              Ein Kinderwunsch kann eine hochemotionale Reise sein. Zwischen Hoffnung, Ungewissheit und Trauer begleite ich dich auf deinem Weg zum Wunschkind – mit <span className="hero-highlight-bold" style={{ hyphens: 'none' }}>Empathie</span>, <span className="hero-highlight-bold">Erfahrung</span> und <span className="hero-highlight-bold">Herz</span> bin ich an deiner Seite.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button onClick={() => handleOpenBooking('initial')} className="btn btn-primary" style={{ cursor: 'pointer' }}>
                Erstgespräch buchen
              </button>
              <a href="#services" className="btn btn-outline">
                Mehr erfahren
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="hero-blob"></div>
            <img
              src="hero.jpg"
              alt="Kathrin - Ihre Kinderwunschbegleiterin"
              className="hero-image"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section section-light">
        <div className="container about-grid">
          {/* Left: Foto (Spiegelbild/Portrait) */}
          <div className="animate-on-scroll">
            <div className="about-image-wrapper">
              <img
                src="about_footprint.jpg"
                alt="Wegbegleitung - Ein Schritt nach dem anderen"
                className="about-image"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="animate-on-scroll" style={{ paddingLeft: '24px' }}>
            <h2 className="section-title">Wer dich auf deinem Weg <span className="text-highlight-italic">begleitet</span></h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', marginBottom: '32px' }}></div>
            <div className="about-text">
              <p>
                Der Weg zum Wunschkind ist oft kein gerader Strich auf einem Test. Manchmal ist er ein jahrelanger, kräftezehrender Marathon. Ich kenne diesen Weg nicht nur aus Lehrbüchern, von Freunden oder Kollegen – <span className="text-highlight-bold">ich bin ihn selbst acht Jahre lang gegangen.</span> Aus tiefster eigener Erfahrung weiß ich, wie sich das Bangen, die Trauer und die schmerzhaften Rückschläge anfühlen. Etwas, das vermeintlich so einfach scheint - <span className="text-highlight-bold">schwanger zu werden</span> - wird zu einer scheinbar unlösbaren und unkontrollierbaren Situation. Ich selbst habe mich damals so ohnmächtig gefühlt und hätte all’ meine Fragen, Gedanken & Ängste gerne mit jemandem geteilt, der einen <span className="text-highlight-bold">ganzheitlichen Blick</span> auf das Thema Kinderwunsch wirft und mich <span className="text-highlight-bold">empathisch</span> und <span className="text-highlight-bold">professionell</span> begleitet.
              </p>
              <p>
                Genau deshalb habe ich es mir zur Lebensaufgabe gemacht, Frauen und Paare auf diesem sensiblen Weg zu begleiten und einen <span className="text-highlight-bold">Raum für dich</span> zu schaffen, in dem deine <span className="text-highlight-bold">Seele endlich wieder zur Ruhe kommen darf.</span> Alle Gefühle haben im Gespräch ihren berechtigten Platz: <span className="text-highlight-bold">Wut, Verzweiflung, Trauer</span> – aber auch die leise, unerschütterliche <span className="text-highlight-bold">Hoffnung</span>. Und genau in dieser Hoffnung liegt deine Kraft: Gemeinsam gehen wir Schritt für Schritt vorwärts, im tiefen Vertrauen darauf, dass dein Weg ein gutes Ziel finden wird.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Wie ich dich <span className="text-highlight-italic">unterstützen</span> kann</h2>
            <p className="section-subtitle">
              Ich begleite dich <span className="text-highlight-bold">sicher</span>, <span className="text-highlight-bold">einfühlsam</span> und absolut <span className="text-highlight-bold">urteilsfrei</span> durch deine individuelle Situation:
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <Stethoscope size={28} />
              </div>
              <h3>Kinderwunschbehandlung</h3>
              <p>
                Vorbereitung und Begleitung deiner IUI, IVF oder ICSI.
              </p>
            </div>

            <div className="service-card animate-on-scroll" style={{ transitionDelay: '0.05s' }}>
              <div className="service-icon">
                <Heart size={28} />
              </div>
              <h3>Gefühlschaos & Sorgen</h3>
              <p>
                Umgang mit Ängsten vor, während und nach der Schwangerschaft.
              </p>
            </div>

            <div className="service-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="service-icon">
                <Star size={28} />
              </div>
              <h3>Sternenkind-Begleitung</h3>
              <p>
                Halt und Verarbeitung bei Verlust deines Wunders.
              </p>
            </div>

            <div className="service-card animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
              <div className="service-icon">
                <Compass size={28} />
              </div>
              <h3>Abschied & Neuorientierung</h3>
              <p>
                Loslassen des Kinderwunsches und das Erarbeiten eines möglichen „Plan B“ (z. B. Adoption, Pflegschaft).
              </p>
            </div>

            <div className="service-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="service-icon">
                <Activity size={28} />
              </div>
              <h3>Körper & Diagnose</h3>
              <p>
                Leben und Kraft finden mit Endometriose bei Kinderwunsch.
              </p>
            </div>

            <div className="service-card animate-on-scroll" style={{ transitionDelay: '0.25s' }}>
              <div className="service-icon">
                <Leaf size={28} />
              </div>
              <h3>Alternative Wege</h3>
              <p>
                Beratung und Begleitung bei Samen- oder Eizellspende (Gametenspende).
              </p>
            </div>
          </div>

          <div className="text-center animate-on-scroll" style={{ marginTop: '48px' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              Ganz egal, an welchem Punkt du gerade stehst: Wir schauen gemeinsam, was du <span className="text-highlight-italic">jetzt</span> brauchst, um wieder in deine <span className="text-highlight-bold">Kraft</span> zu finden.
            </p>
          </div>
        </div>
      </section>

      {/* Why I can strengthen you Section */}
      <section className="section section-light">
        <div className="container strengthen-grid">
          {/* Left: Text Content */}
          <div className="animate-on-scroll" style={{ textAlign: 'left' }}>
            <h2 className="section-title">Warum ich dich auf deinem Weg <span className="text-highlight-italic">stärken</span> kann</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', marginBottom: '32px' }}></div>
            <p className="strengthen-description" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-main)', marginBottom: '32px' }}>
              Ich bin Kathrin, ausgebildete <span className="text-highlight-bold">ganzheitliche Kinderwunschberaterin</span>, <span className="text-highlight-bold">Business Coach</span> und habe 10 Jahre Erfahrung in der <span className="text-highlight-bold">Persönlichkeitsentwicklung</span> von jungen Erwachsenen. Mit dieser Verbindung aus <span className="text-highlight-bold">tiefem Mitgefühl</span> und <span className="text-highlight-bold">professioneller Struktur</span> begleite ich dich dabei, um dir in einer emotionalen Zeit die <span className="text-highlight-bold">Stabilität</span> und das <span className="text-highlight-bold">Vertrauen</span> zurückzugeben, das du gerade brauchst. Aus eigener Erfahrung weiß ich, wie viel Kraft in dir steckt. <span className="text-highlight-italic">Lass’ sie uns gemeinsam wieder sichtbar machen!</span>
            </p>

            {/* Certification Badge */}
            <div className="certification-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 24px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(212, 184, 177, 0.3)',
              backgroundColor: 'var(--color-surface)',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left',
              maxWidth: '340px'
            }}>
              <div style={{ flexShrink: 0 }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="22" fill="#FDFBFA" stroke="var(--color-primary)" strokeWidth="1.5" />
                  <circle cx="24" cy="24" r="19" fill="none" stroke="var(--color-accent)" strokeWidth="0.75" strokeDasharray="3 2" />
                  <path d="M24 14 C24 14 20 10 17 13 C14 16 17 21 24 27 C31 21 34 16 31 13 C28 10 24 14 24 14 Z" fill="var(--color-primary)" opacity="0.85" />
                  <path d="M24 23 L26 34 L24 32 L22 34 Z" fill="var(--color-primary)" />
                  <path d="M20 25 L15 33 L18 32 L20 30 Z" fill="var(--color-accent)" />
                  <path d="M28 25 L33 33 L30 32 L28 30 Z" fill="var(--color-accent)" />
                </svg>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  marginBottom: '2px'
                }}>
                  Ausbildung & Siegel
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--color-text-main)',
                  lineHeight: '1.2'
                }}>
                  Zertifizierte Kinderwunschberaterin
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bild/Grafik Platzhalter */}
          <div className="animate-on-scroll">
            <div className="strengthen-image-wrapper">
              <img
                src="strengthen_graphic.jpg"
                alt="Wachstum und Unterstützung im Kinderwunsch"
                className="strengthen-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Was du <span className="text-highlight-italic">erwarten</span> kannst und dafür <span className="text-highlight-italic">investierst</span></h2>
            <p className="section-subtitle">
              Transparente Preisgestaltung für eine <span className="text-highlight-bold">verlässliche</span> und <span className="text-highlight-bold">liebevolle Unterstützung</span> auf deinem individuellen Weg.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Card 1: Erstgespräch */}
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-card-header">
                <h3>Erstgespräch</h3>
              </div>
              <p className="pricing-description" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Der Kinder&shy;wunsch&shy;weg kann emotional aufwühlend sein und <strong className="text-highlight-bold">brennende Fragen</strong> oder <strong className="text-highlight-bold">Sorgen</strong> hinterlassen, die dich gedanklich kaum zur Ruhe kommen lassen. In unserem Erstgespräch schenke ich dir einen geschützten, bewertungsfreien Raum, in dem alles, was dich aktuell belastet, laut ausgesprochen und sortiert werden darf. Gemeinsam ordnen wir das <strong className="text-highlight-bold">Chaos im Kopf</strong>, damit du schon nach dem ersten Gespräch mit spürbar mehr <strong className="text-highlight-bold">Klarheit</strong>, <strong className="text-highlight-bold">Erleichterung</strong> und einem <strong className="text-highlight-bold">sicheren Gefühl</strong> für deine nächsten Schritte nach Hause gehst. <span className="text-highlight-italic">Lass’ uns den ersten Schritt gemeinsam machen.</span>
              </p>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-bg-secondary)', paddingTop: '20px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px', fontWeight: 600 }}>Mein Angebot für dich:</h4>
                <ul className="pricing-features" style={{ margin: 0 }}>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Dauer:</strong> 60 Minuten</span>
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Kosten:</strong> 120 € (einzeln oder als Paar)</span>
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Ort:</strong> in Präsenz oder online via Zoom</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking('initial')}
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                Erstgespräch buchen
              </button>
            </div>

            {/* Card 2: Folgegespräche */}
            <div className="pricing-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="pricing-card-header">
                <h3>Folgegespräche</h3>
              </div>
              <p className="pricing-description" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Du merkst nach dem Erstgespräch, dass du dir eine <strong className="text-highlight-bold">weiterführende, intensive Wegbegleitung</strong> wünschst? Nachdem wir im Erstgespräch die Basis gelegt haben, gehen wir in einem oder mehreren Folgegesprächen Schritt für Schritt weiter. Wir nehmen uns den Raum für deine <strong className="text-highlight-bold">aktuellen Fragen</strong>, sortieren die nächsten <strong className="text-highlight-bold">medizinischen</strong> oder <strong className="text-highlight-bold">emotionalen Schritte</strong> und fangen aufkommende <strong className="text-highlight-bold">Sorgen</strong> und <strong className="text-highlight-bold">Ängste</strong> direkt auf. Dabei knüpfen wir genau dort an, wo du gerade stehst und dir Begleitung wünschst. <span className="text-highlight-italic">So entwickeln wir zusammen eine klare Perspektive, mit der du mutig und zuversichtlich nach vorne blicken kannst.</span>
              </p>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-bg-secondary)', paddingTop: '20px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px', fontWeight: 600 }}>Mein Angebot für dich:</h4>
                <ul className="pricing-features" style={{ margin: 0 }}>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Dauer:</strong> 60 Minuten</span>
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Kosten:</strong> 110 € (einzeln oder als Paar)</span>
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Ort:</strong> in Präsenz oder online via Zoom</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking('followup')}
                className="btn btn-outline"
                style={{ width: '100%' }}
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
          <div className="text-center animate-on-scroll" style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'var(--color-bg)',
            padding: '64px 40px',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <Calendar size={48} color="var(--color-primary)" style={{ margin: '0 auto 24px' }} />
            <h2 className="section-title">Lass‘ uns deinen ersten Schritt gehen.</h2>
            <p className="mb-8" style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
              Ich freue mich darauf, dich kennenzulernen und dir zuzuhören.
            </p>

            {contactSubmitted ? (
              <div className="animate-fade-in" style={{ padding: '24px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--color-text-main)' }}>Vielen Dank für deine Nachricht!</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>Ich habe deine Anfrage erhalten und werde mich in Kürze bei dir melden.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="contact-name" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Vor- und Nachname</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface)', fontSize: '1rem' }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="contact-email" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>E-Mail-Adresse</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface)', fontSize: '1rem' }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label htmlFor="contact-message" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
                    Schreibe mir gern‘ ein paar Zeilen über dich und wo du gerade stehst.
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    placeholder="Deine Nachricht"
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface)', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontWeight: 500, marginBottom: '12px' }}>Erstgespräch gewünscht</label>
                  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'normal' }}>
                      <input
                        type="checkbox"
                        name="inPresence"
                        checked={contactForm.inPresence}
                        onChange={handleContactChange}
                        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--color-primary)' }}
                      />
                      <span>in Präsenz</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'normal' }}>
                      <input
                        type="checkbox"
                        name="onlineZoom"
                        checked={contactForm.onlineZoom}
                        onChange={handleContactChange}
                        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--color-primary)' }}
                      />
                      <span>online via Zoom</span>
                    </label>
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', fontWeight: 'normal', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      checked={contactForm.privacyAccepted}
                      onChange={handleContactChange}
                      required
                      style={{ width: '18px', height: '18px', marginTop: '2px', cursor: 'pointer', accentColor: 'var(--color-primary)', flexShrink: 0 }}
                    />
                    <span>
                      Ich habe die <a href="#datenschutz" onClick={(e) => { e.preventDefault(); handleOpenLegal('privacy'); }} style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Datenschutzerklärung</a> gelesen und stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1.1rem', cursor: 'pointer', display: 'block' }}
                >
                  Nachricht abschicken
                </button>
              </form>
            )}
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '24px' }}>
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
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '16px', lineHeight: 1.6 }}>
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
