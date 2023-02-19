
import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { myReducer } from './Reducer/Reducer';




const myStore = createStore(myReducer,applyMiddleware(logger));


export {myStore};




