export const CHANGE_INPUT = 'changeInput';
export const ADD_ITEM = 'addItem';
export const DELETE_ITEM = 'deleteItem';

export default {
  CHANGE_INPUT,
  ADD_ITEM,
  DELETE_ITEM
};

interface baseValide {
  type: string,
  value: any
}

export const setInputValue = (value: string): baseValide => {
  return {
    type: CHANGE_INPUT,
    value: { inputValue: value }
  };
};

export const addList = (value: string): baseValide => {
  return {
    type: ADD_ITEM,
    value: { list: value }
  };
};

export const deleteList = (value: string): baseValide => {
  return {
    type: DELETE_ITEM,
    value: { list: value }
  };
};
