/*
 * @Author: eobeans
 * @Date: 2020-10-03 18:41:56
 * @LastEditors: eobeans
 * @LastEditTime: 2020-10-06 18:45:05
 * @version: 0.1.0
 * @Descripttion: 
 */

import React from 'react';
import { Route } from 'react-router-dom';

function RouteWithSubRoutes (route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default RouteWithSubRoutes;