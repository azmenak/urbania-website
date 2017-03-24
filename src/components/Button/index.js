import React from 'react';
import cx from 'utils/class-names';

import classes from './styles.css';

const Button = ({ className, disabled, ...props }) => (
  <button
    className={cx(classes.button, className, [classes.disabled, disabled])}
    {...props}
  />
);

Button.propTypes = {
  disabled: React.PropTypes.bool,
};

export default Button;
