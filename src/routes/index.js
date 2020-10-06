/*
 * @Author: eobeans
 * @Date: 2020-10-03 16:38:59
 * @LastEditors: eobeans
 * @LastEditTime: 2020-10-06 18:45:18
 * @version: 0.1.0
 * @Descripttion: 前端路由
 */

import App from '../App';
import ywkclb from '../ywkclb/index';
import login from '../login/index';

const routes = [
  {
    path: "/",
    component: App,
    exact: true,
    routes: []
    // loadData: () => getSomeData()
  },
  {
    path: "/ywkclb",
    component: ywkclb,
    exact: true
  },
  {
    path: "/login",
    component: login,
    exact: true
  }
];

export default routes;