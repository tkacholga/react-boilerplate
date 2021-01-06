/*
 *
 * FactsheetPage reducer
 *
 */

import produce from 'immer';

import {
  LOAD_FACTSHEET,
  LOAD_FACTSHEET_SUCCESS,
  LOAD_FACTSHEET_ERROR,
  LOAD_FACTSHEET_NOT_FOUND,
  LOAD_FACTSHEET_FORBIDDEN,
  LOAD_FACTSHEET_UNAUTHORIZED,
} from './constants';

export const initialState = {
  factsheetData: { company: {} },
  factsheetLoading: false,
  factsheetError: true,
};

/* eslint-disable default-case, no-param-reassign */
const factsheetReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FACTSHEET:
        draft.factsheetLoading = true;
        draft.factsheetError = false;
        break;
      case LOAD_FACTSHEET_SUCCESS:
        draft.factsheetLoading = false;
        draft.factsheetError = false;
        draft.factsheetData = action.factsheetData;
        break;
      case LOAD_FACTSHEET_ERROR:
        draft.factsheetLoading = false;
        draft.factsheetError = action.error;
        break;
      case LOAD_FACTSHEET_NOT_FOUND:
        draft.factsheetData = {
          data: {
            attributes: {
              slug: '404',
              name: 'Oops! Factsheet Not Found!',
              body:
                'Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.',
            },
          },
        };
        draft.factsheetLoading = false;
        draft.factsheetError = true;
        break;
      case LOAD_FACTSHEET_FORBIDDEN:
        draft.factsheetData = {
          data: {
            attributes: {
              slug: '403',
              name: '403',
              body:
                'Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.',
            },
          },
        };
        draft.factsheetLoading = false;
        draft.factsheetError = true;
        break;
      case LOAD_FACTSHEET_UNAUTHORIZED:
        draft.factsheetData = {
          data: {
            attributes: {
              slug: '401',
              name: '401',
              body:
                'Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.',
            },
          },
        };
        draft.factsheetLoading = false;
        draft.factsheetError = true;
        break;
      default:
        return state;
    }
  });

export default factsheetReducer;
