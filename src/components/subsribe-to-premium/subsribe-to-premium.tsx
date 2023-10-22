import {
  CustomButtonColor,
  CustomButtonSize
} from '../../constants/data-contants';
import {
  SUBSCRIBE_TO_PREMIUM_CONTENT,
  SUBSCRIBE_TO_PREMIUM_TITLE
} from '../../constants/label-contants';
import CustomButton from '../common-components/custom-button/custom-button';
import styles from './subsribe-to-premium.module.scss';

const SubscribeToPremium = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section_title}>{SUBSCRIBE_TO_PREMIUM_TITLE}</div>
      <div className={styles.section_content}>
        {SUBSCRIBE_TO_PREMIUM_CONTENT}
      </div>
      <CustomButton
        content={'Subscribe'}
        size={CustomButtonSize.small}
        buttonColor={CustomButtonColor.black}
      />
    </div>
  );
};
export default SubscribeToPremium;
