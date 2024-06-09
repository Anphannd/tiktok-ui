import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    to,
    children,
    onClick,
    href,
    text = false,
    small = false,
    outLine = false,
    primary = false,
    large = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outLine,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className, // dufng custom riêng tùy nút
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.PropsTypes = {
    children: PropsTypes.node,
};

export default Button;
