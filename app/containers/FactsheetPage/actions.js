/*
 *
 * FactsheetPage actions
 *
 */

import {
  LOAD_FACTSHEET,
  LOAD_FACTSHEET_SUCCESS,
  LOAD_FACTSHEET_ERROR,
  LOAD_FACTSHEET_NOT_FOUND,
  LOAD_FACTSHEET_FORBIDDEN,
  LOAD_FACTSHEET_UNAUTHORIZED,
} from './constants';

export function loadFactsheet(slug) {
  return {
    type: LOAD_FACTSHEET,
    slug,
  };
}

export function loadFactsheetSuccess(factsheetData) {
  return {
    type: LOAD_FACTSHEET_SUCCESS,
    factsheetData,
  };
}

export function loadFactsheetError(error) {
  return {
    type: LOAD_FACTSHEET_ERROR,
    error,
  };
}

export function loadFactsheetNotFound(error) {
  return {
    type: LOAD_FACTSHEET_NOT_FOUND,
    error,
  };
}

export function loadFactsheetForbidden(error) {
  return {
    type: LOAD_FACTSHEET_FORBIDDEN,
    error,
  };
}

export function loadFactsheetUnauthorized(error) {
  return {
    type: LOAD_FACTSHEET_UNAUTHORIZED,
    error,
  };
}
