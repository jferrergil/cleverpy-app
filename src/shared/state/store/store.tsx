import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducer/root-reducer';

const middelwares = [reduxThunk];

const store = createStore(rootReducer, applyMiddleware(...middelwares));

export default store;
