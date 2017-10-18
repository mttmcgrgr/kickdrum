 import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_FOLLOWED_POSTS = "RECEIVE_FOLLOWED_POSTS";


const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveFollowedPosts = (posts) => ({
  type: RECEIVE_FOLLOWED_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const removePost = (post) => ({
  type: REMOVE_POST,
  post
});



export const fetchPost = (id) => dispatch => (
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchUserPosts = (id) => dispatch => (
  PostApiUtil.fetchUserPosts(id).then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchFollowedPosts = (id) => dispatch => (
  PostApiUtil.fetchPosts(id).then(posts => dispatch(receiveFollowedPosts(posts)))
);

export const createPost = (post) => dispatch => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const deletePost = id => dispatch => (
  PostApiUtil.deletePost(id).then(post => dispatch(removePost(post)))
);
