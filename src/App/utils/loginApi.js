import Api from './axios';
import Constants from './constant';

const defaultTime = 5000;

export const AuthApi = Object.freeze({
  Login: (email, password) => {
    return Api.post(
      Constants.BASE_URL + Constants.LOGIN_API,
      {
        email: email,
        password: password,
      },
      {
        timeout: defaultTime,
      },
    );
  },
});

export default AuthApi;
