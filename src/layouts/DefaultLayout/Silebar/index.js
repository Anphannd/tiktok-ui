import styles from './Silebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Silebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>silebar</h2>
        </aside>
    );
}

export default Silebar;
