import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers/reduce';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
// import 'antd/dist/antd.less';
import App from './App';

import 'src/Styles/index.less';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider
      locale={zhCN}
      renderEmpty={() => {
        return '暂无数据...';
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
