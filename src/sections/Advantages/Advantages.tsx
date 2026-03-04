import styles from './Advantages.module.scss';
import { site } from '../../data/site';

export default function Advantages() {
  return (
    <section id="dlaczego-my">
      <div className={`container ${styles.advantages}`}>
        <div className={styles.advantages_head}>
          <h2 className={styles.advantages_head_title}>{site.advantages.title}</h2>
          <p className={`mutted ${styles.advantages_head_desc}`}>{site.advantages.description}</p>
        </div>
        <div className={styles.grid}>
          {site.advantages.items.map((it) => (
            <div key={it.title} className={`card ${styles.item}`}>
              <div className={styles.item_icon} aria-hidden="true">
                {it.icon}
              </div>
              <div>
                <h3 className={styles.item_title}>{it.title}</h3>
                <p className={styles.item_desc}>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
