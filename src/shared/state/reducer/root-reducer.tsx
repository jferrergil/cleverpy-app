import { combineReducers } from "redux";
import postsReducers from './reducer'

const rootReducer = combineReducers({
    data: postsReducers
})

export default rootReducer;