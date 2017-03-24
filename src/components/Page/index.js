import { withProps } from 'recompose';

import cx from '../../utils/class-names';
import classes from './styles.css';

export default withProps(({ className }) => ({
  className: cx(classes.page, className),
}))('div');
