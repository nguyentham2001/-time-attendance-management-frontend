import api from './api';

const getListPositions = async (params) => {
  const response = await api({
    method: 'GET',
    url: '/positions',
    params,
  });
  return response;
};

const createPosition = async (data) => {
  const response = await api({
    method: 'POST',
    url: '/positions',
    data,
  });
  return response;
};
export { getListPositions, createPosition };
