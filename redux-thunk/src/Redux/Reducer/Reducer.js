 
 const data = {
    data : []
 }

const myReducer =( state=data, {type,payload})=> {
     
    if( type == "SHOW")
   return {
    ...state,
    payload
   }

}

export {myReducer};