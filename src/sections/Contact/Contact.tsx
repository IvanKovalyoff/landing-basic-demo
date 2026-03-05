import { FormEvent, useState } from 'react';
import styles from './Contact.module.scss';
import { site } from '../../data/site';

export default function Contact() {
  const [touched, setTouched] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '' && consent;

  const onSubmit = (_e: FormEvent<HTMLFormElement>) => {
    setTouched(true);
    // Let Netlify Forms handle the submission naturally
    // Don't preventDefault() - Netlify needs the standard form submission
  };

  return (
    <section id="kontakt">
      <div className={`container ${styles.contact}`}>
        <div className={styles.contact_head}>
          <h2 className={styles.contact_head_title}>{site.contact.title}</h2>
          <p className={`mutted ${styles.contact_head_desc}`}>{site.contact.description}</p>
        </div>

        <div className={styles.grid}>
          <div className={`card ${styles.info}`}>
            <h3 className={styles.title}>Dane kontaktowe</h3>

            <ul className={styles.list}>
              <li>
                <span className={styles.label}>Telefon</span>
                <a href={site.contact.phone.href} className={styles.link}>
                  {site.contact.phone.display}
                </a>
              </li>
              <li>
                <span className={styles.label}>E-mail</span>
                <a href={`mailto:${site.contact.email}`} className={styles.link}>
                  {site.contact.email}
                </a>
              </li>
              <li>
                <span className={styles.label}>Adres</span>
                <span>{site.contact.address}</span>
              </li>
            </ul>
            <div className={styles.mapWrap}>
              <iframe
                title="Mapa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={site.contact.mapEmbedUrl}
              />
            </div>
          </div>

          <div className={`card ${styles.formCard}`}>
            <h3 className={styles.title}>Formularz</h3>

            <form
              name={site.contact.form.name}
              method="POST"
              action={site.contact.form.thanksPath}
              onSubmit={onSubmit}
            >
              <input type="hidden" name="form-name" value={site.contact.form.name} />

              <p className="sr-only">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>

              <label className={styles.field}>
                <span>Imię</span>
                <input name="name" type="text" placeholder="Twoje imię" required value={name} onChange={e => setName(e.target.value)} />
              </label>

              <label className={styles.field}>
                <span>E-mail</span>
                <input name="email" type="email" placeholder="adres@email.pl" required value={email} onChange={e => setEmail(e.target.value)} />
              </label>

              <label className={styles.field}>
                <span>Wiadomość</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Napisz, co chcesz zamówić…"
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </label>

              {/* RODO Checkbox - Required for GDPR compliance */}
              <label className={styles.checkbox}>
                <input type="checkbox" name="rodo-consent" required checked={consent} onChange={e => setConsent(e.target.checked)} />
                <span>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
                  <a href="/privacy.html" target="_blank" rel="noopener noreferrer">
                    polityką prywatności
                  </a>
                  *
                </span>
              </label>

              <p className={styles.klauzula} aria-live={touched ? 'polite' : 'off'}>
                Administratorem Twoich danych osobowych jest <strong>{site.company.fullName}</strong> ({site.company.address}, {site.company.postalCode} {site.company.city}). Kontakt:{' '}
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. Dane przetwarzamy
                w celu obsługi zapytania wysłanego przez formularz (art. 6 ust. 1 lit. b RODO –
                działania przed zawarciem umowy) lub – w zależności od kontekstu – na podstawie
                prawnie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO). Dane mogą
                być powierzone dostawcy hostingu i obsługi formularzy (Netlify). Przechowujemy je
                przez 12 miesięcy lub do czasu wcześniejszego zakończenia korespondencji. Więcej
                informacji: <a href="/privacy.html">Polityka prywatności</a>.
              </p>

              <button type="submit" className={styles.form_btn} disabled={!isFormValid}>
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
