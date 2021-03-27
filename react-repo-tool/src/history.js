/**
 * 创建一个浏览器浏览记录对象 history
 * 供全局调用
 */
 import { createBrowserHistory } from 'history';
 const history = createBrowserHistory({
     // forceRefresh : true
 });
 export default history;