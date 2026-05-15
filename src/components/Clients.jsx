import styles from './Clients.module.css';

const clients = [
  { name: 'REV',                   abbr: 'REV',  color: '#e74c3c', bg: 'rgba(231,76,60,0.15)'   },
  { name: 'M1 Singapore',          abbr: 'M1',   color: '#e83030', bg: 'rgba(232,48,48,0.15)'   },
  { name: 'Bell',                  abbr: 'Bell', color: '#003087', bg: 'rgba(0,48,135,0.25)'    },
  { name: 'Synergy',               abbr: 'SYN',  color: '#00a651', bg: 'rgba(0,166,81,0.15)'    },
  { name: 'Liberty Latin America', abbr: 'LLA',  color: '#a855f7', bg: 'rgba(168,85,247,0.15)'  },
  { name: 'PLDT',                  abbr: 'PLDT', color: '#f59e0b', bg: 'rgba(245,158,11,0.15)'  },
  { name: 'AXA Digital',           abbr: 'AXA',  color: '#00a1e0', bg: 'rgba(0,161,224,0.15)'   },
];

export default function Clients() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted by Global Brands</p>
      <h2 className={styles.title}>Clients & Projects</h2>
      <div className={styles.track}>
        <div className={styles.inner}>
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className={styles.card} style={{ '--accent': c.color, '--card-bg': c.bg }}>
              <span className={styles.abbr} style={{ color: c.color }}>{c.abbr}</span>
              <span className={styles.name}>{c.name}</span>
              <span className={styles.bar} style={{ background: c.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
