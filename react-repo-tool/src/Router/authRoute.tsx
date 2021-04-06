import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

const AuthRoute = (props: { routeData: any; }): JSX.Element => {
  const { routeData } = props;
  const { pathname } = useLocation();
  let targetRouteObj: any;
  const private_token = localStorage.getItem("private_token");
  if (pathname !== '/login') {
    targetRouteObj = routeData[1];
  } else {
    targetRouteObj = routeData[0];
  } //暂未搞清楚
  return (
    <Route
      path={pathname}
      render={(config: any) => {
        if (private_token && pathname === '/login') {
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        } else if (!private_token && pathname === '/') {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        } else {
          return (<targetRouteObj.component {...config} />);
        }
      }
      }
    />
  );// 把方法写在render里面
};



export default AuthRoute;