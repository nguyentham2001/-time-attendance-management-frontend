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

const updateDepartment = async (id, data) => {
  const response = await api({
    method: 'PUT',
    url: `/departments/${id}`,
    data,
  });
  return response;
};

const deleteDepartment = async (id) => {
  const response = await api({
    method: 'DELETE',
    url: `/departments/${id}`,
  });
  return response;
};

export {
  getListDeparments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
