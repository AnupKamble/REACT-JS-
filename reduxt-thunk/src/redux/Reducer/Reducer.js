

//  - it is a simple js function;
//  - dispatch calls the Reducer  and Reducer performs some operations and store data to state;
//  - it returns the state and data went to the redux store;
//  - it takes two parameters i.e. initialdata , action(payload);
//  - we can add any data in obj and pass in 1st Argument in a reducer function;


import { Add,Reduce } from "../Action/Actiontypes"


const data = {
    counter : 1,
}


const myReducer = ( state = data,{type,payload})=> {

  switch (type) {

    case Add : 
    return {
        ...state,
        counter : state.counter + payload,
    }

    case Reduce : 
    return {
        ...state,
        counter: state.counter - payload,
    }

    default : 
    return state
  }
}

export {myReducer};