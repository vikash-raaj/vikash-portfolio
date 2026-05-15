import { profile } from '../data';
import styles from './Hero.module.css';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {profile.location}
            </span>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              {profile.company}
            </span>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              6+ Years Experience
            </span>
          </div>
          <div className={styles.cta}>
            <a href="#contact" className={styles.btnWhite}>Get in Touch</a>
            <a href="#experience" className={styles.btnOutline}>View Experience</a>
          </div>
          <div className={styles.stats}>
            {profile.stats.map(s => (
              <div className={styles.stat} key={s.label}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={profilePhoto} alt={profile.name} className={styles.avatarImg} />
        </div>
      </div>
    </section>
  );
}
