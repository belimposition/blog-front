import Router from 'next/router';
import {
  all,
  takeLatest,
  takeEvery,
  put,
  getContext,
  call,
} from 'redux-saga/effects';

import {
  createPost,
  createPostSuccess,
  createPostFailure,

  getPosts,
  getPostsSuccess,
  getPostsFailure,

  getPostById,
  getPostByIdSuccess,
  getPostByIdFailure,

  deletePostById,
  deletePostByIdSuccess,
  deletePostByIdFailure,

  updatePostById,
  updatePostByIdSuccess,
  updatePostByIdFailure,

  sendNewComment,
  sendNewCommentSuccess,
  sendNewCommentFailure,

  deleteCommentById,
  deleteCommentByIdSuccess,
  deleteCommentByIdFailure,

  changeComment,
  changeCommentSuccess,
  changeCommentFailure,
} from './index';


export function* createPostSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.post,
      '/post',
      {
        title: payload.title,
        description: payload.description,
        content: payload.content,
      },
    );

    yield put(createPostSuccess(response.data));
    yield Router.push('/');
  } catch (error) {
    console.log('error', error);
    yield put(createPostFailure());
  }
}


export function* getPostsSaga() {
  const axios = yield getContext('axios');

  yield put(getPosts());

  try {
    const response = yield call(
      axios.get,
      '/posts'
    );

    yield put(getPostsSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(getPostsFailure());
  }
}

export function* getPostByIdSaga(id) {
  const axios = yield getContext('axios');

  yield put(getPostById());

  try {
    const response = yield call(
      axios.get,
      `/post/${id}`
    );

    yield put(getPostByIdSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(getPostByIdFailure());
  }
}


export function* deletePostByIdSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    yield call(
      axios.delete,
      `/post/${payload.id}`
    );

    yield put(deletePostByIdSuccess());
  } catch (error) {
    console.log('error', error);
    yield put(deletePostByIdFailure());
  }
}



export function* updatePostByIdSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.put,
      `/post/${payload.id}`,
      {
        title: payload.title,
        description: payload.description,
        content: payload.content,
      },
    );

    yield put(updatePostByIdSuccess(response.data));
    yield Router.push(`/post/${payload.id}`);
  } catch (error) {
    console.log('error', error);
    yield put(updatePostByIdFailure());
  }
}


export function* sendNewCommentSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.put,
      `/post/comment/${payload.postId}`,
      {
        userName: payload.userName,
        userId: payload.userId,
        message: payload.message,
      },
    );

    yield put(sendNewCommentSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(sendNewCommentFailure());
  }
}

export function* deleteCommentByIdSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.put,
      `/post/comment/${payload.postId}/delete`,
      {
        commentId: payload.commentId,
      },
    );

  
    yield put(deleteCommentByIdSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(deleteCommentByIdFailure());
  }
}


export function* changeCommentSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.put,
      `/post/comment/${payload.postId}/change`,
      {
        comment: payload.comment,
      },
    );

  
    yield put(changeCommentSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(changeCommentFailure());
  }
}


export default function* postsSagas() {
  yield all([
    takeLatest(createPost, createPostSaga),
    takeEvery(deletePostById, deletePostByIdSaga),
    takeLatest(updatePostById, updatePostByIdSaga),
    takeLatest(sendNewComment, sendNewCommentSaga),
    takeEvery(deleteCommentById, deleteCommentByIdSaga),
    takeLatest(changeComment, changeCommentSaga),
  ]);
}
