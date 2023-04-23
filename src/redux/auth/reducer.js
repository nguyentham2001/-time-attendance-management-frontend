import { actionTypes } from './actions';

export const initialState = {
  accessToken: null,
  isLoggingIn: false,
  verifying: false,
  user: null,
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
      const { message } = action;

      return {
        ...state,
        isLoggingIn: false,
        error: message,
      };
    }

    case actionTypes.VERIFY_TOKEN: {
      return { ...state, verifying: true, error: null };
    }

    case actionTypes.VERIFY_TOKEN_SUCCESS: {
      const { accessToken, user } = action;
      return { ...state, verifying: false, accessToken, user };
    }

    case actionTypes.VERIFY_TOKEN_FAILURE: {
      return { ...state, verifying: false };
    }

    case actionTypes.LOGOUT: {
      return { ...initialState };
    }

    default:
      return state;
  }
}
