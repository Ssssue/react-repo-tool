import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
// import { MenuFoldOutlined } from '@ant-design/icons';
import { Route, Switch } from 'react-router-dom';
import history from 'src/history';
import { mainRoutes } from 'src/Router/index';
import styles from './index.less';

const { Content } = Layout;
// const { SubMenu } = Menu;

const Components = (): JSX.Element => {
  const [menuKey] = useState([mainRoutes[0].path]);

  // const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    console.log('menuKey[0]: ', menuKey[0]);
    history.push(menuKey[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //点击菜单：设置路由和选中菜单
  // const selectMenu = item => {
  //   setMenuKey(item.selectedKeys);
  //   history.push(item.selectedKeys[0]);
  // };

  //点击收起或展开图标
  // const toggle = () => {
  //   setCollapsed(!collapsed);
  // };
  //菜单渲染
  // const MenuItem = menu => {
  //   return menu.map(item => {
  //     if (item.children && item.children.length > 0) {
  //       return (
  //         <SubMenu
  //           key={item.path}
  //           title={
  //             <span>
  //               <item.icon />
  //               <span>{item.title}</span>
  //             </span>
  //           }
  //         >
  //           {MenuItem(item.children)}
  //         </SubMenu>
  //       );
  //     }
  //     return (
  //       <Menu.Item key={item.path}>
  //         <item.icon />
  //         <span>{item.title}</span>
  //       </Menu.Item>
  //     );
  //   });
  // };

  return (
    <div className={styles.Components}>
      <header className={styles.head}>日报生成小工具</header>
      <Layout style={{ minHeight: 'calc(100% - 50px)', background: '#0c1635' }}>
        {/* <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
          <Header style={{ padding: 0, textAlign: 'center' }}>
            <MenuFoldOutlined
              className={styles.trigger}
              style={{ color: '#fff' }}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <Menu
            theme='dark'
            style={{ background: '#01081f' }}
            defaultSelectedKeys={['1']}
            mode='inline'
            onSelect={selectMenu}
            selectedKeys={menuKey}

          >
            {MenuItem(mainRoutes)}
          </Menu>
        </Sider> */}
        <Layout style={{ background: '#0c1635' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content style={{ margin: '20px 16px', backgroundColor: '#0c1635', color: '#fff' }}>
            <Switch>
              {mainRoutes.map((route, i) => {
                return (
                  <Route
                    key={i}
                    exact={route.exact}
                    path={route.path}
                    render={props => <route.component {...props} />}
                  />
                );
              })}
            </Switch>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  );
};

export default Components;
