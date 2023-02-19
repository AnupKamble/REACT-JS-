import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/"> Products</NavLink>
          </li>

          <li>
            <NavLink to="/cart"> Cart</NavLink>
          </li>

          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
