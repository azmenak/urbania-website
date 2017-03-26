import { createSelector } from 'reselect';

const getDealers = state => state.get('dealers');

export default getDealers;

export const getStores = createSelector(
  getDealers,
  substate => substate.get('stores')
);
