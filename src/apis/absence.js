import api from './api';

const getListAbsence = async (params) => {
  const response = await api({
    method: 'GET',
    url: '/absences',
    params,
  });
  return response;
};

const createAbsence = async (data) => {
  const response = await api({
    method: 'POST',
    url: '/absences',
    data,
  });
  return response;
};

const updateAbsence = async (id, data) => {
  const response = await api({
    method: 'PUT',
    url: `/absences`,
    data,
  });
  return response;
};

const deleteAbsence = async (id) => {
  const response = await api({
    method: 'DELETE',
    url: `/absences/${id}`,
  });
  return response;
};

export { getListAbsence, createAbsence, updateAbsence, deleteAbsence };
