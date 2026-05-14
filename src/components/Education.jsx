import { education } from '../data';
import styles from './Education.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

export default function Education() {
  const ref = useFadeUp();
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Academic Background</p>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.grid} ref={ref}>
          {education.map(e => (
            <div className={styles.card} key={e.year}>
              <div className={styles.year}>{e.year}</div>
              <div className={styles.degree}>{e.degree}</div>
              {e.field && <div className={styles.field}>{e.field}</div>}
              <div className={styles.school}>{e.institution}</div>
              <span className={styles.score}>{e.score}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
