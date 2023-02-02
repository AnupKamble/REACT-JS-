import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
         <nav>
             <ul>
                <li>
                    <NavLink to="/" > Products</NavLink>
                </li>
             </ul>
               <ul>
                  <li>
                     <NavLink to = "/cart"> Cart</NavLink>
                  </li>
               </ul>
               <ul>
                <li>
                    <NavLink to="/orders">Orders</NavLink>
                </li>
               </ul>
         </nav>
    </div>
  )
}
