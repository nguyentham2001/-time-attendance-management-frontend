export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  VERIFY_TOKEN: 'VERIFY_TOKEN',
  VERIFY_TOKEN_SUCCESS: 'VERIFY_TOKEN_SUCCESS',
  VERIFY_TOKEN_FAILURE: 'VERIFY_TOKEN_FAILURE',
};

const login = (email, password) => ({
  type: actionTypes.LOGIN,
  email,
  password,
});

const loginSuccess = (accessToken, user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  accessToken,
  user,
});

const loginFailure = (message) => ({
  type: actionTypes.LOGIN_FAILURE,
  message: message,
});

const logout = () => ({
  type: actionTypes.LOGOUT,
});

const verifyToken = (accessToken) => ({
  type: actionTypes.VERIFY_TOKEN,
  accessToken,
});

const verifyTokenSucess = (accessToken, user) => ({
  type: actionTypes.VERIFY_TOKEN_SUCCESS,
  accessToken,
  user,
});

const verifyTokenFailure = () => ({
  type: actionTypes.VERIFY_TOKEN_FAILURE,
});

export {
  login,
  loginSuccess,
  loginFailure,
  logout,
  verifyToken,
  verifyTokenSucess,
  verifyTokenFailure,
};
