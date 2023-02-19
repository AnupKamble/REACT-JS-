import { SHOW } from "./ActionTypes";

  
const myAction =(payload)=> {
    return {
        type: SHOW,
        payload
    }
}

export {myAction};