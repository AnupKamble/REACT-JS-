import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import CartPage from '../components/CartPage/CartPage'
import OrdersPage from '../components/OrdersPage/OrdersPage'
import ProductDetailsPage from '../components/ProductDetailsPage/ProductDetailsPage'
import ProductPage from '../components/ProductPage/ProductPage'
export default function AllRoutes() {
  return (
    <div>
          <Navbar/>
        <Routes>
             <Route path="/" element={<ProductPage/>} />
             <Route path='/product/:id' element={<ProductDetailsPage/>} />
             <Route path='/cart' element = {<CartPage/>}/>
             <Route path='/orders' element ={<OrdersPage/>}/> 
        </Routes>
      
    </div>
  )
}
