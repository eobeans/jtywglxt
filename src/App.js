import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes/index'
import NavLink from './NavLink'
import './App.css';

function App(props) {
  return (
    <div>
      <NavLink to="/ywkclb">
        药物库存列表
      </NavLink>
      <br></br>
      <NavLink to="/">
        返回
      </NavLink>
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key = {index} />
        ))}
      </Switch>
      {props.children}
    </div>
  );
}

export default App;
