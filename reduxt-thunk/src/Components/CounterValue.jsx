import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterValue() {

    const storeData = useSelector((st)=> st.counter)    // - this hook is used to get data from redux store
                                                        // - it return 1 callback function
                                                        // use any name for argument(st) inside function 
    // console.log(storeData)

  return (
    <div>
      <h1>{storeData}</h1>
    </div>
  )
}
