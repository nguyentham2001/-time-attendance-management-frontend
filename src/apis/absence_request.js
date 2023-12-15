import api from './api';

const getListAbsenceRequest = async (params) => {
  const response = await api({
    method: 'GET',
    url: '/absence-requests',
    params,
  });
  return response;
};

const createAbsence_Request = async (data) => {
  const response = await api({
    method: 'POST',
    url: '/absence-requests',
    data,
  });
  return response;
};

const updateAbsence_Request = async (id, data) => {
  const response = await api({
    method: 'PUT',
    url: `/users/${id}`,
    data,
  });
  return response;
};

// const updateProfile = async (data) => {
//   const response = await api({
//     method: 'PUT',
//     url: `/me`,
//     data,
//   });
//   return response;
// };

// const deleteUser = async (id) => {
//   const response = await api({
//     method: 'DELETE',
//     url: `/users/${id}`,
//   });
//   return response;
// };

export { getListAbsenceRequest, createAbsence_Request, updateAbsence_Request };
