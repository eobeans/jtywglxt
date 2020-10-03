import App from '../App';
import ywkclb from '../ywkclb/index';

const routes = [
  {
    path: "/",
    component: App
    // loadData: () => getSomeData()
  },
  {
    path: "/ywkclb",
    component: ywkclb
  }
];

export default routes;