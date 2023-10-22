import { useEffect, useRef, useState } from 'react';
import { CustomButtonSize } from '../../constants/data-contants';
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
import CustomButton from '../common-components/custom-button/custom-button';
import Icon from '../common-components/icon/icon';
import styles from './navigation.module.scss';

const Navigation = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [selectedTab, setSelectedTab] = useState(NAV_HOME);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [componentWidth, setComponentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (navRef?.current) {
      setComponentWidth(navRef?.current?.clientWidth);
      console.log('====================================');
      console.log({ width: navRef?.current?.clientWidth });
      console.log('====================================');
    }
  }, [screenWidth]);

  return (
    <div ref={navRef} className={styles.navigation_container}>
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
        <Icon
          name={selectedTab === NAV_HOME ? 'home-icon-filled' : 'home-icon'}
          size={24}
        />
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
        <Icon
          name={
            selectedTab === NAV_EXPLORE ? 'explore-icon-filled' : 'explore-icon'
          }
          size={24}
        />
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
        <Icon
          name={
            selectedTab === NAV_NOTIFICATIONS
              ? 'notifications-icon-filled'
              : 'notifications-icon'
          }
          size={24}
        />
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
        <Icon
          name={
            selectedTab === NAV_MESSAGES
              ? 'messages-icon-filled'
              : 'messages-icon'
          }
          size={24}
        />
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
        <Icon
          name={selectedTab === NAV_LISTS ? 'lists-icon-filled' : 'lists-icon'}
          size={24}
        />
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
        <Icon
          name={
            selectedTab === NAV_COMMUNITIES
              ? 'communities-icon-filled'
              : 'communities-icon'
          }
          size={24}
        />
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
        <Icon
          name={
            selectedTab === NAV_PROFILE ? 'profile-icon-filled' : 'profile-icon'
          }
          size={24}
        />
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
      <div
        style={{
          width: componentWidth > 160 ? '100%' : '56px',
          marginTop: '12px'
        }}
      >
        <CustomButton
          content={
            componentWidth > 160 ? (
              'Post'
            ) : (
              <Icon name={'feather-icon'} size={24} />
            )
          }
          size={CustomButtonSize.large}
          occupyWidth={true}
        />
      </div>
    </div>
  );
};

export default Navigation;
