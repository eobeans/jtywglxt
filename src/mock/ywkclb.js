/*
 * @Author: eobeans
 * @Date: 2020-10-11 11:51:09
 * @LastEditors: eobeans
 * @LastEditTime: 2020-10-11 19:57:43
 * @version: 0.1.0
 * @Descripttion: 
 */
const Mock = require('mockjs');

function getYwkclb() {
  let data = []
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
  return data;
}

Mock.mock("http://localhost:3000/ywcklb/getData", "get", getYwkclb);
