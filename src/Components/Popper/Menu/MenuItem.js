import Button from '~/Components/Button';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
const cx = classNames.bind(Styles);
function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
