import { certifications } from '../data';
import styles from './Certifications.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

export default function Certifications() {
  const ref = useFadeUp();
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Credentials</p>
            <h2 className={styles.title}>Certifications</h2>
            <p className={styles.subtitle}>
              Active Salesforce certifications spanning platform development, industry clouds, and specialized domains.
            </p>
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>{certifications.length}</span>
            <span className={styles.badgeTxt}>Active<br/>Certs</span>
          </div>
        </div>

        <div className={styles.grid} ref={ref}>
          {certifications.map((c, i) => (
            <div className={styles.card} key={c.name}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <span className={styles.iconEmoji}>{c.icon}</span>
                </div>
                <span className={styles.num}>#{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.certName}>{c.name}</div>
                <div className={styles.org}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--primary)">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Salesforce
                </div>
              </div>
              <div className={styles.cardFoot}>
                <span className={styles.verified}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Certified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
