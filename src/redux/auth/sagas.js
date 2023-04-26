import { put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import apis from '@apis';
import { setCookie } from '@src/utils/cookie';
import { A_WEEK } from '@src/constants';
import axiosClient from '@apis/api';

import actions from '../actions';

function* loginSaga({ email, password }) {
  try {
    // const resp = yield apis.auth.login(email, password);
    //
    // const {
    //   result: { accessToken },
    // } = resp;
    //
    // setCookie('accessToken', accessToken, A_WEEK);
    // axiosClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    //
    // const userRes = yield apis.auth.verifyToken(accessToken);
    // const {
    //   result: { user },
    // } = userRes;

    if (email == 'abc@gmail.com' && password == '1234') {
      const accessToken = 'faketoken';
      setCookie('accessToken', accessToken, A_WEEK);
      axiosClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      const user = { name: 'abc' };
      yield put(actions.auth.loginSuccess(accessToken, user));
    }
  } catch (error) {
    const { message } = error;
    yield put(actions.auth.loginFailure(message));
  }
}

function* logoutSaga() {
  setCookie('accessToken', '');
}

function* verifyTokenSaga({ accessToken }) {
  try {
    const resp = yield apis.auth.verifyToken(accessToken);
    const {
      result: { user },
    } = resp;
    yield put(actions.auth.verifyTokenSucess(accessToken, user));
  } catch (error) {
    yield put(actions.auth.verifyTokenFailure());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.auth.actionTypes.LOGIN, loginSaga),
    takeEvery(actions.auth.actionTypes.VERIFY_TOKEN, verifyTokenSaga),
    takeLatest(actions.auth.actionTypes.LOGOUT, logoutSaga),
  ]);
}
