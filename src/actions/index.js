export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

const addOne = () => {
  return { type: ADD_ONE };
};

const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

const changeOperation = (operation) => {
  return {
    type: CHANGE_OPERATION,
    payload: operation,
  };
};

export default {
  addOne,
  applyNumber,
  changeOperation,
};
