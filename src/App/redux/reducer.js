import {combineReducers} from 'redux';

const initialLogin = {
  token: null,
};

const initialProfile = {
  name: 'test',
  jobs: '',
};

const LoginReducer = (state = initialLogin, action) => {
  if (action.type === 'SET_TOKEN') {
    return {...state, [action.inputType]: action.inputValue};
  }
  return state;
};

const ProfileReducer = (state = initialProfile, action) => {
  return state;
};

const reducer = combineReducers({
  LoginReducer,
  ProfileReducer,
});

export default reducer;
