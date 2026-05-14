import { skills } from '../data';
import styles from './Skills.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

export default function Skills() {
  const ref = useFadeUp();
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Technical Expertise</p>
        <h2 className={styles.title}>Skills & Technologies</h2>
        <p className={styles.subtitle}>
          A broad stack of Salesforce platform, Vlocity / OmniStudio, and cloud tools built across
          telecom, media, insurance, and energy domains.
        </p>
        <div className={styles.grid} ref={ref}>
          {skills.map(group => (
            <div className={styles.card} key={group.category}>
              <div className={styles.cardTitle}>
                <span className={styles.dot} />
                {group.category}
              </div>
              <div className={styles.tags}>
                {group.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
