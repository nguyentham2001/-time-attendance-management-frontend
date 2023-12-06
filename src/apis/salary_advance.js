import api from './api';

const getListSalaryAdvances = async (params) => {
  const response = await api({
    method: 'GET',
    url: '/salary_advances',
    params,
  });
  return response;
};

const createSalaryAdvance = async (data) => {
  const response = await api({
    method: 'POST',
    url: '/salary_advances',
    data,
  });
  return response;
};

const updateSalaryAdvance = async (id, data) => {
  const response = await api({
    method: 'PUT',
    url: `/salary_advances/${id}`,
    data,
  });
  return response;
};


export {getListSalaryAdvances , createSalaryAdvance, updateSalaryAdvance, };
