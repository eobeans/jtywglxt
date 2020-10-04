import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes/index';
import NavLink from './component/NavLink';
import './App.css';

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function App(props) {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="/ywkclb">
                药物库存列表
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <NavLink to="/login">
                登入页面
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <NavLink to="/">
                返回
              </NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
              {routes.map((route, index) => (
                <Route key = {index}  {...route} />
              ))}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

      {props.children}
      
    </div>
  );
}

export default App;
