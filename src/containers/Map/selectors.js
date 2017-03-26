import { createSelector } from 'reselect';
import getDealers from '../../selectors/dealers';

export default createSelector(
  getDealers,
  dealers => ({
    ...dealers.toObject(),
  })
);
