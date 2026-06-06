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
            <span className={styles.badgeTxt}>Active<br />Certs</span>
          </div>
        </div>

        <div className={styles.list} ref={ref}>
          {certifications.map((cert) => (
            <div className={styles.row} key={cert.name}>
              <div className={styles.badgeWrap}>
                <img
                  src={cert.badge}
                  alt={cert.name}
                  className={styles.badgeImg}
                  loading="lazy"
                />
              </div>

              <div className={styles.rowBody}>
                <span className={styles.category}>{cert.category}</span>
                <div className={styles.certName}>{cert.name}</div>
                <div className={styles.statusRow}>
                  <span className={styles.active}>
                    <span className={styles.dot} />
                    Active
                  </span>
                </div>
              </div>

              <div className={styles.rowRight}>
                <span className={styles.issuedLabel}>Issued</span>
                <span className={styles.issuedDate}>{cert.issued}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
