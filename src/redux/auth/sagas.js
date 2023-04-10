import { put, all, takeLatest } from 'redux-saga/effects';
import apis from '@apis';
import { setCookie } from '@src/utils/cookie';
import { A_WEEK } from '@src/constants';
import axiosClient from '@apis/api';

import actions from '../actions';

function* loginSaga({ email, password }) {
  try {
    // const { accessToken } = yield apis.auth.login(email, password);
    console.log({ email, password });
    if (email === 'abc@gmail.com' && password === '1234') {
      const accessToken = 'faketoken';
      setCookie('accessToken', accessToken, A_WEEK);
      yield put(actions.auth.loginSuccess(accessToken));
    }
    // axiosClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    console.log(error);
    yield put(actions.auth.loginFailure());
  }
}

function* logoutSaga() {
  setCookie('accessToken', '');
}

export default function* rootSaga() {
  yield all([takeLatest(actions.auth.actionTypes.LOGIN, loginSaga)]);
  yield all([takeLatest(actions.auth.actionTypes.LOGOUT, logoutSaga)]);
}
