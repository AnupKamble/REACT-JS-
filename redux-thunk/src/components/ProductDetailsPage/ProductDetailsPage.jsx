import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {useDispatch,useSelector} from 'react-redux'
import { myAction } from '../../Redux/Action/Action';

export default function ProductDetailsPage() {
       
  const {id} = useParams();
  const [data,SetData] = useState([]);
  const [loader,SetLoader] = useState(true);
     
  const dispatch = useDispatch();

  const detailsData = useSelector((singledata)=>singledata)
  console.log(detailsData);
  
     const displayProducts= async ()=> {

      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
      let data = await res.json();

        console.log(data);
        SetLoader(false);
        dispatch(myAction(data.data))
     }

     useEffect(()=> {
       displayProducts();
     },[])

  return (
  <>
    <div style={{textAlign:"center"}}>

       { loader ? (<Loader/>) : ( 
        
          
                <div style={{alignItems:"center",boxShadow:"0 0 15px black"}}>  
                        <img src={data.image} alt={data.title}  style={{ height:"300px"}} />
                        <h4  style={{color:"Crimson"}}>{data.title}</h4>   
                        <h5>Brand : {data.brand}</h5>
                       <h5> Category : {data.category}</h5>
                       <h5>Price : {data.price}</h5>
                </div>
             )
          
         
           
       } 
      
    </div>
  </>
  )
}
