import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  leftIcon,
  rightIcon,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  children,
  onClick,
  className,
  ...passProps
}) {
  let Compo = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (disabled) {
    // remove event listener when btn disabled
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Compo = Link;
  } else if (href) {
    props.href = href;
    Compo = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    disabled,
    rounded,
    text,
  });
  return (
    <Compo className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Compo>
  );
}

export default Button;
