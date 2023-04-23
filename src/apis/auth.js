import api from './api';

const login = async (email, password) => {
  const loginInfo = await api({
    method: 'POST',
    url: '/auths/login',
    data: { email, password },
  });
  return loginInfo;
};

const verifyToken = async (accessToken) => {
  const response = await api({
    method: 'GET',
    url: '/auths/verify',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export { login, verifyToken };
