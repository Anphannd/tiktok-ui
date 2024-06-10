import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'; // hỗ trợ active
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
const cx = classNames.bind(Styles);
function MenuItem({ title, to, icon, Activeicon }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{Activeicon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    Activeicon: PropTypes.node.isRequired,
};
export default MenuItem;
