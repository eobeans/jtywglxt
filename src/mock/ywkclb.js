/*
 * @Author: eobeans
 * @Date: 2020-10-11 11:51:09
 * @LastEditors: eobeans
 * @LastEditTime: 2020-11-07 14:06:37
 * @version: 0.1.0
 * @Descripttion: 
 */
const Mock = require('mockjs');

function getYwkclb() {
  let res = {
    data: [],
    total: 100,
    pageIndex: 1,
    pageSize: 10
  }
  for (let i = 0; i < 100; i++) {
    res.data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return res;
}

Mock.mock("http://localhost:3000/ywcklb/getData", "get", getYwkclb);
