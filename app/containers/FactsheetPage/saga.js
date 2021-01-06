/*
 *
 * FactsheetPage saga
 *
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadFactsheetSuccess,
  loadFactsheetError,
  // loadFactsheetNotFound,
  // loadFactsheetForbidden,
  // loadFactsheetUnauthorized,
} from './actions';
import {
  LOAD_FACTSHEET,
  LOAD_FACTSHEET_NOT_FOUND,
  LOAD_FACTSHEET_FORBIDDEN,
  LOAD_FACTSHEET_UNAUTHORIZED,
} from './constants';

function* fetchFactsheet(action) {
  // const requestUrl = `https://api.renmark.ir${action.slug}`;
  const requestUrl = `http://34.197.2.103/api${action.slug}`;

  try {
    const response = yield call(axios.get, requestUrl);
    yield put(loadFactsheetSuccess(response.data));
  } catch (error) {
    if (error.response.status === 404) {
      yield put({ type: LOAD_FACTSHEET_NOT_FOUND, error });
    } else if (error.response.status === 403) {
      yield put({ type: LOAD_FACTSHEET_FORBIDDEN, error });
    } else if (error.response.status === 401) {
      yield put({ type: LOAD_FACTSHEET_UNAUTHORIZED, error });
    } else {
      yield put(loadFactsheetError(error));
    }
  }
}

export function* loadFactsheet() {
  yield takeLatest(LOAD_FACTSHEET, fetchFactsheet);
}

export default function* defaultSaga() {
  yield all([loadFactsheet()]);
}
