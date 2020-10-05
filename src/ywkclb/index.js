import React from 'react';
import { Row, Col, Button, Form, Input, Space, Pagination, Table } from 'antd';
import { SearchOutlined, UndoOutlined } from '@ant-design/icons';
import './index.css';

function ywkclb () {
  let total = 50;
  let onFinish = (formData) => {
    console.log("onFinish!", formData);
  }
  let onFinishFailed = (err) => {
    console.log(err)
  }
  let onShowSizeChange = (current, size) => {
    console.log('current', current);
  }
  let onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <div id='ywkclb' className="jtyw-layout">
      <div className="jtyw-title">药物库存列表查询页面</div>
      <div className="jtyw-btn-list">
        <Space>
          <Button type="primary" size="small" icon={<SearchOutlined />}>查询</Button>
          <Button type="primary" size="small" icon={<UndoOutlined />}>reset</Button>
        </Space>
      </div>
      <div className="jtyw-search-form">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size="small"
        >
          <Row>
            <Col span="8">
              <span className="jtyw-search-label">患者姓名</span>
              <Input className="jtyw-search-item"></Input>
            </Col>
            <Col span="8">
              <span className="jtyw-search-label">药物名称</span>
              <Input className="jtyw-search-item"></Input>
            </Col>
            <Col span="8">
              <span className="jtyw-search-label">药物名称</span>
              <Input className="jtyw-search-item"></Input>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="jtyw-table-list">
        <Table columns={columns} dataSource={data} loading={false} bordered size="small"
        pagination={false} scroll={{ y: 654 }} />
      </div>
      <div className="jtyw-footer">
        <Pagination size="small" total={total} defaultCurrent={1}
          showSizeChanger showQuickJumper
          defaultPageSize={10} pageSizeOptions={[10, 20, 50, 100]}
          onShowSizeChange={onShowSizeChange} onChange={onChange} />
      </div>
    </div>  
  );
}

export default ywkclb;