import { createAction, createReducer } from 'redux-act';
import {
  updatePosts,
  deletePost,
} from './helpers';

export const getPosts = createAction('posts/getPosts');
export const getPostsSuccess = createAction('posts/getPostsSuccess');
export const getPostsFailure = createAction('posts/getPostsFailure');

export const createPost = createAction('posts/createPost');
export const createPostSuccess = createAction('posts/createPostSuccess');
export const createPostFailure = createAction('posts/createPostFailure');

export const getPostById = createAction('posts/getPostById');
export const getPostByIdSuccess = createAction('posts/getPostByIdSuccess');
export const getPostByIdFailure = createAction('posts/getPostByIdFailure');

export const deletePostById = createAction('posts/deletePostById');
export const deletePostByIdSuccess = createAction('posts/deletePostByIdSuccess');
export const deletePostByIdFailure = createAction('posts/deletePostByIdFailure');

export const updatePostById = createAction('posts/updatePostById');
export const updatePostByIdSuccess = createAction('posts/updatePostByIdSuccess');
export const updatePostByIdFailure = createAction('posts/updatePostByIdFailure');


export const sendNewComment = createAction('posts/sendNewComment');
export const sendNewCommentSuccess = createAction('posts/sendNewCommentSuccess');
export const sendNewCommentFailure = createAction('posts/sendNewCommentFailure');

export const deleteCommentById = createAction('posts/deleteCommentById');
export const deleteCommentByIdSuccess = createAction('posts/deleteCommentByIdSuccess');
export const deleteCommentByIdFailure = createAction('posts/deleteCommentByIdFailure');

export const setChangeComment = createAction('posts/setChangeComment');
export const changeComment = createAction('posts/changeComment');
export const changeCommentSuccess = createAction('posts/changeCommentSuccess');
export const changeCommentFailure = createAction('posts/changeCommentFailure');


const initialState = {
  posts: [],
  changingComment: null,
  isLoading: false,
  isError: false,
};


const handleCreatePost = (state) => ({
  ...state,
  isLoading: true,
  isError: false,
});

const handleCreatePostSuccess = (state, post) => ({
  ...state,
  posts: [
    post,
    ...state.posts,
  ],
  isLoading: false,
  isError: false,
});

const handleCreatePostFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});


const handleGetPosts = (state) => ({
  ...state,
  isLoading: true,
});

const handleGetPostsSuccess = (state, posts) => ({
  ...state,
  posts,
  isLoading: false,
  isError: false,
});

const handleGetPostsFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});


const handleGetPostById = (state) => ({
  ...state,
  isLoading: true,
});


const handleGetPostByIdSuccess = (state, post) => ({
  ...state,
  posts: updatePosts(state.posts, post),
  isLoading: false,
  isError: false,
});

const handleGetPostByIdFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});




const handleDeletePostById = (state, { id }) => ({
  ...state,
  // оптимистично удаляю, нужно сохранять удалённый итем и восстанаваливать его в случае ошибки на стороне бека
  posts: deletePost(state.posts, id),
  isLoading: true,
});


const handleDeletePostByIdSuccess = (state) => ({
  ...state,
  isLoading: false,
  isError: false,
});

const handleDeletePostByIdFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});


const handleUpdatePostbyId = (state, post) => ({
  ...state,
  // оптимистично обновляю, нужно сохранять старый итем и восстанаваливать его в случае ошибки на стороне бека
  posts: updatePosts(state.posts, post),
  isLoading: true,
  isError: false,
});

const handleUpdatePostbyIdSuccess = (state) => ({
  ...state,
  isLoading: false,
  isError: false,
});

const handleUpdatePostbyIdFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});


const handleSendNewComment = (state) => ({
  ...state,
  isLoading: true,
  isError: false,
});

const handleSendNewCommentSuccess = (state, post) => ({
  ...state,
  posts: updatePosts(state.posts, post),
  isLoading: false,
  isError: false,
});

const handleSendNewCommentFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});


const handleDeleteCommentById = (state) => ({
  ...state,
  isLoading: true,
  isError: false,
});

const handleDeleteCommentByIdSuccess = (state, post) => ({
  ...state,
  posts: updatePosts(state.posts, post),
  isLoading: false,
  isError: false,
});

const handleDeleteCommentByIdFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});

const handleSetChangeComment = (state, comment) => ({
  ...state,
  changingComment: comment,
});

const handleChangeComment = (state) => ({
  ...state,
  isError: false,
  isLoading: true,
});

const handleChangeCommentSuccess = (state, post) => ({
  ...state,
  posts: updatePosts(state.posts, post),
  changingComment: null,
  isError: false,
  isLoading: false,
});


const handleChangeCommentFailure = (state) => ({
  ...state,
  isError: true,
  isLoading: false,
});



export default createReducer({
  [createPost]: handleCreatePost,
  [createPostSuccess]: handleCreatePostSuccess,
  [createPostFailure]: handleCreatePostFailure,

  [getPosts]: handleGetPosts,
  [getPostsSuccess]: handleGetPostsSuccess,
  [getPostsFailure]: handleGetPostsFailure,

  [getPostById]: handleGetPostById,
  [getPostByIdSuccess]: handleGetPostByIdSuccess,
  [getPostByIdFailure]: handleGetPostByIdFailure,

  [deletePostById]: handleDeletePostById,
  [deletePostByIdSuccess]: handleDeletePostByIdSuccess,
  [deletePostByIdFailure]: handleDeletePostByIdFailure,

  [updatePostById]: handleUpdatePostbyId,
  [updatePostByIdSuccess]: handleUpdatePostbyIdSuccess,
  [updatePostByIdFailure]: handleUpdatePostbyIdFailure,

  [sendNewComment]: handleSendNewComment,
  [sendNewCommentSuccess]: handleSendNewCommentSuccess,
  [sendNewCommentFailure]: handleSendNewCommentFailure,

  [deleteCommentById]: handleDeleteCommentById,
  [deleteCommentByIdSuccess]: handleDeleteCommentByIdSuccess,
  [deleteCommentByIdFailure]: handleDeleteCommentByIdFailure,

  [setChangeComment]: handleSetChangeComment,
  [changeComment]: handleChangeComment,
  [changeCommentSuccess]: handleChangeCommentSuccess,
  [changeCommentFailure]: handleChangeCommentFailure,

}, initialState);
