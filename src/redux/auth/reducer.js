import { actionTypes } from './actions';

export const initialState = {
  accessToken: null,
  isLoggingIn: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLoggingIn: true, error: null };

    case actionTypes.LOGIN_SUCCESS: {
      const { accessToken } = action;
      return { ...state, isLoggingIn: false, accessToken, error: null };
    }

    case actionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        error: 'Đăng nhập không thành công',
      };
    }

    case actionTypes.LOGOUT: {
      return { ...initialState };
    }

    default:
      return state;
  }
}
