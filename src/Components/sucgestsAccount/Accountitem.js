import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './sucgestsAcount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as WrapperPopper } from '~/Components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    function PreView(props) {
        return (
            <div tabIndex="-1" {...props}>
                <WrapperPopper>
                    <AccountPreview />
                </WrapperPopper>
            </div>
        );
    }
    return (
        <div>
            <Tippy inertia delay={[800, 0]} render={PreView} offset={[-20, 0]} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=71758&refresh_token=e7275176b0d923dfa796d61670beadc8&x-expires=1718179200&x-signature=DRYfkhiIDIiAtM38ukMM7GWtYnk%3D&shp=a5d48078&shcp=81f88b70"
                        alt=""
                    />
                    <div className={cx('info-item')}>
                        <p className={cx('nick-name')}>
                            <strong> Vip khong can ten</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Vip khong can ten</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
