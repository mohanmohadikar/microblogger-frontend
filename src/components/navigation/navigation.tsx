import { useState } from 'react';
import {
  NAV_EXPLORE,
  NAV_HOME,
  NAV_NOTIFICATIONS
} from '../constants/label-contants';
import Icon from '../icon/icon';
import styles from './navigation.module.scss';

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState('');
  return (
    <div className={styles.navigation_container}>
      <div className={styles.navigation_item}>
        <Icon name="app-icon" size={30} />
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_HOME ? styles.selected : ''
        }`}
        title={NAV_HOME}
      >
        <Icon name={'home-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_HOME}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          navigationItemIdx === 2 ? styles.selected : ''
        }`}
        title={NAV_EXPLORE}
      >
        <Icon name={''} size={24} />
        <div className={styles.navigation_item_title}>{NAV_EXPLORE}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          navigationItemIdx === 2 ? styles.selected : ''
        }`}
        title={NAV_NOTIFICATIONS}
      >
        <Icon name={navigationItem?.icon} size={24} />
        <div className={styles.navigation_item_title}>{NAV_NOTIFICATIONS}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          navigationItemIdx === 2 ? styles.selected : ''
        }`}
      >
        <Icon name={navigationItem?.icon} size={24} />
        <div className={styles.navigation_item_title}>
          {navigationItem.title}
        </div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          navigationItemIdx === 2 ? styles.selected : ''
        }`}
      >
        <Icon name={navigationItem?.icon} size={24} />
        <div className={styles.navigation_item_title}>
          {navigationItem.title}
        </div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          navigationItemIdx === 2 ? styles.selected : ''
        }`}
      >
        <Icon name={navigationItem?.icon} size={24} />
        <div className={styles.navigation_item_title}>
          {navigationItem.title}
        </div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          navigationItemIdx === 2 ? styles.selected : ''
        }`}
      >
        <Icon name={navigationItem?.icon} size={24} />
        <div className={styles.navigation_item_title}>
          {navigationItem.title}
        </div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          navigationItemIdx === 2 ? styles.selected : ''
        }`}
      >
        <Icon name={navigationItem?.icon} size={24} />
        <div className={styles.navigation_item_title}>
          {navigationItem.title}
        </div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          navigationItemIdx === 2 ? styles.selected : ''
        }`}
      >
        <Icon name={navigationItem?.icon} size={24} />
        <div className={styles.navigation_item_title}>
          {navigationItem.title}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
