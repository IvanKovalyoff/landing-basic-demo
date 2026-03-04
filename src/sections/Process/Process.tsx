import styles from './Process.module.scss';
import { site } from '../../data/site';

export default function Process() {
  return (
    <section id="jak-to-dziala">
      <div className={`container ${styles.process}`}>
        <div className={styles.process_head}>
          <h2 className={styles.process_head_title}>{site.process.title}</h2>
          <p className={`mutted ${styles.process_head_desc}`}>{site.process.description}</p>
        </div>
        <div className={styles.grid}>
          {site.process.steps.map((step, idx) => (
            <article key={step.title} className={`card ${styles.card}`}>
              <div className={styles.card_badge} aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className={styles.card_title}>{step.title}</h3>
                <p className={styles.card_desc}>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
