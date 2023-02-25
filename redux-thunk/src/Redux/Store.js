
import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { myReducer } from './Reducer/Reducer';




const myStore = createStore(
        myReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
     );


export {myStore};




