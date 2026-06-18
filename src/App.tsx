import { useEffect, useState } from 'react';
import { Calendar, ArrowRight, Menu, Check } from 'lucide-react';
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
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-on-scroll" style={{ textAlign: 'left' }}>
              <span className="section-eyebrow">Kinderwunschberatung</span>
              <h1>Du musst diesen Weg nicht <em>alleine</em> gehen.</h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '36px', marginTop: '16px', lineHeight: '1.7' }}>
                Einfühlsame, professionelle Begleitung auf deiner ganz persönlichen Reise zum Wunschkind – mit Herz, Wissen und echter Erfahrung.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button onClick={() => handleOpenBooking('initial')} className="btn btn-primary" style={{ cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em', padding: '12px 24px' }}>
                  Kostenloses Erstgespräch
                </button>
                <a href="#services" className="btn btn-outline" style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em', padding: '12px 24px' }}>
                  Mehr erfahren
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <img 
                src="hero.jpg" 
                alt="Kathrin - Ihre Kinderwunschbegleiterin" 
                className="hero-image"
              />
              <div className="floating-circle-badge">
                <span className="emoji">🌸</span>
                <span className="text">Zertifizierte<br />Beraterin</span>
              </div>
            </div>
          </div>
          <div className="hero-scroll-indicator animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <span>Entdecken</span>
            <div className="hero-scroll-line"></div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section section-light" style={{ overflow: 'visible' }}>
        <div className="container about-grid">
          {/* Left: Foto (Spiegelbild/Portrait) */}
          <div className="animate-on-scroll">
            <div className="about-image-wrapper">
              <img 
                src="about_kathrin.png" 
                alt="Kathrin - Ihre Kinderwunschbegleiterin" 
                className="about-image"
              />
              <div className="floating-badge-card top-right">
                <h4>8+</h4>
                <p>Jahre Erfahrung</p>
              </div>
              <div className="floating-badge-card bottom-left">
                <h4>300+</h4>
                <p>Familien begleitet</p>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="animate-on-scroll" style={{ paddingLeft: '24px' }}>
            <span className="section-eyebrow" style={{ textAlign: 'left' }}>Über mich</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '24px', lineHeight: '1.2' }}>
              Mit Empathie & <em>echter Erfahrung</em> an deiner Seite
            </h2>
            <div className="about-text">
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Ich kenne diesen Weg. Nicht nur aus Büchern oder Seminaren – sondern aus meinem eigenen Herzen. Die Frage, ob ein Wunschkind kommen wird, hat auch mein Leben geprägt. Aus dieser tiefen persönlichen Erfahrung heraus habe ich mich zur Kinderwunschberaterin ausbilden lassen.
              </p>
              <blockquote className="blockquote-custom">
                „Jeder Mensch verdient das Gefühl, gehört und verstanden zu werden – besonders in dieser sensiblen Zeit.“
              </blockquote>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Heute begleite ich Frauen und Paare ganzheitlich: medizinisch fundiert, emotional unterstützend und immer auf Augenhöhe.
              </p>
              
              <div className="about-pills-container">
                <div className="about-pill">
                  <span className="icon">🎓</span>
                  <span>Zertifizierte Beraterin</span>
                </div>
                <div className="about-pill">
                  <span className="icon">💛</span>
                  <span>Eigene Erfahrung</span>
                </div>
                <div className="about-pill">
                  <span className="icon">🌿</span>
                  <span>Ganzheitlicher Ansatz</span>
                </div>
                <div className="about-pill">
                  <span className="icon">💬</span>
                  <span>Online & vor Ort</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Was ich für dich tun kann</h2>
            <p className="section-subtitle" style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 48px', lineHeight: '1.6' }}>
              Ob du gerade erst anfängst oder schon einen langen Weg hinter dir hast – ich begleite dich dort, wo du gerade stehst.
            </p>
          </div>
          
          <div className="services-grid-new">
            <div className="service-card-new animate-on-scroll">
              <div className="service-emoji-badge" style={{ backgroundColor: '#FCE7EC' }}>
                <span>🌸</span>
              </div>
              <h3>Erstberatung & Orientierung</h3>
              <p>
                Ein einfühlsames Gespräch zum Kennenlernen. Wir schauen gemeinsam, wo du stehst, was du brauchst – und welcher Weg für dich der richtige ist. Kostenlos und unverbindlich.
              </p>
            </div>
            
            <div className="service-card-new animate-on-scroll" style={{ transitionDelay: '0.05s' }}>
              <div className="service-emoji-badge" style={{ backgroundColor: '#FFF2D1' }}>
                <span>🤝</span>
              </div>
              <h3>Persönliche Begleitung</h3>
              <p>
                Langfristige, individuelle Unterstützung auf deiner Kinderwunschreise. Regelmäßige Gespräche, emotionale Stabilisierung und praktische Hilfe bei medizinischen Entscheidungen.
              </p>
            </div>
            
            <div className="service-card-new animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="service-emoji-badge" style={{ backgroundColor: '#F1F3F5' }}>
                <span>💻</span>
              </div>
              <h3>Online-Beratung</h3>
              <p>
                Flexible Videoberatung von zu Hause aus – für alle, die keinen weiten Weg auf sich nehmen können oder möchten. Dieselbe Wärme, dieselbe Qualität.
              </p>
            </div>

            <div className="service-card-new animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
              <div className="service-emoji-badge" style={{ backgroundColor: '#FDF3EE' }}>
                <span>👫</span>
              </div>
              <h3>Paarberatung</h3>
              <p>
                Der Kinderwunsch betrifft immer zwei. In gemeinsamen Gesprächen helfe ich euch, als Paar stark zu bleiben, füreinander da zu sein und den Weg gemeinsam zu gestalten.
              </p>
            </div>

            <div className="service-card-new animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="service-emoji-badge" style={{ backgroundColor: '#FFF9E6' }}>
                <span>🌙</span>
              </div>
              <h3>Trauer & Verlust</h3>
              <p>
                Fehlgeburten, gescheiterte Behandlungen – dieser Schmerz ist real. Ich biete einen sicheren Raum, um zu trauern, zu verarbeiten und wieder Kraft zu schöpfen.
              </p>
            </div>

            <div className="service-card-new animate-on-scroll" style={{ transitionDelay: '0.25s' }}>
              <div className="service-emoji-badge" style={{ backgroundColor: '#FFF3E6' }}>
                <span>✨</span>
              </div>
              <h3>Workshops & Gruppen</h3>
              <p>
                In kleinen Gruppen begegnen sich Frauen mit ähnlichen Erfahrungen. Austausch, Übungen und das Wissen: Du bist nicht allein. Online und in Hamburg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I can strengthen you Section */}
      <section className="section section-light">
        <div className="container strengthen-grid">
          {/* Left: Text Content */}
          <div className="animate-on-scroll" style={{ textAlign: 'left' }}>
            <span className="section-eyebrow">Philosophie</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '24px', lineHeight: '1.2' }}>
              Warum ich dich auf deinem Weg <em>stärken</em> kann
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
              Ich bin Kathrin, ausgebildete ganzheitliche Kinderwunschberaterin, Business Coach und habe 10 Jahre Erfahrung in der Persönlichkeitsentwicklung von jungen Erwachsenen. Mit dieser Verbindung aus tiefem Mitgefühl und professioneller Struktur begleite ich dich dabei, um dir in einer emotionalen Zeit die Stabilität und das Vertrauen zurückzugeben, das du gerade brauchst. Aus eigener Erfahrung weiß ich, wie viel Kraft in dir steckt – lass’ sie uns gemeinsam wieder sichtbar machen!
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
                src="strengthen_graphic.png" 
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
            <span className="section-eyebrow">Investition in dich</span>
            <h2 className="section-title">Was du erwarten kannst und dafür <em>investierst</em></h2>
            <p className="section-subtitle" style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 48px', lineHeight: '1.6' }}>
              Transparente Preisgestaltung für eine verlässliche und liebevolle Unterstützung auf deinem individuellen Weg.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Card 1: Erstgespräch */}
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-card-header">
                <h3>Erstgespräch</h3>
                <div className="price-display">
                  <span className="price-amount">€</span>
                </div>
              </div>
              <p className="pricing-description" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Der Kinderwunschweg kann emotional aufwühlend sein und <strong>brennende Fragen</strong> oder <strong>Sorgen</strong> hinterlassen, die dich gedanklich kaum zur Ruhe kommen lassen. In unserem Erstgespräch schenke ich dir einen geschützten, bewertungsfreien Raum, in dem alles, was dich aktuell belastet, laut ausgesprochen und sortiert werden darf. Gemeinsam ordnen wir das <strong>Chaos im Kopf</strong>, damit du schon nach dem ersten Gespräch mit spürbar mehr <strong>Klarheit</strong>, <strong>Erleichterung</strong> und einem sicheren Gefühl für deine nächsten Schritte nach Hause gehst. Lass uns den ersten Schritt gemeinsam machen.
              </p>
              <div style={{ borderTop: '1px solid var(--color-bg-secondary)', paddingTop: '20px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px', fontWeight: 600 }}>Mein Angebot für dich:</h4>
                <ul className="pricing-features" style={{ margin: 0 }}>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Dauer:</strong> 60 Minuten</span>
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Kosten:</strong> €</span>
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
                style={{ width: '100%', marginTop: 'auto', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em', padding: '12px 24px' }}
              >
                Erstgespräch buchen
              </button>
            </div>

            {/* Card 2: Folgegespräche */}
            <div className="pricing-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="pricing-card-header">
                <h3>Folgegespräche</h3>
                <div className="price-display">
                  <span className="price-amount">€</span>
                </div>
              </div>
              <p className="pricing-description" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Du merkst nach dem Erstgespräch, dass du dir eine <strong>weiterführende, intensive Wegbegleitung</strong> wünschst? Nachdem wir im Erstgespräch die Basis gelegt haben, gehen wir in einem oder mehreren Folgegesprächen Schritt für Schritt weiter. Wir nehmen uns den Raum für deine <strong>aktuellen Fragen</strong>, sortieren die nächsten <strong>medizinischen</strong> oder <strong>emotionalen Schritte</strong> und fangen aufkommende <strong>Sorgen</strong> und <strong>Ängste</strong> direkt auf. Dabei knüpfen wir genau dort an, wo du gerade stehst und dir Begleitung wünschst.
              </p>
              <div style={{ borderTop: '1px solid var(--color-bg-secondary)', paddingTop: '20px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px', fontWeight: 600 }}>Mein Angebot für dich:</h4>
                <ul className="pricing-features" style={{ margin: 0 }}>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Dauer:</strong> 60 Minuten</span>
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--color-primary)" />
                    <span><strong>Kosten:</strong> €</span>
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
                style={{ width: '100%', marginTop: 'auto', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em', padding: '12px 24px' }}
              >
                Folgegespräch buchen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Ratgeber Section (SEO Focus) */}
      <section id="blog" className="section section-secondary">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <span className="section-eyebrow">Ratgeber & Wissen</span>
            <h2 className="section-title">Impulse, Wissen & <em>Mutmacher</em></h2>
            <p className="section-subtitle" style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 48px', lineHeight: '1.6' }}>
              Hilfreiche Artikel und einfühlsame Gedanken, um dir Klarheit und Mut auf deinem Weg zu schenken.
            </p>
          </div>
          
          <div className="blog-list">
            <div className="blog-item animate-on-scroll">
              <div>
                <span style={{ fontWeight: 500 }}>Aufklärung</span>
                <h4>Wusstest du, dass fast jede 4. Schwangerschaft in einer Fehlgeburt endet?</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                  Du bist damit nicht allein. Warum dieses Thema kein Tabu sein darf und wie Validierung der Trauer hilft.
                </p>
              </div>
              <ArrowRight color="var(--color-primary)" />
            </div>
            
            <div className="blog-item animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div>
                <span style={{ fontWeight: 500 }}>Klinik Guide</span>
                <h4>Was passiert beim ersten Termin in der Klinik?</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                  Die 5 wichtigsten Fragen für dein Erstgespräch in der Kinderwunschklinik als Checkliste.
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
            <a href="#blog" className="btn btn-outline" style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.08em', padding: '12px 24px' }}>Alle Artikel lesen</a>
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
            <Calendar size={40} color="var(--color-primary)" style={{ margin: '0 auto 20px' }} />
            <span className="section-eyebrow">Kontakt & Termin</span>
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Lass uns ins <em>Gespräch</em> kommen</h2>
            <p className="mb-8" style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 32px' }}>
              Der erste Schritt ist oft der schwerste. Buche hier ganz einfach deinen Wunschtermin für ein Erstgespräch oder eine Folgesitzung (online via Zoom).
            </p>
            <button onClick={() => handleOpenBooking()} className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '0.85rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Termin online buchen
            </button>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '24px' }}>
              Deine Daten werden vertraulich behandelt (DSGVO konform).
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
                Einfühlsame und professionelle Begleitung auf deinem Weg zum Wunschkind und bei Verlusten.
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
