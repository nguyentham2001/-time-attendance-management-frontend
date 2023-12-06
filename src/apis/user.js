import api from './api';

const getListUsers = async (params) => {
    const response = await api({
      method: 'GET',
      url: '/users',
      params,
    });
    return response;
  };
  
  const createUser = async (data) => {
    const response = await api({
      method: 'POST',
      url: '/auths/register',
      data,
    });
    return response;
  };

  const updateUser = async (id, data) => {
    const response = await api({
      method: 'PUT',
      url: `/users/${id}`,
      data,
    });
    return response;
  };

  const deleteUser = async (id) => {
    const response = await api({
      method: 'DELETE',
      url: `/users/${id}`,
    });
    return response;
  };
  

  export {
    getListUsers,
    createUser,
    updateUser,
    deleteUser,
    
  };
  
