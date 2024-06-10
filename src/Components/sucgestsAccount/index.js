import classNames from 'classnames/bind';
import styles from './sucgestsAcount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './Accountitem';
const cx = classNames.bind(styles);
function SucgestsAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>sell all</p>
        </div>
    );
}

SucgestsAccount.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SucgestsAccount;
