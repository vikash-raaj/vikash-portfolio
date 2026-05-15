import { skills } from '../data';
import styles from './Skills.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

const categoryMeta = {
  'Vlocity / OmniStudio':  { icon: '⚡', from: '#0070d2', to: '#00a1e0' },
  'Salesforce Platform':   { icon: '☁️', from: '#7c3aed', to: '#2563eb' },
  'Industry Clouds':       { icon: '🌐', from: '#0891b2', to: '#059669' },
  'DevOps & Tools':        { icon: '🛠️', from: '#d97706', to: '#dc2626' },
  'Integrations & Web':    { icon: '🔗', from: '#db2777', to: '#7c3aed' },
  'Revenue Cloud (ARM)':   { icon: '💰', from: '#059669', to: '#0070d2' },
};

export default function Skills() {
  const ref = useFadeUp();
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Technical Expertise</p>
            <h2 className={styles.title}>Skills & Technologies</h2>
            <p className={styles.subtitle}>
              A broad stack of Salesforce, Vlocity / OmniStudio, and cloud tools built across
              telecom, media, insurance, and energy domains.
            </p>
          </div>
          <div className={styles.statRow}>
            {[['6', 'Categories'], ['60+', 'Technologies'], ['7+', 'Yrs Exp']].map(([n, l]) => (
              <div className={styles.stat} key={l}>
                <span className={styles.statNum}>{n}</span>
                <span className={styles.statLbl}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.grid} ref={ref}>
          {skills.map(group => {
            const meta = categoryMeta[group.category] || { icon: '🔹', from: '#0070d2', to: '#00a1e0' };
            return (
              <div
                className={styles.card}
                key={group.category}
                style={{ '--from': meta.from, '--to': meta.to }}
              >
                <div className={styles.cardHead}>
                  <div className={styles.iconBox}>
                    <span className={styles.iconEmoji}>{meta.icon}</span>
                  </div>
                  <div className={styles.headText}>
                    <div className={styles.category}>{group.category}</div>
                    <div className={styles.count}>{group.tags.length} skills</div>
                  </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.tags}>
                  {group.tags.map(t => (
                    <span className={styles.tag} key={t}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
