import { createSelector } from 'reselect';
import getBrowser from 'selectors/browser';

export default createSelector(
  getBrowser,
  browser => browser.toObject()
);
