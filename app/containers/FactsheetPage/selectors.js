import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the factsheet state domain
 */

const selectFactsheetDomain = state => state.factsheet || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FactsheetPage
 */

const makeSelectFactsheet = () =>
  createSelector(
    selectFactsheetDomain,
    substate => substate,
  );

const makeFactsheetDataSelector = () =>
  createSelector(
    selectFactsheetDomain,
    substate => substate.factsheetData,
  );

export default makeSelectFactsheet;
export { selectFactsheetDomain, makeFactsheetDataSelector };
