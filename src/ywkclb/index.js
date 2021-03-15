/*
 * @Author: eobeans
 * @Date: 2020-10-03 16:36:59
 * @LastEditors: eobeans
 * @LastEditTime: 2020-10-11 20:32:56
 * @version: 0.1.0
 * @Descripttion: 药物库存列表查询页面
 */
import React from 'react';
import { Row, Col, Button, Form, Input, Space, Pagination, Table } from 'antd';
import { SearchOutlined, SyncOutlined, PlusOutlined, DeleteOutlined, ShakeOutlined } from '@ant-design/icons';
import './index.css';
import Conn from '../connection/ywkclbConn';
class ywkclb extends React.Component {
  ywkcForm = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
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
      tableScroll: {
        y: 654
      },
      // 列表 Start
      total: 50,
      pageIndex: 1, // 当前页码
      pageSize: 10, // 当前页列数数量
      data: [],
      // 列表 End
      // 查询表单 Start
      hzxm: '', // 患者姓名
      ywmc: '', // 药物名称
      ywpp: '', // 药物品牌
      // 查询表单 End
      selectArr: [], // 选中的数据
      alterAble: true, // 修改按钮是否可点击
      delAble: true, // 删除按钮是否可点击
    };
    // this.ywkcForm = Form.useForm();
    this.search = this.search.bind(this);
    this.resetData = this.resetData.bind(this);
  }
  componentDidMount() {
    // 用于判断数据为空时，清除无数据提示的滚动条
    // this.setState({tableScroll: {}});
    Conn.getYwkclb()
      .then(res => {
        if(res.data) {
          this.setState({data: res.data, total: res.total,
            pageIndex: res.pageIndex, pageSize: res.pageSize});
        } else {
          this.setState({tableScroll: {}});
        }
      })
      .catch((err) => {
        // 数据为空时清除无数据提示的滚动条
        this.setState({tableScroll: {}});
        console.log(err);
      })
  }
  onShowSizeChange (current, size) {
    console.log('current', current);
  }
  onChange (pageNumber) {
    console.log('Page: ', pageNumber);
  }
  // 查询
  search () {
    console.log('search',this.state.hzxm);
  }
  // 重置
  resetData () {
    this.ywkcForm.current.resetFields();
  }
  render() {
    return (
      <div id='ywkclb' className="jtyw-layout">
        <div className="jtyw-title">药物库存列表查询页面</div>
        <div className="jtyw-btn-list">
          <Space>
            <Button type="primary"
              size="small"
              icon={<SearchOutlined />}
              onClick={this.search}>查询
            </Button>
            <Button size="small"
              icon={<SyncOutlined />}
              onClick={this.resetData}>重置
            </Button>
            <Button type="primary"
              size="small"
              icon={<PlusOutlined />}>新增
            </Button>
            <Button type="primary"
              size="small"
              icon={<ShakeOutlined />}>修改
            </Button>
            <Button type="primary"
              size="small"
              icon={<DeleteOutlined />} danger>删除
            </Button>
          </Space>
        </div>
        <div className="jtyw-search-form">
          <Form
            ref={this.ywkcForm}
            name='ywkcForm'
            size="small"
          >
            <Row justify="space-between">
              <Col span="7" key="c1">
                <Form.Item
                  name='hzxm'
                  label='患者姓名'
                >
                  <Input placeholder="请输入患者姓名" />
                </Form.Item>
              </Col>
              <Col span="7" key="c2">
                <Form.Item
                  name='ywmc'
                  label='药物名称'
                >
                  <Input placeholder="请输入药物名称" />
                </Form.Item>
              </Col>
              <Col span="7" key="c3">
                <Form.Item
                  name='ywpp'
                  label='药物品牌'
                >
                  <Input placeholder="请输入药物品牌" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="jtyw-table-list">
          <Table columns={this.state.columns} dataSource={this.state.data}
          loading={this.state.loading} bordered size="small" rowSelection={{type: 'checkbox'}}
          pagination={false} scroll={{ ...this.state.tableScroll }} />
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