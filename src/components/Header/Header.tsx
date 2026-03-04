import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/header/pictures/logo.svg';
import { site } from '../../data/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isOpen) {
      body.classList.add('no-scroll');
      html.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
      html.classList.remove('no-scroll');
    }

    return () => {
      body.classList.remove('no-scroll');
      html.classList.remove('no-scroll');
    };
  }, [isOpen]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');

    const closeIfDesktop = () => {
      if (mq.matches) setIsOpen(false);
    };

    // синхронізація при монтуванні
    closeIfDesktop();

    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', closeIfDesktop);
      return () => mq.removeEventListener('change', closeIfDesktop);
    }

    // legacy Safari
    const legacyMq = mq as unknown as {
      addListener: (cb: () => void) => void;
      removeListener: (cb: () => void) => void;
    };

    legacyMq.addListener(closeIfDesktop);
    return () => legacyMq.removeListener(closeIfDesktop);
  }, []);

  return (
    <header className={styles.header} id="top">
      <div className={styles.header_content}>
        <a href="#top" className={styles.header_brand} aria-label="Przejdź do początku">
          <img src={logo} alt={site.hero.title} className={styles.header_logo} />
        </a>
        <nav className={styles.header_navDesktop} aria-label="Główna nawigacja">
          {site.nav.items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className={styles.header_navLink}>
              {it.label}
            </a>
          ))}
          <a className={styles.header_button} href={site.contact.phone.href}>
            Zadzwoń teraz
          </a>
        </nav>
        <button
          type="button"
          className={styles.header_burger}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        />
        <aside
          id="mobile-menu"
          className={`${styles.menu} ${isOpen ? styles.menu_is_open : ''}`}
          aria-hidden={!isOpen}
        >
          <div className={styles.menu_top}>
            <img src={logo} alt={site.hero.title} className={styles.menu_top_brand} />
            <button
              type="button"
              className={styles.menu_top_closeBtn}
              onClick={close}
              aria-label="Zamknij menu"
            />
          </div>
          <div className={styles.menu_bottom}>
            <nav className={styles.menu_navigation} aria-label="Menu mobilne">
              {site.nav.items.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className={styles.menu_navigation_link}
                  onClick={close}
                >
                  {it.label}
                </a>
              ))}
              <a className={styles.menu_navigation_phoneLink} href="#kontakt" onClick={close}>
                Skontaktuj się
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </header>
  );
}
