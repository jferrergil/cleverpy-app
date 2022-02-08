import { AnyAction } from 'redux';
import { ActionPost } from '../../models/action-posts.model';
import * as types from '../actions/action-types';

const initialState: ActionPost = {
  posts: [],
  post: {},
  loading: true,
};

const postsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default postsReducer;
