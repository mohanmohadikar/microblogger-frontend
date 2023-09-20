import { FC } from 'react';
import styles from './profile-picture.module.scss';
import defaultImageX96 from '../../../assets/default_profile_x96.png';

type ProfilePicturePropType = {
  size?: 'sm' | 'lg';
  profileImage?: string;
};

const ProfilePicture: FC<ProfilePicturePropType> = ({
  size = 'sm',
  profileImage
}) => {
  return (
    <div className={styles[`container_${size}`]}>
      <img
        className={styles.image_section}
        src={profileImage ? profileImage : defaultImageX96}
        alt="Profile picture"
      />
    </div>
  );
};

export default ProfilePicture;
