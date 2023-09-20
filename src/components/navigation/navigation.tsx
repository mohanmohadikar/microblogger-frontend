import { useState } from 'react';
import {
  NAV_COMMUNITIES,
  NAV_EXPLORE,
  NAV_HOME,
  NAV_LISTS,
  NAV_MESSAGES,
  NAV_MORE,
  NAV_NOTIFICATIONS,
  NAV_PROFILE,
  NAV_VERIFIED
} from '../../constants/label-contants';
import Icon from '../common-components/icon/icon';
import styles from './navigation.module.scss';
import CustomButton from '../common-components/custom-button/custom-button';
import { CustomButtonSize } from '../../constants/data-contants';

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState(NAV_HOME);
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
        onClick={() => {
          setSelectedTab(NAV_HOME);
        }}
      >
        <Icon name={'home-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_HOME}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_EXPLORE ? styles.selected : ''
        }`}
        title={NAV_EXPLORE}
        onClick={() => {
          setSelectedTab(NAV_EXPLORE);
        }}
      >
        <Icon name={'explore-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_EXPLORE}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_NOTIFICATIONS ? styles.selected : ''
        }`}
        title={NAV_NOTIFICATIONS}
        onClick={() => {
          setSelectedTab(NAV_NOTIFICATIONS);
        }}
      >
        <Icon name={'notifications-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_NOTIFICATIONS}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_MESSAGES ? styles.selected : ''
        }`}
        title={NAV_MESSAGES}
        onClick={() => {
          setSelectedTab(NAV_MESSAGES);
        }}
      >
        <Icon name={'messages-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_MESSAGES}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_LISTS ? styles.selected : ''
        }`}
        title={NAV_LISTS}
        onClick={() => {
          setSelectedTab(NAV_LISTS);
        }}
      >
        <Icon name={'lists-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_LISTS}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_COMMUNITIES ? styles.selected : ''
        }`}
        title={NAV_COMMUNITIES}
        onClick={() => {
          setSelectedTab(NAV_COMMUNITIES);
        }}
      >
        <Icon name={'communities-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_COMMUNITIES}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_VERIFIED ? styles.selected : ''
        }`}
        title={NAV_VERIFIED}
        onClick={() => {
          setSelectedTab(NAV_VERIFIED);
        }}
      >
        <Icon name={'app-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_VERIFIED}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_PROFILE ? styles.selected : ''
        }`}
        title={NAV_PROFILE}
        onClick={() => {
          setSelectedTab(NAV_PROFILE);
        }}
      >
        <Icon name={'profile-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_PROFILE}</div>
      </div>

      <div
        className={`${styles.navigation_item} ${
          selectedTab === NAV_MORE ? styles.selected : ''
        }`}
        title={NAV_MORE}
        onClick={() => {
          setSelectedTab(NAV_MORE);
        }}
      >
        <Icon name={'more-icon'} size={24} />
        <div className={styles.navigation_item_title}>{NAV_MORE}</div>
      </div>
      <CustomButton
        text={'Post'}
        size={CustomButtonSize.large}
        occupyWidth={true}
      />
    </div>
  );
};

export default Navigation;
