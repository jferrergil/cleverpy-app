import * as types from "./action-types";
import axios from "axios";
import { Post } from "../../models/posts.model";

const getPosts = (posts: Post[]) => ({
  type: types.GET_POSTS,
  payload: posts,
});

export const loadPosts = () => {
  return function (dispatch: Function) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getPosts(resp.data));
      })
      .catch((error) => {
        dispatch({type: "LOAD_POST_ERROR", payload: error})
      });
  };
};

export const deletePost = (elem: Post) => ({
  type: types.DELETE_POST,
  payload: elem,
});
