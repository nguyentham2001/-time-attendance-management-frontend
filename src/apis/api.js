import axios from 'axios';
import camelCase from 'camelcase-keys';
import { API_DOMAIN } from '@src/configs';
import { CustomError } from '@src/errors/customError';
import getErrorMessage from '@src/errors/getErrorMessage';

const axiosClient = axios.create({
  baseURL: `${API_DOMAIN}/api/v1`,
  responseType: 'json',
  timeout: 15 * 1000,
});

axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => {
    if (!response) return {};

    const { config = {}, data } = response;
    const { source } = config;

    if (data && data instanceof Blob) {
      return data;
    }

    let newData = {};
    if (data) {
      newData = camelCase(data, {
        deep: true,
      });
    }

    if (!newData.status) {
      let options = {};
      const errorMessage = getErrorMessage(newData.code, source);
      throw new CustomError(options, errorMessage);
    }

    return newData;
  },
  (error) => {
    if (error.response && error.response.status) {
      const { config = {}, response } = error;
      const { source } = config;
      const errorMessage = getErrorMessage(response.status, source);
      throw new Error(errorMessage);
    }
  },
);

export default axiosClient;
