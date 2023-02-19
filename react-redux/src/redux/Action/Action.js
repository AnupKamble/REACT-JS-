import { Add,Reduce } from "./Actiontypes"

//  - implement 1st to pass data from react component to dispatch;
//  - to save or send data to redux store we need to create action first;

//  - payload is a data taken from react component or data fetched from api;
//  - then this fuction neeed type and data i.e. payload
//  - now wee need to export this functions to reducers;


const handleAdd =(payload)=> {
     
    return {
        type : Add,
        payload
    }

}

const handleReduce =(payload)=> {
    
    return {
        type : Reduce,
        payload
    }
}


export {handleAdd,handleReduce}