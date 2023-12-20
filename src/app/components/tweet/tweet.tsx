import Image from 'next/image';
import profileImage from '../../assets/images/empty_user.png';
import styles from './tweet.module.scss';
import Icon from '@/app/common-components/icon/icon';

const Tweet = () => {
  return (
    <div className={styles.tweet_container}>
      <div className={styles.profile_pic_section}>
        <Image
          style={{ borderRadius: '50%' }}
          src={profileImage}
          width={40}
          height={40}
          alt="Profile picture of the user"
        />
      </div>
      <div className={styles.tweet_details_section}>
        <div className={styles.user_details_section}>
          <div className={styles.user_details}>
            <div className={styles.name}>Tweet</div>
            <Icon name={'verified-icon'} size={20} />
            <div>@userName</div>
            <div className={styles.dot}>.</div>
            <div>7h</div>
          </div>
          <Icon name={'kebab-menu'} size={20} />
        </div>

        <div className={styles.tweet_content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          et mauris vel risus ultricies vulputate quis id tortor. Donec
          hendrerit augue eu nunc tincidunt, eget vehicula diam suscipit. Mauris
          ac rutrum lorem. Sed id massa sed ante semper pellentesque. Quisque
          porttitor imperdiet orci. In et leo hendrerit, tempor nulla vitae,
          imperdiet massa. Cras mattis augue at justo sodales, vel bibendum orci
          volutpat. Fusce commodo volutpat aliquet. Maecenas imperdiet
          sollicitudin urna eget pellentesque.
        </div>

        <div className={styles.tweet_actions}>
          <div className={styles.action}>
            <Icon name={'comment'} size={20} />
            10
          </div>
          <div className={styles.action}>
            <Icon name={'repost'} size={20} />
            20
          </div>
          <div className={styles.action}>
            <Icon name={'like'} size={20} />
            30
          </div>
          <div className={styles.action}>
            <Icon name={'view'} size={20} />
            40
          </div>
          <div className={styles.action}>
            <Icon name={'bookmark'} size={20} />
            <Icon name={'share'} size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
