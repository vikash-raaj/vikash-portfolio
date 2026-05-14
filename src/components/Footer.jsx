import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Vikash Raj — Senior Salesforce Vlocity Developer, Bangalore</p>
    </footer>
  );
}
