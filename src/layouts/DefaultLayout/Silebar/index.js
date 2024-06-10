import styles from './Silebar.module.scss';
import classNames from 'classnames/bind';
import routesConfig from '~/config/routes';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import {
    HomeIcon,
    UesrGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    LiveActiveIcon,
    UesrGroupActiveIcon,
} from '~/Components/icons';
import SucgestsAccount from '~/Components/sucgestsAccount';
const cx = classNames.bind(styles);
function Silebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For your" to={routesConfig.home} icon={<HomeIcon />} Activeicon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={routesConfig.following}
                    icon={<UesrGroupIcon />}
                    Activeicon={<UesrGroupActiveIcon />}
                />
                <MenuItem title="Live" to={routesConfig.live} icon={<LiveIcon />} Activeicon={<LiveActiveIcon />} />
            </Menu>
            <SucgestsAccount label="hihi" />
            <SucgestsAccount label="hihi" />
        </aside>
    );
}

export default Silebar;
