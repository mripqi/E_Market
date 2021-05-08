import {combineReducers} from 'redux';

const initialLogin = {
  token: null,
};

const initialProfile = {
  name: 'test',
  jobs: '',
};

const initialData = [];
const initialProduct = [];

const LoginReducer = (state = initialLogin, action) => {
  if (action.type === 'SET_TOKEN') {
    return {...state, [action.inputType]: action.inputValue};
  }
  return state;
};

const DataReducer = (state = initialData, action) => {
  if (action.type === 'SET_DATA') {
    return action.inputValue;
  }
  return state;
};

const ProductReducer = (state = initialProduct, action) => {
  if (action.type === 'SET_PRODUCT') {
    return action.inputValue;
  }
  return state;
};

const ProfileReducer = (state = initialProfile, action) => {
  return state;
};

const reducer = combineReducers({
  LoginReducer,
  ProfileReducer,
  DataReducer,
  ProductReducer,
});

export default reducer;
