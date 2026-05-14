import { certifications } from '../data';
import styles from './Certifications.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

export default function Certifications() {
  const ref = useFadeUp();
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Credentials</p>
        <h2 className={styles.title}>Certifications</h2>
        <p className={styles.subtitle}>9 active Salesforce certifications spanning platform development, industry clouds, and specialized domains.</p>
        <div className={styles.grid} ref={ref}>
          {certifications.map(c => (
            <div className={styles.card} key={c.name}>
              <div className={styles.icon}>{c.icon}</div>
              <div>
                <div className={styles.name}>{c.name}</div>
                <div className={styles.org}>Salesforce</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
