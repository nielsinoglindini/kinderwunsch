import { useEffect, useState } from 'react';
import { Heart, Activity, Leaf, Calendar, ArrowRight, Menu, Check } from 'lucide-react';
import { BookingModal } from './components/BookingModal';
import './index.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'initial' | 'followup' | 'package' | undefined>(undefined);

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
            Kathrin <span>Kinderwunschbegleitung</span>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">Über mich</a>
            <a href="#services" className="nav-link">Leistungen</a>
            <a href="#pricing" className="nav-link">Preise</a>
            <a href="#blog" className="nav-link">Ratgeber</a>
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
            <h1>Du bist nicht allein auf diesem Weg.</h1>
            <p>
              Ein Kinderwunsch kann eine hochemotionale Reise sein. Zwischen Hoffnung, Ungewissheit und Trauer biete ich Ihnen einen sicheren Raum. Mit Empathie, Erfahrung und Herz bin ich an Ihrer Seite.
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
              src="/hero.png" 
              alt="Kathrin - Ihre Kinderwunschbegleiterin" 
              className="hero-image"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section section-light">
        <div className="container about-grid">
          <div className="animate-on-scroll">
            {/* Visual element or secondary image placeholder */}
            <h2 className="section-title">Wer steckt dahinter?</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', marginBottom: '32px' }}></div>
            <div className="about-text">
              <p>
                Mein Name ist Kathrin. Ich weiß aus eigener Erfahrung, dass der Weg zum Wunschkind nicht immer gerade verläuft. Oft fühlt man sich unverstanden oder allein gelassen von dem medizinischen System, das zwar technisch hervorragend ist, aber oft nicht die emotionale Kapazität hat, die Sie jetzt brauchen.
              </p>
              <p>
                Ich habe es mir zur Lebensaufgabe gemacht, Frauen und Paare auf diesem sensiblen Weg zu begleiten. Egal ob nach einer Fehlgeburt, in der Entscheidungsphase zur künstlichen Befruchtung (IVF/ICSI) oder einfach, wenn die Seele eine Pause braucht.
              </p>
            </div>
            <div className="about-highlight">
              "Es braucht ein Dorf, um auf diesem Weg nicht den Mut zu verlieren. Ich bin für Sie da."
            </div>
          </div>
          <div className="animate-on-scroll" style={{ paddingLeft: '24px' }}>
             <p className="mb-4" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>Meine Philosophie:</p>
             <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '12px', borderRadius: '50%' }}>
                    <Heart size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Empathisch</h4>
                    <span style={{ color: 'var(--color-text-muted)' }}>Jede Geschichte bekommt den Raum, den sie braucht. Nichts wird tabuisiert.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '12px', borderRadius: '50%' }}>
                    <Activity size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Fundiert</h4>
                    <span style={{ color: 'var(--color-text-muted)' }}>Klarheit in medizinischen Begriffen. Ich übersetze Fachchinesisch in für Sie greifbare Informationen.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '12px', borderRadius: '50%' }}>
                    <Leaf size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Ganzheitlich</h4>
                    <span style={{ color: 'var(--color-text-muted)' }}>Körper und Geist schwingen zusammen. Wir kümmern uns um Ihr inneres Gleichgewicht.</span>
                  </div>
                </li>
             </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Meine Leistungen</h2>
            <p className="section-subtitle">
              Individuelle Begleitung, die genau da ansetzt, wo Sie sich gerade auf Ihrem Weg befinden.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <Menu size={28} /> {/* Placeholder for consultation icon */}
              </div>
              <h3>Beratung</h3>
              <p>
                Klärendes Gespräch vor dem ersten Termin in der Kinderwunschklinik. Wir besprechen gemeinsam Ihre Fragen, erklären Fachbegriffe wie IVF oder ICSI ganz einfach und nehmen Ihnen die erste Angst.
              </p>
            </div>
            
            <div className="service-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="service-icon">
                <Heart size={28} />
              </div>
              <h3>Begleitung</h3>
              <p>
                Der Weg ist oft ein Marathon emotionaler Höhen und Tiefen. Ich begleite Sie durch Wartezyklen, Behandlungsphasen und bin Ihre emotionale Stütze, wenn das Umfeld Sie gerade nicht versteht.
              </p>
            </div>
            
            <div className="service-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="service-icon">
                <Leaf size={28} />
              </div>
              <h3>Coaching nach Verlust</h3>
              <p>
                Raum für Trauer und Neuorientierung. Wenn Sie eine Fehlgeburt erlitten haben, hilft es oft, behutsam neue Kraft zu schöpfen und dem eigenen Körper wieder zu vertrauen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section section-light">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Preise & Angebote</h2>
            <p className="section-subtitle">
              Transparente Preisgestaltung für eine verlässliche und liebevolle Unterstützung auf Ihrem individuellen Weg.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Card 1: Erstgespräch */}
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-card-header">
                <h3>Erstgespräch</h3>
                <span className="duration">Dauer: 60 Minuten</span>
                <div className="price-display">
                  <span className="price-amount">110</span>
                  <span className="price-currency">€</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Ausführliche Anamnese und Kennenlernen</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Klärung Ihrer dringlichsten Fragen</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Erste Orientierung und nächste Schritte</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Persönlich, per Telefon oder Zoom-Meeting</span>
                </li>
              </ul>
              <button 
                onClick={() => handleOpenBooking('initial')} 
                className="btn btn-outline" 
                style={{ width: '100%', marginTop: 'auto' }}
              >
                Erstgespräch buchen
              </button>
            </div>

            {/* Card 2: Folgesitzung */}
            <div className="pricing-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="pricing-card-header">
                <h3>Folgesitzung</h3>
                <span className="duration">Dauer: 60 Minuten</span>
                <div className="price-display">
                  <span className="price-amount">90</span>
                  <span className="price-currency">€</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Fortlaufende, tiefgehende Begleitung</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Umgang mit emotionalen Achterbahnfahrten</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Medizinische Begriffsaufklärung (IVF/ICSI etc.)</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Körper- und Mentalübungen für mehr Gelassenheit</span>
                </li>
              </ul>
              <button 
                onClick={() => handleOpenBooking('followup')} 
                className="btn btn-outline" 
                style={{ width: '100%', marginTop: 'auto' }}
              >
                Folgesitzung buchen
              </button>
            </div>

            {/* Card 3: 5er-Paket */}
            <div className="pricing-card featured animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="pricing-card-badge">Empfehlung</div>
              <div className="pricing-card-header">
                <h3>5er-Paket</h3>
                <span className="duration">5 Sitzungen à 60 Min.</span>
                <div className="price-display">
                  <span className="price-amount">400</span>
                  <span className="price-currency">€</span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 500 }}>Sie sparen 50 € gegenüber Einzelbuchungen</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Ganzheitliche Begleitung über einen längeren Zeitraum</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Flexible Zeiteinteilung nach Ihren Bedürfnissen</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Gültigkeit: 1 Jahr ab Kaufdatum</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Priorisierte Terminvereinbarung</span>
                </li>
                <li className="pricing-feature-item">
                  <Check size={18} color="var(--color-primary)" />
                  <span>Zusätzlicher E-Mail-Support zwischen den Sitzungen</span>
                </li>
              </ul>
              <button 
                onClick={() => handleOpenBooking('package')} 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: 'auto' }}
              >
                Paket buchen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Ratgeber Section (SEO Focus) */}
      <section id="blog" className="section section-secondary">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Wissen & Ratgeber</h2>
            <p className="section-subtitle">
              Impulse und Informationen, um Ihnen Klarheit und Mut für die nächsten Schritte zu geben.
            </p>
          </div>
          
          <div className="blog-list">
            <div className="blog-item animate-on-scroll">
              <div>
                <span style={{ fontWeight: 500 }}>Aufklärung</span>
                <h4>Wusstest du, dass fast jede 4. Schwangerschaft in einer Fehlgeburt endet?</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                  Sie sind damit nicht allein. Warum dieses Thema kein Tabu sein darf und wie Validierung der Trauer hilft.
                </p>
              </div>
              <ArrowRight color="var(--color-primary)" />
            </div>
            
            <div className="blog-item animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div>
                <span style={{ fontWeight: 500 }}>Klinik Guide</span>
                <h4>Was passiert beim ersten Termin in der Klinik?</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                  Die 5 wichtigsten Fragen für Ihr Erstgespräch in der Kinderwunschklinik als Checkliste.
                </p>
              </div>
              <ArrowRight color="var(--color-primary)" />
            </div>
            
            <div className="blog-item animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div>
                <span style={{ fontWeight: 500 }}>Umfeld</span>
                <h4>Dinge, die man einer Frau mit unerfülltem Kinderwunsch nicht sagen sollte.</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                  Wie Angehörige besser unterstützen können, ohne versehentlich zu verletzen.
                </p>
              </div>
              <ArrowRight color="var(--color-primary)" />
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '48px' }}>
            <a href="#blog" className="btn btn-outline" style={{ fontSize: '0.95rem' }}>Alle Artikel lesen</a>
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
            <h2 className="section-title">Lassen Sie uns ins Gespräch kommen</h2>
            <p className="mb-8" style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              Der erste Schritt ist oft der schwerste. Buchen Sie hier ganz einfach Ihren Wunschtermin für ein Erstgespräch oder Folgesitzungen (per Telefon oder Zoom).
            </p>
            <button onClick={() => handleOpenBooking()} className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', cursor: 'pointer' }}>
              Termin online buchen
            </button>
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
                <li><a href="#blog">Ratgeber</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleOpenBooking(); }}>Termin buchen</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul>
                <li><a href="mailto:kontakt@kathrin-kinderwunsch.de">kontakt@kathrin-kinderwunsch.de</a></li>
                <li><a href="#impressum">Impressum</a></li>
                <li><a href="#datenschutz">Datenschutz</a></li>
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
    </>
  );
}

export default App;
