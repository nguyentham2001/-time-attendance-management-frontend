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
    case RESPONSE_CODE.DEPARTMENT_NAME_EXIST:
      return 'deparmentNameExists';
    case RESPONSE_CODE.DEPARTMENT_NOT_FOUND:
      return 'deparmentNotFound';
    case RESPONSE_CODE.POSITION_NAME_EXIST:
      return 'positionNameExists';
    case RESPONSE_CODE.POSITION_NOT_FOUND:
      return 'positionNotFound';
    default:
      return 'serverError';
  }
};

export default getErrorMessage;
