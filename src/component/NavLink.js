/*
 * @Author: eobeans
 * @Date: 2020-10-03 18:15:59
 * @LastEditors: eobeans
 * @LastEditTime: 2020-10-06 18:45:00
 * @version: 0.1.0
 * @Descripttion: 
 */

import React from 'react';
import { Link } from "react-router-dom";

function NavLink (props) {
  return <Link {...props} activestyle={{
    fontWeight: "bold",
    color: "red"
  }}></Link>
}

export default NavLink;
