/*
 * @Author: eobeans
 * @Date: 2020-10-07 15:12:58
 * @LastEditors: eobeans
 * @LastEditTime: 2020-10-07 15:24:42
 * @version: 0.1.0
 * @Descripttion: 
 */
import axios from 'axios';
import url from '../config';

function getYwkclb() {
  axios.get(`${url}/user?ID=12345`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default {
  getYwkclb: getYwkclb
}