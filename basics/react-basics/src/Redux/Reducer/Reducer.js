import { SHOW } from "../Action/ActionTypes";
const Data = {
  data:[]
}

const myReducer =( state=Data,{type,payload})=> {
  
    // console.log(payload)
     if (type = SHOW) 
     return {
        ...state,
        payload
     }
}

export {myReducer};