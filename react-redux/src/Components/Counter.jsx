import React from 'react'
import CounterButtons from './CounterButtons'
import CounterValue from './CounterValue'
import { handleAdd,handleReduce } from '../redux/Action/Action'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function Counter() {

      const dispatch = useDispatch();  // - this hooke is used to send action to reducer
    
      const [state,setState] = useState(0);   // save the last updated counter in state and update it by forceupdate

      const forceUpdate =()=> {
        setState(prev=> prev+1);
      }
      console.log(state)

    const Add =()=> {
        dispatch(handleAdd(1));  //  - if pass 5 then counter will add or reduce by 5
        forceUpdate();           //  -  handleAdd is a function take 1 as a payload and dispatch send it to reducer                         
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
