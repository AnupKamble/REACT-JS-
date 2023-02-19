
import {legacy_createStore as createStore} from 'redux'
import { myReducer } from './Reducer/Reducer';


const myStore = createStore(myReducer);
// console.log(myStore);
export {myStore};
