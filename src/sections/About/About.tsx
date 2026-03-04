import styles from './About.module.scss';
import { site } from '../../data/site';

export default function About() {
  return (
    <section className={`section ${styles.au_section}`} id="o-nas">
      <div className={`container ${styles.au_container}`}>
        <div className={styles.au_content}>
          <h2 className={styles.au_title}>{site.about.title}</h2>
          <div className={styles.au_texts}>
            <p className={styles.text}>{site.about.text1}</p>
            <p className={styles.text}>
              {site.about.mission.before} <strong>{site.about.mission.strong}</strong>.{' '}
              {site.about.mission.after}
            </p>
          </div>
        </div>
        <div className={styles.numbers}>
          {site.about.numbers.map((elm) => (
            <div key={elm.desc} className={styles.num}>
              <p className={styles.count}>{elm.num}</p>
              <p className={styles.info}>{elm.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
