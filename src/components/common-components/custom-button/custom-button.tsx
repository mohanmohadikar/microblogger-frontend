import { FC, ReactNode } from 'react';
import {
  CustomButtonColor,
  CustomButtonSize
} from '../../../constants/data-contants';
import styles from './custom-button.module.scss';

type CustomButtonPropType = {
  content?: ReactNode;
  buttonColor?: CustomButtonColor;
  size?: CustomButtonSize;
  occupyWidth?: boolean;
};
const CustomButton: FC<CustomButtonPropType> = ({
  content = <></>,
  buttonColor = CustomButtonColor.primary,
  size = CustomButtonSize.small,
  occupyWidth = false
}) => {
  return (
    <div
      className={`${styles.container} ${occupyWidth ? styles.fit_parent : ''} ${
        buttonColor === CustomButtonColor.primary
          ? styles.background_primary
          : styles.background_black
      } ${
        size === CustomButtonSize.small ? styles.btn_small : styles.btn_large
      }`}
    >
      {content}
    </div>
  );
};

export default CustomButton;
