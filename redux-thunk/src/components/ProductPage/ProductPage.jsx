import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import { NavLink } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { myAction } from '../../Redux/Action/Action';


export default function ProductPage() {

  const [data,SetData] = useState([])
  const [loader,SetLoader] = useState(true);
  const [page,SetPage] = useState(1)
  const [totalpage,SetTotalPage] = useState(1);
  
 
const dispatch = useDispatch();
const store = useSelector((stat)=> stat.payload)
   console.log(store)
  const fetchProducts = async ()=> {

      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12`);
      let data = await res.json();
      // console.log(data);
      dispatch(myAction(data.data))
      SetLoader(false);
      // SetData(data.data);
      SetTotalPage(data.totalPages)
  }

  useEffect(()=> {
       fetchProducts();
  },[page])


  

  return ( 
  <>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"15px"}}>
        
       {  loader ? (<Loader/>) : (
            data?.map((ele,i)=> {
              return (
                <div key={i}>
                   <div style={{textAlign:"center",boxShadow:"0 0 10px black",padding:"10px 10px 10px 10px "}}>
                      <img src={ele.image}/>
                    <NavLink to = {`/Product/${ele.id}`} >  <h4 style={{color:"Crimson"}}>Name : {ele.title}</h4></NavLink>
                       <h5>Brand : {ele.brand}</h5>
                       <h5> Category : {ele.category}</h5>
                       <h5>Price : {ele.price}</h5>
                   </div>
                   
                </div>
              )
            })
           )
        }

    </div>

     <Pagination currentPage={page} totalPages={totalpage} handleChangePage={(page)=>SetPage(page)}/>

  </>
  )
}
