import images from '~/assets/images';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setfallback] = useState('');
    const handleError = () => setfallback(customFallback);
    return (
        <img
            className={classNames(styles.wrapper, className)} // có thể tự css riêng
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
