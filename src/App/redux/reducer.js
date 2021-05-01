import {combineReducers} from 'redux';

const initialLogin = {
  email: '',
  password: '',
};

const initialProfile = {
  name: 'test',
  jobs: '',
};

const loginReducer = (state = initialLogin, action) => {
  return state;
};

const profileReducer = (state = initialProfile, action) => {
  return state;
};

const reducer = combineReducers({
  loginReducer,
  profileReducer,
});

export default reducer;
