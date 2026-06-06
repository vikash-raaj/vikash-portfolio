import { useState } from 'react';
import { profile } from '../data';
import styles from './Contact.module.css';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent('vikashr370@gmail.com')}`;

const INFO_LINKS = (copied, onCopy) => [
  {
    key: 'email',
    onClick: onCopy,
    label: copied ? '✓ Copied!' : profile.email,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    key: 'phone',
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    label: profile.phone,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
      </svg>
    ),
  },
  {
    key: 'linkedin',
    href: profile.linkedin,
    label: 'LinkedIn Profile',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    key: 'trailblazer',
    href: profile.trailblazer,
    label: 'Trailblazer Profile',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  ...(profile.resume ? [{
    key: 'resume',
    href: profile.resume,
    label: 'Download Resume',
    download: 'Vikash_Raj_Resume.pdf',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  }] : []),
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true || res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const links = INFO_LINKS(copied, copyEmail);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.label}>Let's Connect</p>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Open to senior Salesforce Vlocity, Industry CPQ, and Revenue Cloud opportunities.
            Let's discuss how I can add value to your team.
          </p>
        </div>

        {/* Two-column grid */}
        <div className={styles.grid}>

          {/* Left — contact info */}
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Contact Info</h3>
            <ul className={styles.infoList}>
              {links.map(l =>
                l.onClick
                  ? (
                    <li key={l.key}>
                      <button onClick={l.onClick} className={styles.infoBtn}>
                        <span className={styles.infoIcon}>{l.icon}</span>
                        <span className={`${styles.infoLabel} ${copied ? styles.copied : ''}`}>{l.label}</span>
                      </button>
                    </li>
                  ) : (
                    <li key={l.key}>
                      <a
                        href={l.href}
                        target={l.download ? '_self' : '_blank'}
                        rel="noreferrer"
                        download={l.download}
                        className={styles.infoBtn}
                      >
                        <span className={styles.infoIcon}>{l.icon}</span>
                        <span className={styles.infoLabel}>{l.label}</span>
                        {!l.download && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.extIcon}>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        )}
                      </a>
                    </li>
                  )
              )}
            </ul>

            <div className={styles.availability}>
              <span className={styles.availDot} />
              <span>Open to new opportunities</span>
            </div>
          </div>

          {/* Right — contact form */}
          <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
            <h3 className={styles.cardTitle}>Send a Message</h3>

            {status === 'success' ? (
              <div className={styles.successBox}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <p className={styles.successTitle}>Message Sent!</p>
                <p className={styles.successSub}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button type="button" className={styles.resetBtn} onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel} htmlFor="name">Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Michel John"
                      value={form.name} onChange={handleChange}
                      required className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel} htmlFor="email">Email *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      value={form.email} onChange={handleChange}
                      required className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Hi Vikash, I'd like to discuss a Salesforce opportunity..."
                    rows="5"
                    value={form.message} onChange={handleChange}
                    required className={styles.textarea}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please email me directly at {profile.email}
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.sendBtn}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className={styles.spinner} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
