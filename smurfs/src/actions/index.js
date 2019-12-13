import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL";
export const ADD_POST = "ADD_POST";

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: res });
    })
    .catch(err => console.log("fetch error", err));
};

export const addPost = post => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", post)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res
      });
    })
    .catch(err => console.log(err));
};
