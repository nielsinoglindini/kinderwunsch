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
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600 }}>1. Datenschutz auf einen Blick</h3>
              
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Allgemeine Hinweise</h4>
              <p style={{ marginBottom: '16px' }}>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Datenerfassung auf dieser Website</h4>
              <p style={{ marginBottom: '8px' }}><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
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
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
              </p>

              <p style={{ marginBottom: '8px' }}><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '28px' }}>2. Hosting</h3>
              <p style={{ marginBottom: '16px' }}>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>IONOS</h4>
              <p style={{ marginBottom: '16px' }}>
                Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von IONOS: <a href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://www.ionos.de/terms-gtc/terms-privacy</a>.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Auftragsverarbeitung</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '28px' }}>3. Allgemeine Hinweise und Pflichtinformationen</h3>
              
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Datenschutz</h4>
              <p style={{ marginBottom: '16px' }}>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Hinweis zur verantwortlichen Stelle</h4>
              <p style={{ marginBottom: '8px' }}>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p style={{ marginBottom: '16px' }}>
                Kathrin Scheu<br />
                Schloßstraße 7b<br />
                21465 Reinbek<br /><br />
                Telefon: +49 157 77555531<br />
                E-Mail: <a href="mailto:hallo@kinderwunschbegleitung-hamburg.de" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>hallo@kinderwunschbegleitung-hamburg.de</a>
              </p>
              <p style={{ marginBottom: '16px' }}>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Speicherdauer</h4>
              <p style={{ marginBottom: '16px' }}>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h4>
              <p style={{ marginBottom: '16px' }}>
                Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Empfänger von personenbezogenen Daten</h4>
              <p style={{ marginBottom: '16px' }}>
                Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
              <p style={{ marginBottom: '16px' }}>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
              <p style={{ marginBottom: '16px', fontWeight: 500 }}>
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>
              <p style={{ marginBottom: '16px', fontWeight: 500 }}>
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
              <p style={{ marginBottom: '16px' }}>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Recht auf Datenübertragbarkeit</h4>
              <p style={{ marginBottom: '16px' }}>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Auskunft, Berichtigung und Löschung</h4>
              <p style={{ marginBottom: '16px' }}>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Recht auf Einschränkung der Verarbeitung</h4>
              <p style={{ marginBottom: '8px' }}>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li style={{ marginBottom: '8px' }}>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li style={{ marginBottom: '8px' }}>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li style={{ marginBottom: '8px' }}>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              </ul>
              <p style={{ marginBottom: '16px' }}>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>SSL- bzw. TLS-Verschlüsselung</h4>
              <p style={{ marginBottom: '16px' }}>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Widerspruch gegen Werbe-E-Mails</h4>
              <p style={{ marginBottom: '16px' }}>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '28px' }}>4. Datenerfassung auf dieser Website</h3>
              
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Kontaktformular & Formularübermittlung via Formdall</h4>
              <p style={{ marginBottom: '16px' }}>
                Wenn Sie uns per Kontaktformular oder Buchungsanfrage Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Für die technische Bereitstellung, Verarbeitung und Weiterleitung unserer Formularanfragen nutzen wir den Dienst <strong>Formdall</strong> (ein Angebot der Formdall UG (haftungsbeschränkt) i. G., Deutschland). Wenn Sie eine Nachricht über unser Kontaktformular absenden, werden die von Ihnen eingegebenen Formulardaten an die Server von Formdall übermittelt und von dort als E-Mail an uns weitergeleitet. Die Datenverarbeitung erfolgt ausschließlich auf Servern innerhalb der Europäischen Union (Frankfurt am Main, Deutschland).
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Wir haben mit Formdall einen Vertrag zur Auftragsverarbeitung (AVV) abgeschlossen, der gewährleistet, dass Formdall die personenbezogenen Daten unserer Websitebesucher streng nach unseren Weisungen und unter Einhaltung der Vorgaben der DSGVO verarbeitet.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Anfrage per E-Mail, Telefon oder Telefax</h4>
              <p style={{ marginBottom: '16px' }}>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '28px' }}>5. Plugins und Tools</h3>
              
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Google Fonts (lokales Hosting)</h4>
              <p style={{ marginBottom: '16px' }}>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://policies.google.com/privacy?hl=de</a>.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '28px' }}>6. Audio- und Videokonferenzen</h3>
              
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Datenverarbeitung</h4>
              <p style={{ marginBottom: '16px' }}>
                Für die Kommunikation mit unseren Kunden setzen wir unter anderen Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz via Internet kommunizieren, werden Ihre personenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools erfasst und verarbeitet.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools bereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit) der Teilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige „Kontextinformationen“ im Zusammenhang mit dem Kommunikationsvorgang (Metadaten).
              </p>
              <p style={{ marginBottom: '16px' }}>
                Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur Abwicklung der Online-Kommunikation erforderlich sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp und -version, Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise bereitgestellt werden, werden diese ebenfalls auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten zählen insbesondere Cloud-Aufzeichnungen, Chat-/ Sofortnachrichten, Voicemails hochgeladene Fotos und Videos, Dateien, Whiteboards und andere Informationen, die während der Nutzung des Dienstes geteilt werden.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der verwendeten Tools haben. Unsere Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters. Weitere Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den Datenschutzerklärungen der jeweils eingesetzten Tools, die wir unter diesem Text aufgeführt haben.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Zweck und Rechtsgrundlagen</h4>
              <p style={{ marginBottom: '16px' }}>
                Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden Vertragspartnern zu kommunizieren oder bestimmte Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 lit. b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen Vereinfachung und Beschleunigung der Kommunikation mit uns bzw. unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die Zukunft widerrufbar.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Speicherdauer</h4>
              <p style={{ marginBottom: '16px' }}>
                Die unmittelbar von uns über die Video- und Konferenz-Tools erfassten Daten werden von unseren Systemen gelöscht, sobald Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Auf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der Konferenz-Tools.
              </p>

              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '16px' }}>Eingesetzte Konferenz-Tools</h4>
              
              <h5 style={{ fontSize: '1rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '12px' }}>Zoom</h5>
              <p style={{ marginBottom: '16px' }}>
                Wir nutzen Zoom. Anbieter dieses Dienstes ist die Zoom Communications Inc., San Jose, 55 Almaden Boulevard, 6th Floor, San Jose, CA 95113, USA. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Zoom: <a href="https://www.zoom.com/de/trust/privacy/privacy-statement/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://www.zoom.com/de/trust/privacy/privacy-statement/</a>.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.zoom.com/de/trust/privacy/privacy-statement/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://www.zoom.com/de/trust/privacy/privacy-statement/</a>.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5728" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://www.dataprivacyframework.gov/participant/5728</a>.
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Auftragsverarbeitung</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
              </p>

              <h5 style={{ fontSize: '1rem', marginBottom: '8px', color: 'var(--color-text-main)', fontWeight: 600, marginTop: '12px' }}>Microsoft Teams</h5>
              <p style={{ marginBottom: '16px' }}>
                Wir nutzen Microsoft Teams. Anbieter ist die Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Microsoft Teams: <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://privacy.microsoft.com/de-de/privacystatement</a>.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/6474" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>https://www.dataprivacyframework.gov/participant/6474</a>.
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Auftragsverarbeitung</strong></p>
              <p style={{ marginBottom: '16px' }}>
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
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
