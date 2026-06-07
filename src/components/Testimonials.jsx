import { testimonials } from '../data';
import styles from './Testimonials.module.css';
import { useFadeUp } from '../hooks/useFadeUp';

export default function Testimonials() {
  const ref = useFadeUp();

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Social Proof</p>
          <h2 className={styles.title}>What They Say</h2>
          <p className={styles.subtitle}>
            Feedback from clients, managers, and colleagues across engagements.
          </p>
        </div>

        <div className={styles.grid} ref={ref}>
          {testimonials.map((t, i) => (
            <div className={styles.card} key={i}>
              {/* Quote mark */}
              <div className={styles.quoteIcon} style={{ color: t.color }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" opacity="0.25">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className={styles.stars}>
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className={styles.quote}>"{t.quote}"</p>

              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
                  {t.initial}
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.roleCompany}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          * Testimonials based on project collaborations. Connect on
          {' '}<a href="https://www.linkedin.com/in/vikash-raj-a12489119/" target="_blank" rel="noreferrer">LinkedIn</a>
          {' '}to see verified recommendations.
        </p>
      </div>
    </section>
  );
}
