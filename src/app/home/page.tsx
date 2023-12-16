import MiscellaneousPanel from '../components/miscellaneous-panel/miscellaneous-panel';
import NavigationPanel from '../components/navigation-panel/navigation-panel';
import TweetsPanel from '../components/tweets-panel/tweets-panel';

import styles from './home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home_container}>
      <NavigationPanel />
      <TweetsPanel />
      <MiscellaneousPanel />
    </div>
  );
};

export default HomePage;
