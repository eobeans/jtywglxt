import React from 'react';
import { Link } from "react-router-dom";

function NavLink (props) {
  return <Link {...props} activestyle={{
    fontWeight: "bold",
    color: "red"
  }}></Link>
}

export default NavLink;
