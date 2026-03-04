import styles from './Hero.module.scss';
import heroImage from '../../assets/hero/images/hero.jpg';
import { site } from '../../data/site';

export default function Hero() {
  return (
    <section id="top">
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.hero_content}>
            <p className={styles.hero_kicker}>{site.hero.kicker}</p>
            <h1 className={styles.hero_title}>{site.hero.title}</h1>
            <p className={styles.hero_lead}>{site.hero.lead}</p>
            <div className={styles.hero_actions}>
              <a className={styles.hero_actions_primary} href={site.hero.ctaHref}>
                {site.hero.ctaLabel}
              </a>
              <a className={styles.hero_actions_secondary} href="#oferta">
                Zobacz ofertę
              </a>
            </div>
          </div>
          <div className={styles.media} aria-hidden="true">
            <div className={styles.mediaCard}>
              <img className={styles.image} src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
