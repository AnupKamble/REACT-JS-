import React, { useEffect, useState } from 'react'

export default function DataFetch() {

  const [state,SetState]= useState([])


  const fetchApi= async()=> {

    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
    let data = await res.json();
    console.log(data);
    SetState(data.data)
  }
//   fetchApi();
  useEffect(()=> {
    fetchApi()
  },[])

  


  return (
    <>

      { 
         state.map((ele,i)=> {
            return (
                
            <div key={i}> 

                      <h2>brand : {ele.brand}</h2>
                      <h1>Title : {ele.title}</h1>
            </div>

             
            )
         })

       
     }
      </>
    
  )
  }
