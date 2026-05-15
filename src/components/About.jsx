import { profile } from '../data';
import styles from './About.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

export default function About() {
  const ref = useFadeUp();
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner} ref={ref}>
        <div className={styles.header}>
          <p className={styles.label}>Who I Am</p>
          <h2 className={styles.title}>About Me</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.text}>
            {profile.about.map((p, i) => <p key={i}>{p}</p>)}
            <div className={styles.highlights}>
              {[
                { icon: '🌟', text: 'Team Lead managing 3 Salesforce developers' },
                { icon: '📈', text: 'End-to-end CPQ, Q2C & Order Management specialist' },
                { icon: '⚓', text: 'Trailhead Ranger & 9× Salesforce Certified' },
              ].map(h => (
                <div className={styles.highlightItem} key={h.text}>
                  <div className={styles.highlightIcon}>{h.icon}</div>
                  {h.text}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            {[
              { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { label: 'Phone', value: profile.phone },
              { label: 'Location', value: profile.location },
              { label: 'Current Role', value: 'Senior Vlocity Developer' },
              { label: 'Company', value: profile.company },
              { label: 'LinkedIn', value: 'vikashraj-a12489119', href: profile.linkedin },
              { label: 'Trailblazer', value: 'vikash-raj', href: profile.trailblazer },
              { label: 'GitHub', value: 'vikash-raaj', href: profile.gitHub },
              { label: 'Languages', value: profile.languages.join(', ') },
            ].map(row => (
              <div className={styles.row} key={row.label}>
                <span className={styles.rowLabel}>{row.label}</span>
                {row.href
                  ? <a href={row.href} target="_blank" rel="noreferrer" className={styles.rowLink}>{row.value}</a>
                  : <span className={styles.rowValue}>{row.value}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
