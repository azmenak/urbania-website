import { createSelector } from 'reselect';

const getLocation = state => state.get('location');
export default getLocation;

export const isEducation = createSelector(
  getLocation,
  location => location.getIn(['state', 'education'], false)
);
