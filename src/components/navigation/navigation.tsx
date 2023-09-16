import Icon from '../icon/icon';
import { navigationItems } from './navigation-constants';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation_container}>
      <div>
        <Icon name="app-icon" size={40} />
      </div>
      {navigationItems?.map((navigationItem, navigationItemIdx) => {
        return (
          <div key={navigationItemIdx} className={styles.navigation_item}>
            <div>{navigationItem.icon}</div>
            <div>{navigationItem.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
