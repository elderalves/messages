import classnames from 'classnames';
import * as React from 'react';

import * as styles from './Button.module.scss';

interface IButtonProps {
  children?: React.ReactNode;
  plain?: boolean;
  primary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: 'sm' | 'lg';
  onClick?: () => any;
}

const Button: React.SFC<IButtonProps> = ({ primary, disabled = false, size, onClick, children }) => {
  const classNames = classnames(
    styles['Button'],
    { [styles['primary']]: primary },
    { [styles['disabled']]: disabled },
    { [styles['sm']]: size === 'sm' },
    { [styles['lg']]: size === 'lg' },
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type="button" className={classNames} onClick={handleClick} disabled={disabled}>
      <span className="">
        <span>{children}</span>
      </span>
    </button>
  );
};

export default Button;
