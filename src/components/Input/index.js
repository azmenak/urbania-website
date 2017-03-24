import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  checkingStyle: {
    color: '#F1C40F',
  },
  validStyle: {
    color: '#2ECC71',
  },
};

const Input = ({ valid, validText, error, loading, ...props }) => (
  <TextField
    fullWidth
    errorStyle={
      loading ? styles.checkingStyle :
        valid ? styles.validStyle : undefined
    }
    errorText={
      loading ? 'Checking...' :
        typeof error === 'string' ? error :
        valid ? validText : null
    }
    floatingLabelStyle={
      valid ? styles.validStyle : undefined
    }
    {...props}
  />
);

Input.propTypes = {
  valid: React.PropTypes.bool,
  validText: React.PropTypes.string,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  loading: React.PropTypes.bool,
  fullWidth: React.PropTypes.bool,
};

export default Input;
