import styles from './Offer.module.scss';
import { site } from '../../data/site';

export default function Offer() {
  return (
    <section id="oferta">
      <div className={`container ${styles.offer}`}>
        <div className={`${styles.offer_head} ${styles.head}`}>
          <h2 className={styles.head_title}>{site.offer.title}</h2>
          <p className={`muted ${styles.head_desc}`}>{site.offer.description}</p>
        </div>
        <div className={styles.offer_grid}>
          {site.offer.items.map((it) => (
            <article key={it.title} className={styles.card}>
              <div className={styles.card_imgWrap} aria-hidden="true">
                <img src={it.img} className={styles.card_img} alt="" />
              </div>
              <div className={styles.card_content}>
                <h3 className={styles.card_content_title}>{it.title}</h3>
                <p className={styles.card_content_desc}>{it.desc}</p>
                <a className={styles.card_content_more} href={site.offer.itemCtaHref}>
                  {site.offer.itemCtaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
