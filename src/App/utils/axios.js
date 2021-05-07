import axios from 'axios';

const AxiosApi = axios.create({
  timeout: 40000,
});

AxiosApi.interceptors.response.use(
  response => {
    console.log(
      'HTTP Response',
      JSON.stringify(
        {
          METHOD: response.config.method,
          API_HIT: response.config.url,
          STATUS: response.status,
          DATA: response.data,
        },
        null,
        4,
      ),
    );

    return response;
  },
  function (error) {
    console.error(
      `API Failed ${error.config.method} "${error.config.url}" => [${
        error.response.status
      }]: ${JSON.stringify(error.response.data)}`,
    );
    return Promise.reject(error);
  },
);

export default AxiosApi;
