import { useState } from 'react';
import { projects } from '../data';
import styles from './Projects.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

const FILTERS = ['All', 'Telecom', 'Revenue Cloud', 'Insurance'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const ref = useFadeUp();

  const filtered = active === 'All' ? projects : projects.filter(p => p.domain === active);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Case Studies</p>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.subtitle}>
            Real-world enterprise Salesforce solutions delivered across Telecom, Revenue Cloud, and Insurance domains.
          </p>
        </div>

        <div className={styles.filters}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid} ref={ref}>
          {filtered.map(p => (
            <div className={styles.card} key={p.id} style={{ '--accent': p.accent }}>
              <div className={styles.cardAccent} />

              <div className={styles.cardHead}>
                <span className={styles.domain} style={{ background: p.accent + '22', color: p.accent }}>
                  {p.domain}
                </span>
                <span className={styles.period}>{p.period}</span>
              </div>

              <div className={styles.clientRow}>
                <div className={styles.clientInitial} style={{ background: p.accent }}>
                  {p.client.charAt(0)}
                </div>
                <div>
                  <div className={styles.client}>{p.client}</div>
                  <div className={styles.role}>{p.role}</div>
                </div>
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.summary}>{p.summary}</p>

              <ul className={styles.highlights}>
                {p.highlights.map((h, i) => (
                  <li key={i} className={styles.highlight}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              <div className={styles.tags}>
                {p.tags.map(t => (
                  <span className={styles.tag} key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
