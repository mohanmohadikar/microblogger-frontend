import Navigation from '../navigation/navigation';
import styles from './home-page.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_part}>
        <Navigation />
      </div>
      <div className={styles.middle_part}>middle part</div>
      <div className={styles.right_part}>right part</div>
    </div>
  );
};

export default HomePage;
