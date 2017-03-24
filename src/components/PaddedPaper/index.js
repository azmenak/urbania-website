import { withProps } from 'recompose';
import Paper from 'material-ui/Paper';

const Composed = Base => withProps(({ style }) => ({
  style: Object.assign({}, {
    padding: '0.5rem 2rem 1.5rem',
  }, style),
}))(Base);

export default Composed(Paper);
