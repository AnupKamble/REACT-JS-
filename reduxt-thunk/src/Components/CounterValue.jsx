import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterValue() {

    const storeData = useSelector((data)=> data.counter)
    

    console.log(storeData)
  return (
    <div>
      <h1>{storeData}</h1>
    </div>
  )
}
