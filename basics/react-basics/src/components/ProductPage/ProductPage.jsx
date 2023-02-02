import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';

export default function ProductPage() {

  const [data,SetData] = useState([])
  const [loader,SetLoader] = useState(true);
  

  const fetchProducts =async ()=> {

      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
      let data = await res.json();
      console.log(data);
      SetLoader(false);
      SetData(data.data);
  }

  useEffect(()=> {
       fetchProducts();
  },[])


  

  return ( 
  <>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"15px"}}>
        
       {  loader ? (<Loader/>) : (
            data?.map((ele,i)=> {
              return (
                <div key={i}>
                   <div style={{textAlign:"center",boxShadow:"0 0 10px black",padding:"10px 10px 10px 10px "}}>
                      <img src={ele.image}/>
                      <h4 style={{color:"Crimson"}}>Name : {ele.title}</h4>
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

  </>
  )
}
