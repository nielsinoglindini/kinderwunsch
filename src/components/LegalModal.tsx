import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'impressum' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div 
        className="booking-modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '750px', width: '90%', padding: '0px' }}
      >
        <button className="booking-modal-close" onClick={onClose} aria-label="Schließen" style={{ top: '24px', right: '24px' }}>
          <X size={24} />
        </button>

        <div className="booking-modal-header" style={{ padding: '32px 32px 16px', textAlign: 'left', borderBottom: '1px solid var(--color-bg-secondary)' }}>
          <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-main)' }}>
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h2>
        </div>

        <div className="booking-modal-body" style={{ padding: '32px', overflowY: 'auto', maxHeight: '60vh', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-main)', textAlign: 'left' }}>
          {type === 'impressum' ? (
            <div className="legal-content">
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600 }}>Angaben gemäß § 5 DDG</h3>
              <p style={{ marginBottom: '16px' }}>
                Kathrin Scheu<br />
                Kinderwunschbegleitung Hamburg<br />
                Schloßstraße 7b<br />
                21465 Reinbek
              </p>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '24px' }}>Kontakt</h3>
              <p style={{ marginBottom: '16px' }}>
                <a href="mailto:hallo@kinderwunschbegleitung-hamburg.de" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>hallo@kinderwunschbegleitung-hamburg.de</a>
              </p>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '24px' }}>Umsatzsteuer-ID</h3>
              <p style={{ marginBottom: '16px' }}>
                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE463354093
              </p>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '24px' }}>Redaktionell verantwortlich</h3>
              <p style={{ marginBottom: '16px' }}>
                Kathrin Scheu
              </p>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '24px' }}>Photocredits</h3>
              <p style={{ marginBottom: '16px' }}>
                <a href="https://www.walinski-fotografie.de" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://www.walinski-fotografie.de</a>
              </p>
            </div>
          ) : (
            <div className="legal-content">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600 }}>1. Datenschutz auf einen Blick & Allgemeine Hinweise</h3>
              <p style={{ marginBottom: '16px' }}>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst. Die Datenverarbeitung auf dieser Website erfolgt durch die Websitebetreiberin. Deren Kontaktdaten kannst du dem Impressum dieser Website entnehmen. Deine Daten werden zum einen dadurch erhoben, dass du uns diese mitteilst (z. B. im Kontaktformular). Andere Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs) werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten zu erhalten sowie deren Berichtigung oder Löschung zu verlangen. Zudem steht dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '28px' }}>2. Hosting</h3>
              <p style={{ marginBottom: '16px' }}>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter: IONOS. Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn du unsere Website besuchst, erfasst IONOS verschiedene Logfiles inklusive deiner IP-Adresse. Details entnimmst du der Datenschutzerklärung von IONOS: <a href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://www.ionos.de/terms-gtc/terms-privacy</a>. Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir mit IONOS einen Vertrag zur Auftragsverarbeitung (AVV) geschlossen.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '28px' }}>3. Pflichtinformationen & Verantwortliche Stelle</h3>
              <p style={{ marginBottom: '16px' }}>
                Die Betreiberin dieser Seiten nimmt den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften. Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Hinweis zur verantwortlichen Stelle:</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Kathrin Scheu<br />
                E-Mail: <a href="mailto:hallo@kinderwunschbegleitung-hamburg.de" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>hallo@kinderwunschbegleitung-hamburg.de</a>
              </p>
              <p style={{ marginBottom: '16px' }}>
                Du kannst eine bereits erteilte Einwilligung zur Datenverarbeitung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Im Falle von Verstößen gegen die DSGVO steht den Betroffenen zudem ein Beschwerderecht bei einer Aufsichtsbehörde zu. Du hast außerdem das Recht, Daten, die wir automatisiert verarbeiten, an dich oder an einen Dritten aushändigen zu lassen.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '28px' }}>4. Datenerfassung auf dieser Website (Kontaktformular & externe Dienste)</h3>
              <p style={{ marginBottom: '16px' }}>
                Wenn du uns per Kontaktformular oder im Rahmen einer Buchungsanfrage Anfragen zukommen lässt, werden deine Angaben inklusive der Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Für die technische Bereitstellung und Weiterleitung der Formulardaten nutzen wir den externen Dienst Formspree (Formspree, Inc., 2155 S. Bascom Ave, Suite 210, Campbell, CA 95008, USA). Die von dir im Formular eingegebenen Daten werden auf den Servern dieses Anbieters verarbeitet, um sie an unsere E-Mail-Adresse zuzustellen. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO) oder auf deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Wir haben mit dem Anbieter des Formular-Dienstes einen Vertrag zur Auftragsverarbeitung (Data Processing Agreement) geschlossen.
              </p>
            </div>
          )}
        </div>

        <div className="booking-modal-header" style={{ padding: '16px 32px 32px', borderBottom: 'none', borderTop: '1px solid var(--color-bg-secondary)', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-outline" onClick={onClose} style={{ cursor: 'pointer' }}>Schließen</button>
        </div>
      </div>
    </div>
  );
};
