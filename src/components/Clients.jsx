import styles from './Clients.module.css';

const clients = [
  { name: 'REV',                   logo: '/logos/rev.png',     color: '#CC1230', bg: 'rgba(204,18,48,0.12)'    },
  { name: 'M1 Singapore',          logo: '/logos/m1.svg',      color: '#FF9E1B', bg: 'rgba(255,158,27,0.12)'   },
  { name: 'Bell',                  logo: '/logos/bell.svg',    color: '#0067A4', bg: 'rgba(0,103,164,0.15)'    },
  { name: 'Synergy',               logo: '/logos/synergy.png', color: '#F7941D', bg: 'rgba(247,148,29,0.12)'   },
  { name: 'Liberty Latin America', logo: '/logos/liberty.svg', color: '#E8471C', bg: 'rgba(232,71,28,0.12)'    },
  { name: 'PLDT',                  logo: '/logos/pldt.svg',    color: '#CE2035', bg: 'rgba(206,32,53,0.12)'    },
  { name: 'AXA Digital',           logo: '/logos/axa.svg',     color: '#00008F', bg: 'rgba(0,0,143,0.15)'      },
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
              <div className={styles.logoWrap}>
                <img src={c.logo} alt={c.name} className={styles.logo} />
              </div>
              <span className={styles.name}>{c.name}</span>
              <span className={styles.bar} style={{ background: c.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
