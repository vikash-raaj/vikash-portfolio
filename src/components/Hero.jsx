import { useState, useEffect, useRef } from 'react';
import { profile } from '../data';
import styles from './Hero.module.css';
import profilePhoto from '../assets/profile.jpg';

const TITLES = [
  'Senior Salesforce Vlocity Developer',
  'Industry CPQ & Revenue Cloud Consultant',
  'Team Lead & Trailhead Ranger',
];

function useTyping() {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[idx];
    const delay = deleting ? 35 : charIdx === current.length ? 2000 : 75;
    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setText(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setIdx(i => (i + 1) % TITLES.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, idx]);

  return text;
}

function StatCounter({ num, label }) {
  const initialMatch = num.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(initialMatch ? '0' + initialMatch[2] : num);
  const ref = useRef(null);

  useEffect(() => {
    const match = num.match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = parseInt(match[1]);
    const suffix = match[2];
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setDisplay(current + suffix);
        if (current >= target) clearInterval(timer);
      }, 25);
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.statNum}>{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function Hero() {
  const typedTitle = useTyping();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>
            <span className={styles.typed}>{typedTitle}</span>
            <span className={styles.cursor}>|</span>
          </p>
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
              7+ Years Experience
            </span>
          </div>
          <div className={styles.cta}>
            <a href="#contact" className={styles.btnWhite}>Get in Touch</a>
            <a href="#experience" className={styles.btnOutline}>View Experience</a>
            {profile.resume && (
              <a href={profile.resume} target="_blank" rel="noreferrer" className={styles.btnOutline}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </a>
            )}
          </div>
          <div className={styles.stats}>
            {profile.stats.map(s => <StatCounter key={s.label} num={s.num} label={s.label} />)}
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={profilePhoto} alt={profile.name} className={styles.avatarImg} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
