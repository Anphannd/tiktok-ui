import Button from '~/Components/Button';

import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=71758&refresh_token=e7275176b0d923dfa796d61670beadc8&x-expires=1718179200&x-signature=DRYfkhiIDIiAtM38ukMM7GWtYnk%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    following
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong> Vip khong can ten</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Vip khong can ten</p>
                <p className={cx('analyticst')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>follower </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Liker</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
