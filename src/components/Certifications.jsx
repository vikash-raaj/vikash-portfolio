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

        {/* Trailhead Stats Banner */}
        <div className={styles.trailheadBanner}>
          <div className={styles.thLeft}>
            <img
              src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/trailhead_basics/get-started-with-trailhead/images/ced11d23e2248b38bc25f62a7b0ce8c2_ranger-badge.png"
              alt="Trailhead Ranger"
              className={styles.rangerBadge}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div>
              <div className={styles.thTitle}>Trailhead Ranger</div>
              <div className={styles.thSub}>Salesforce's highest community rank</div>
            </div>
          </div>
          <div className={styles.thStats}>
            <div className={styles.thStat}><span className={styles.thNum}>9</span><span className={styles.thLabel}>Certifications</span></div>
            <div className={styles.thDivider} />
            <div className={styles.thStat}><span className={styles.thNum}>7+</span><span className={styles.thLabel}>Yrs Experience</span></div>
            <div className={styles.thDivider} />
            <div className={styles.thStat}><span className={styles.thNum}>500+</span><span className={styles.thLabel}>OM Tasks</span></div>
          </div>
          <a
            href="https://trailblazer.me/id/vikash-raj"
            target="_blank" rel="noreferrer"
            className={styles.thLink}
          >
            View Profile →
          </a>
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
