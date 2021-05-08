export const setToken = (e, input) => {
  return {
    type: 'SET_TOKEN',
    inputValue: e,
    inputType: input,
  };
};

export const setData = e => {
  return {
    type: 'SET_DATA',
    inputValue: e,
  };
};
export const setProduct = e => {
  return {
    type: 'SET_PRODUCT',
    inputValue: e,
  };
};
