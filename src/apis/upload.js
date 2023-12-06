import api from './api';

const uploadFile = async ({ formData }) => {
  const response = await api({
    method: 'POST',
    url: '/uploads/file',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response;
};

export { uploadFile };
