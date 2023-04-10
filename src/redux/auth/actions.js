export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

const login = (email, password) => ({
  type: actionTypes.LOGIN,
  email,
  password,
});

const loginSuccess = (accessToken) => ({
  type: actionTypes.LOGIN_SUCCESS,
  accessToken,
});

const loginFailure = () => ({
  type: actionTypes.LOGIN_FAILURE,
});

const logout = () => ({
  type: actionTypes.LOGOUT,
});

export { login, loginSuccess, loginFailure, logout };
