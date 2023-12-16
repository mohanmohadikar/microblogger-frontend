import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={'/home'}>Go to Home Page</Link>
    </main>
  );
}
