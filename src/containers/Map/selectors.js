import { createSelector } from 'reselect';
import getDealers from '../../selectors/dealers';
import getGmap from '../../selectors/gmap';

export default createSelector(
  getDealers,
  getGmap,
  (dealers, gmap) => ({
    ...dealers.toObject(),
    ...gmap.toObject(),
  })
);
