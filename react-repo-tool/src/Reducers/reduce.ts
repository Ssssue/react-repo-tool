import Types from './types';
const stateTypes = Object.values(Types);

const defaultState = {
  inputValue: '输入歌词',
  list: [
    '有时候我会问自己',
    '到底为了什么努力',
    '赢得什么才叫胜利',
    '你曾否问自己'
  ]
};
interface Action {
  type: any;
  value: any;
}
const reducer = (state: any = defaultState, action: Action): any => {
  if (stateTypes.includes(action.type)) {
    const data = JSON.parse(JSON.stringify(action.value));
    return Object.assign({}, state, data);
  } else {
    return state;
  }
};
// function reducer(state = defaultState, action) {
//   if (stateTypes.includes(action.type)) {
//     const data = JSON.parse(JSON.stringify(action.value));
//     return Object.assign({}, state, data);
//   } else {
//     return state;
//   }
// }
export default reducer;
