import React from 'react'
import CounterButtons from './CounterButtons'
import CounterValue from './CounterValue'
import { handleAdd,handleReduce } from '../redux/Action/Action'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function Counter() {

      const dispatch = useDispatch();
    
      const [state,setState] = useState(0);

      const forceUpdate =()=> {
        setState(prev=> prev+1);
      }

    const Add =()=> {
     
        dispatch(handleAdd(1));
        forceUpdate();
    }

    const Reduce =()=> {
       
        dispatch(handleReduce(1));
        forceUpdate();
    }


  return (
    <div>
       
       <CounterButtons Add ={Add} Reduce={Reduce}/>
       <CounterValue/>
    </div>
  )
}
