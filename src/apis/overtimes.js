import api from './api';

const getListOverTime = async (params) => {
  const response = await api({
    method: 'GET',
    url: '/overtimes',
    params,
  });
  return response;
};

const createOvertime = async (data) => {
  const response = await api({
    method: 'POST',
    url: '/overtimes',
    data,
  });
  return response;
};

const updateOvertime = async (id, data) => {
  const response = await api({
    method: 'PUT',
    url: '/overtimes',
    data,
  });
  return response;
};

// const deleteDepartment = async (id) => {
//   const response = await api({
//     method: 'DELETE',
//     url: `/departments/${id}`,
//   });
//   return response;
// };

export { getListOverTime, createOvertime, updateOvertime };
