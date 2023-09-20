import Icon from '../common-components/icon/icon';
import ProfilePicture from '../common-components/profile-picture/profile-picture';
import styles from './post.module.scss';

const Post = () => {
  return (
    <div className={styles.post_container}>
      <div className={styles.content_wrapper}>
        <ProfilePicture />
        <div className={styles.content}>
          <div className={styles.content_top_section}>
            <div className={styles.post_user_info}>
              <div className={styles.name_text}>New User</div>
              <div className={styles.details_text}>@new_user_2020</div>
              <div className={`${styles.details_text} ${styles.dot_separator}`}>
                .
              </div>
              <div className={styles.details_text}>Jan 31, 2020</div>
            </div>
            <Icon name={'kebab-menu-icon'} size={20} />
          </div>
          <div className={styles.content_middle_section}></div>
          <div className={styles.content_bottom_section}>
            <Icon name={'reply-icon'} size={20} />
            <Icon name={'repost-icon'} size={20} />
            <Icon name={'like-icon'} size={20} />
            <Icon name={'view-icon'} size={20} />
            <Icon name={'share-icon'} size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
