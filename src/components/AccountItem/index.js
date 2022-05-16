import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7a1499c976bc8c0bb3034c212000b5a1~c5_100x100.jpeg?x-expires=1652857200&x-signature=BY3XpwvyzUv0a4q1UXUFELKF1hk%3D"
        alt="tuan"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen trong tuan</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>
        <span className={cx('userName')}>tuannguyen@123</span>
      </div>
    </div>
  );
}

export default AccountItem;
