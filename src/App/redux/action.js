export const setToken = (e, input) => {
  return {
    type: 'SET_TOKEN',
    inputValue: e,
    inputType: input,
  };
};
