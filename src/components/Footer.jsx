import styles from './Footer.module.css';
import usePageViews from '../hooks/usePageViews';

export default function Footer() {
  const views = usePageViews();

  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Vikash Raj — Senior Salesforce Vlocity Developer, Bangalore</p>
      {views !== null && (
        <p className={styles.views}>👁 {views.toLocaleString()} total page visits</p>
      )}
    </footer>
  );
}
