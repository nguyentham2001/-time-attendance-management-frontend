import { RESPONSE_CODE } from '@src/constants';

const getErrorMessage = (code) => {
  switch (code) {
    case RESPONSE_CODE.BAD_REQUEST:
      return 'badRequest';
    case RESPONSE_CODE.UNAUTHORIZED:
      return 'unauthorized';
    case RESPONSE_CODE.FORBIDDEN:
      return 'forbidden';
    case RESPONSE_CODE.NOT_FOUND:
      return 'notFound';
    case RESPONSE_CODE.USER_NOT_FOUND:
      return 'userNotFound';
    case RESPONSE_CODE.WRONG_PASSWORD:
      return 'wrongPassword';
    default:
      return 'serverError';
  }
};

export default getErrorMessage;
