/*
 * @Author: eobeans
 * @Date: 2020-10-07 15:12:58
 * @LastEditors: eobeans
 * @LastEditTime: 2020-10-11 20:21:34
 * @version: 0.1.0
 * @Descripttion: 
 */
import axios from 'axios';
import url from '../config';

function getYwkclb() {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/ywcklb/getData`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

export default {
  getYwkclb: getYwkclb
}