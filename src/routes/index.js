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