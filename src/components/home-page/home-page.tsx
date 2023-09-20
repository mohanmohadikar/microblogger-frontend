import Navigation from '../navigation/navigation';
import Posts from '../posts/posts';
import SubscribeToPremium from '../subsribe-to-premium/subsribe-to-premium';
import styles from './home-page.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_part}>
        <Navigation />
      </div>
      <div className={styles.middle_part}>
        <Posts />
      </div>
      <div className={styles.right_part}>
        <SubscribeToPremium />
      </div>
    </div>
  );
};

export default HomePage;
