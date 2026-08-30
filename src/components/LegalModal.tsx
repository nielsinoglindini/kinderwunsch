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
          <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-heading)' }}>
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h2>
        </div>

        <div className="booking-modal-body" style={{ padding: '32px', overflowY: 'auto', maxHeight: '60vh', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-main)', textAlign: 'left' }}>
          {type === 'impressum' ? (
            <div className="legal-content">
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-heading)', fontWeight: 600 }}>Angaben gemäß § 5 TMG</h3>
              <p style={{ marginBottom: '16px' }}>
                Kathrin Scheu<br />
                Ganzheitliche Kinderwunschberaterin<br />
                Deutschland
              </p>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-heading)', fontWeight: 600, marginTop: '24px' }}>Kontakt</h3>
              <p style={{ marginBottom: '16px' }}>
                E-Mail: <a href="mailto:kontakt@kathrin-kinderwunsch.de" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>kontakt@kathrin-kinderwunsch.de</a>
              </p>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-heading)', fontWeight: 600, marginTop: '24px' }}>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
              <p style={{ marginBottom: '16px' }}>
                Berufsbezeichnung: Ganzheitliche Kinderwunschberaterin, Business Coach<br />
                Verliehen in: Deutschland
              </p>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-heading)', fontWeight: 600, marginTop: '24px' }}>EU-Streitschlichtung</h3>
              <p style={{ marginBottom: '16px' }}>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://ec.europa.eu/consumers/odr</a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-text-heading)', fontWeight: 600, marginTop: '24px' }}>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
              <p style={{ marginBottom: '16px' }}>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          ) : (
            <div className="legal-content">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-heading)', fontWeight: 600 }}>1. Datenschutz auf einen Blick</h3>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Allgemeine Hinweise</h4>
              <p style={{ marginBottom: '16px' }}>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Datenerfassung auf dieser Website</h4>
              <p style={{ marginBottom: '8px' }}><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Wie erfassen wir Ihre Daten?</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Wofür nutzen wir Ihre Daten?</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-heading)', fontWeight: 600, marginTop: '28px' }}>2. Hosting</h3>
              <p style={{ marginBottom: '16px' }}>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Externes Hosting</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Dies können v. a. IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, sein.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-heading)', fontWeight: 600, marginTop: '28px' }}>3. Allgemeine Hinweise und Pflichtinformationen</h3>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Datenschutz</h4>
              <p style={{ marginBottom: '16px' }}>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Hinweis zur verantwortlichen Stelle</h4>
              <p style={{ marginBottom: '8px' }}>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p style={{ marginBottom: '16px' }}>
                Kathrin Scheu<br />
                E-Mail: kontakt@kathrin-kinderwunsch.de
              </p>
              <p style={{ marginBottom: '16px' }}>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) decides.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
              <p style={{ marginBottom: '16px' }}>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
              <p style={{ marginBottom: '16px' }}>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Recht auf Datenübertragbarkeit</h4>
              <p style={{ marginBottom: '16px' }}>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Auskunft, Berichtigung und Löschung</h4>
              <p style={{ marginBottom: '16px' }}>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Recht auf Einschränkung der Verarbeitung</h4>
              <p style={{ marginBottom: '16px' }}>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-heading)', fontWeight: 600, marginTop: '28px' }}>4. Datenerfassung auf dieser Website</h3>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '6px', fontWeight: 600, marginTop: '16px' }}>Kontaktformular und Buchungsanfragen</h4>
              <p style={{ marginBottom: '16px' }}>
                Wenn Sie uns per Kontaktformular oder im Rahmen einer Buchungsanfrage Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) falls diese abgefragt wurde.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
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
