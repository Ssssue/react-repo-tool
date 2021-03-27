import React, { FC } from 'react';
import { Button, Input, List } from 'antd';
import { connect } from 'react-redux';
import { setInputValue, addList, deleteList } from 'src/Reducers/types';

const Lists: FC = (props: any) => {
  const { inputValue, list, dispatch } = props;
  const onChange = e => {
    dispatch(setInputValue(e.target.value));
  };
  const add = () => {
    list.push(inputValue);
    dispatch(addList(list));
  };
  const deleteItem = index => {
    list.splice(index, 1);
    dispatch(deleteList(list));
  };
  return (
    <div>
      <div>
        <Input onChange={onChange} value={inputValue} />
        <Button onClick={add}>增加</Button>
      </div>
      <div style={{ margin: '20px' }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item: string, index:number) => (
            <List.Item onClick={() => deleteItem(index)}>{item}</List.Item>
          )}
        />
      </div>
    </div>
  );
};
const stateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
const dispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};
export default connect(stateToProps, dispatchToProps)(Lists);
