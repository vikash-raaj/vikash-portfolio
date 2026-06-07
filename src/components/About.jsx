import { profile } from '../data';
import styles from './About.module.css';
import { useFadeUp } from '../hooks/useFadeUp';
import profilePhoto from '../assets/profile.jpg';

const highlights = [
  {
    icon: '🌟', label: 'Team Leadership',
    text: 'Managing a team of 3 Salesforce developers, driving agile delivery and fostering collaboration',
    from: '#f59e0b', to: '#f97316',
  },
  {
    icon: '📈', label: 'CPQ, Order Management & Q2C Expert',
    text: 'End-to-end CPQ, Quote-to-Cash & Order Management across Telecom, Media, Insurance & Energy domains',
    from: '#0070d2', to: '#00a1e0',
  },
  {
    icon: '🏆', label: '9× Certified Trailblazer',
    text: 'Trailhead Ranger with 9 active Salesforce certifications and 7+ years of enterprise experience',
    from: '#7c3aed', to: '#db2777',
  },
];

const domains = ['Telecom', 'Media Cloud', 'Insurance', 'Energy', 'Salesforce B2B', 'Revenue Cloud'];

const infoRows = [
  { icon: '📧', label: 'Email',       value: profile.email,              href: `mailto:${profile.email}` },
  { icon: '📱', label: 'Phone',       value: profile.phone },
  { icon: '📍', label: 'Location',    value: 'Bangalore, India' },
  { icon: '💼', label: 'Role',        value: 'Sr. Vlocity Developer' },
  { icon: '🏢', label: 'Company',     value: profile.company },
  { icon: '🔗', label: 'LinkedIn',    value: 'vikash-raj',               href: profile.linkedin },
  { icon: '☁️', label: 'Trailblazer', value: 'vikash-raj',               href: profile.trailblazer },
  { icon: '🌐', label: 'Languages',   value: profile.languages.join(' · ') },
];

export default function About() {
  const ref = useFadeUp();
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner} ref={ref}>

        <div className={styles.header}>
          <p className={styles.label}>Who I Am</p>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.titleLine} />
        </div>

        <div className={styles.grid}>

          {/* ── left: bio + highlights ── */}
          <div className={styles.left}>
            <div className={styles.bio}>
              {profile.about.map((para, i) => (
                <p key={i} className={i === 0 ? styles.bioLead : styles.bioPara}>{para}</p>
              ))}
            </div>

            <div className={styles.domainRow}>
              {domains.map(d => <span className={styles.domainTag} key={d}>{d}</span>)}
            </div>

            <div className={styles.highlights}>
              {highlights.map(h => (
                <div
                  className={styles.highlight}
                  key={h.label}
                  style={{ '--hl-from': h.from, '--hl-to': h.to }}
                >
                  <div className={styles.hlIcon}>{h.icon}</div>
                  <div className={styles.hlBody}>
                    <div className={styles.hlLabel}>{h.label}</div>
                    <div className={styles.hlText}>{h.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── right: profile card ── */}
          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatarRing}>
                  <img src={profilePhoto} alt={profile.name} className={styles.avatar} />
                </div>
                <div className={styles.cardName}>{profile.name}</div>
                <div className={styles.cardRole}>Senior Salesforce Vlocity Developer</div>
                <div className={styles.cardBadges}>
                  <span className={styles.cbadge}>7+ Yrs</span>
                  <span className={styles.cbadge}>9× Certified</span>
                  <span className={styles.cbadge}>Team Lead</span>
                </div>
              </div>

              <div className={styles.rows}>
                {infoRows.map(row => (
                  <div className={styles.row} key={row.label}>
                    <span className={styles.rowIcon}>{row.icon}</span>
                    <span className={styles.rowLabel}>{row.label}</span>
                    {row.href
                      ? <a href={row.href} target="_blank" rel="noreferrer" className={styles.rowLink}>{row.value}</a>
                      : <span className={styles.rowValue}>{row.value}</span>
                    }
                  </div>
                ))}
              </div>

              <div className={styles.cardFoot}>
                <a href={`mailto:${profile.email}`} className={styles.ctaBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Get in Touch
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.ctaBtnOutline}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
