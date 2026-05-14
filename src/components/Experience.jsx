import { experience } from '../data';
import styles from './Experience.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

export default function Experience() {
  const ref = useFadeUp();
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Career Journey</p>
        <h2 className={styles.title}>Work Experience</h2>
        <p className={styles.subtitle}>
          6+ years across telecom, insurance, energy, and media domains — from individual contributor to team lead.
        </p>
        <div className={styles.timeline} ref={ref}>
          {experience.map(job => (
            <div className={styles.item} key={job.company}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.header}>
                  <span className={styles.company}>{job.company}</span>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <div className={styles.role}>{job.role}</div>
                <div className={styles.clientsLabel}>Clients</div>
                {job.clients.map(c => (
                  <div className={styles.clientBlock} key={c.name}>
                    <div className={styles.clientName}>
                      {c.name} <span className={styles.clientPeriod}>({c.period})</span>
                    </div>
                    <div className={styles.clientDomain}>{c.domain}</div>
                    <ul className={styles.bullets}>
                      {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                    <div className={styles.expTags}>
                      {c.tags.map(t => <span className={styles.expTag} key={t}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
