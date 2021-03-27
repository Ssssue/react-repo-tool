/**
 * 路由配置对象化
 * @return {array}
 */
import Loadable from 'react-loadable';
import Loading from 'src/Components/Loading/index';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
} from '@ant-design/icons';

export const routes = [
  {
    path: '/login', //登录
    component: Loadable({ loader: () => import('src/Views/Login/index'), loading: Loading })
  },
  {
    path: '/', //主页
    component: Loadable({ loader: () => import('src/Views/Main/index'), loading: Loading }),
  }
];
export const mainRoutes = [
  {
    exact: true,
    path: '/home',
    title: '首页',
    icon: HomeOutlined,
    component: Loadable({ loader: () => import('src/Views/Home/index'), loading: Loading })
  },
  {
    exact: true,
    path: '/list',
    title: 'reduce',
    icon: SettingFilled,
    component: Loadable({ loader: () => import('src/Views/List/index'), loading: Loading })
  },
  {
    exact: true,
    path: '/menu',
    title: '菜单2',
    icon: SmileOutlined,
    component: Loadable({ loader: () => import('src/Views/Menu/index'), loading: Loading })
  },
  {
    exact: true,
    path: '/testM',
    title: '调试-M',
    icon: SmileOutlined,
    component: Loadable({ loader: () => import('src/Views/TestM/index'), loading: Loading })
  },
  {
    exact: true,
    path: '/testSu',
    title: '调试-Su',
    icon: SmileOutlined,
    component: Loadable({ loader: () => import('src/Views/TestSu/index'), loading: Loading })
  }
];
