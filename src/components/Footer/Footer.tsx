import styles from './Footer.module.scss';
import logo from '../../assets/footer/pictures/logo-white.svg';
import { site } from '../../data/site';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <a href="#top" className={styles.footer_brand} aria-label="Przejdź do początku">
          <img src={logo} alt={site.hero.title} className={styles.logo} />
        </a>

        <div className={styles.top}>
          <div className={styles.navigate}>
            <h3 className={styles.nav_title}>{site.footer.menuTitle}</h3>
            <ul className={styles.nav_ul}>
              {site.nav.items.map((it) => (
                <a key={it.id} href={`#${it.id}`} className={styles.nav_link}>
                  {it.label}
                </a>
              ))}
            </ul>
          </div>

          <div className={styles.inform}>
            <div className={styles.nav_title}>{site.footer.infoTitle}</div>
            <p className={styles.note}>
              {site.footer.noteLines[0]}
              <br />
              {site.footer.noteLines[1]}
            </p>
            <a className={styles.info_link} href={site.footer.privacy.pageHref}>
              {site.footer.privacy.label}
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socials}>
            {site.footer.socials.map((s) => (
              <a
                key={s.kind}
                className={
                  s.kind === 'facebook'
                    ? `${styles.iconLink} ${styles.iconLink_f}`
                    : s.kind === 'instagram'
                      ? `${styles.iconLink} ${styles.iconLink_i}`
                      : `${styles.iconLink} ${styles.iconLink_t}`
                }
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              />
            ))}
          </div>
          <span className={styles.created}>{site.footer.copyright(new Date().getFullYear())}</span>
        </div>
      </div>
    </footer>
  );
}
