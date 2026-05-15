import styles from './Clients.module.css';

const clients = [
  { name: 'REV',                   domain: 'rev.io'                   },
  { name: 'M1 Singapore',          domain: 'm1.com.sg'                },
  { name: 'Bell',                  domain: 'bell.ca'                  },
  { name: 'Synergy',               domain: 'synergy.com'              },
  { name: 'Liberty Latin America', domain: 'libertylatinamerica.com'  },
  { name: 'PLDT',                  domain: 'pldt.com.ph'              },
  { name: 'AXA Digital',           domain: 'axa.com'                  },
];

function LogoCard({ name, domain }) {
  return (
    <div className={styles.card}>
      <img
        src={`https://logo.clearbit.com/${domain}`}
        alt={name}
        className={styles.logo}
        loading="lazy"
        onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
      />
      <span className={styles.fallback} style={{ display: 'none' }}>{name}</span>
    </div>
  );
}

export default function Clients() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted by Global Brands</p>
      <h2 className={styles.title}>Clients & Projects</h2>
      <div className={styles.track}>
        <div className={styles.inner}>
          {[...clients, ...clients].map((c, i) => (
            <LogoCard key={i} name={c.name} domain={c.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
