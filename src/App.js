import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes/index';
import NavLink from './component/NavLink';
import './App.css';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/login">
          登入页面
        </NavLink>
        <br></br>
        <NavLink to="/ywkclb">
          药物库存列表
        </NavLink>
        <br></br>
        <NavLink to="/">
          返回
        </NavLink>
        <Switch>
          {routes.map((route, index) => (
            <Route key = {index}  {...route} />
          ))}
        </Switch>
      </BrowserRouter>
      
      {props.children}
    </div>  
  );
}

export default App;
