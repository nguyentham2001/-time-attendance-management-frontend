import api from './api';

const getListDeparments = async (params) => {
  const response = await api({
    method: 'GET',
    url: '/departments',
    params,
  });
  return response;
};

const createDepartment = async (data) => {
  const response = await api({
    method: 'POST',
    url: '/departments',
    data,
  });
  return response;
};

export { getListDeparments, createDepartment };
