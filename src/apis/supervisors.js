import api from './api';

const getListSupervisors = async (params) => {
  const response = await api({
    method: 'GET',
    url: '/supervisors',
    params,
  });
  return response;
};

export { getListSupervisors };
