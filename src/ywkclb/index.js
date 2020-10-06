import React from 'react';
import { Row, Col, Button, Form, Input, Space, Pagination, Table } from 'antd';
import { SearchOutlined, UndoOutlined } from '@ant-design/icons';
import './index.css';
class ywkclb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 50,
      loading: false,
      columns: [
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
      ],
      data: []
    };
  }
  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      this.state.data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
  }
  onFinish (formData) {
    console.log("onFinish!", formData);
  }
  onFinishFailed (err) {
    console.log(err)
  }
  onShowSizeChange (current, size) {
    console.log('current', current);
  }
  onChange (pageNumber) {
    console.log('Page: ', pageNumber);
  }
  render() {
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
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
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
          <Table columns={this.state.columns} dataSource={this.state.data}
          loading={this.state.loading} bordered size="small"
          pagination={false} scroll={{ y: 654 }} />
        </div>
        <div className="jtyw-footer">
          <Pagination size="small" total={this.state.total} defaultCurrent={1}
            showSizeChanger showQuickJumper
            defaultPageSize={10} pageSizeOptions={[10, 20, 50, 100]}
            onShowSizeChange={this.onShowSizeChange} onChange={this.onChange} />
        </div>
      </div>  
    );
  }
}

export default ywkclb;