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

const updatePosition = async (id, data) => {
  const response = await api({
    method: 'PUT',
    url: `/positions/${id}`,
    data,
  });
  return response;
};

const deletePosition = async (id) => {
  const response = await api({
    method: 'DELETE',
    url: `/positions/${id}`,
  });
  return response;
};
export { getListPositions,
   createPosition,
    updatePosition, 
    deletePosition };
