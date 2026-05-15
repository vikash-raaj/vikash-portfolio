import { education } from '../data';
import styles from './Education.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

const levelMeta = [
  { icon: '🎓', level: 'graduation', color: '#0070d2', bg: 'rgba(0,112,210,0.1)'  },
  { icon: '📚', level: 'Higher Secondary', color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
  { icon: '📖', level: 'Secondary',       color: '#059669', bg: 'rgba(5,150,105,0.1)'  },
];

export default function Education() {
  const ref = useFadeUp();
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Academic Background</p>
          <h2 className={styles.title}>Education</h2>
          <p className={styles.subtitle}>
            Strong academic foundation in Computer Science & Engineering,
            building the technical base for enterprise Salesforce development.
          </p>
        </div>

        <div className={styles.timeline} ref={ref}>
          {education.map((e, i) => {
            const meta = levelMeta[i] || levelMeta[2];
            return (
              <div className={styles.item} key={e.year}>
                {/* timeline spine */}
                <div className={styles.spine}>
                  <div className={styles.iconCircle} style={{ background: meta.bg, borderColor: meta.color }}>
                    <span className={styles.iconEmoji}>{meta.icon}</span>
                  </div>
                  {i < education.length - 1 && <div className={styles.line} />}
                </div>

                {/* card */}
                <div className={styles.card} style={{ '--accent': meta.color }}>
                  <div className={styles.cardTop}>
                    <span className={styles.yearBadge} style={{ background: meta.bg, color: meta.color }}>
                      {e.year}
                    </span>
                    <span className={styles.levelBadge}>{meta.level}</span>
                  </div>

                  <h3 className={styles.degree}>{e.degree}</h3>
                  {e.field && <p className={styles.field}>{e.field}</p>}

                  <div className={styles.institution}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    {e.institution}
                  </div>

                  <div className={styles.cardFoot}>
                    <span className={styles.verified} style={{ color: meta.color, borderColor: meta.color, background: meta.bg }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
