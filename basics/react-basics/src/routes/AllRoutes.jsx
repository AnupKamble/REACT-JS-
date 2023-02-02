import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CartPage from './CartPage'
import OrdersPage from './OrdersPage'
import ProductDetailsPage from './ProductDetailsPage'
import ProductPage from './ProductPage'
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
