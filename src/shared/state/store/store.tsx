import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducer/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const middelwares = [reduxThunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middelwares))) ;

export default store;
