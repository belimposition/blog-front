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
      'api/posts/create',
      {
        ...payload
      },
    );

    yield put(createPostSuccess(response.data.data));
    yield Router.push('/');
  } catch (error) {
    yield put(createPostFailure());
  }
}


export function* getPostsSaga() {
  const axios = yield getContext('axios');

  yield put(getPosts());

  try {
    const response = yield call(
      axios.get,
      '/api/posts'
    );

    yield put(getPostsSuccess(response.data.data));
  } catch (error) {
    yield put(getPostsFailure());
  }
}

export function* getPostByIdSaga(id) {
  const axios = yield getContext('axios');

  yield put(getPostById());

  try {
    const response = yield call(
      axios.get,
      `api/posts/${id}`
    );

    yield put(getPostByIdSuccess(response.data.data));
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
      `api/posts/${payload.id}`
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
      `api/posts/${payload.id}`,
      {
        title: payload.title,
        description: payload.description,
        content: payload.content,
      },
    );

    yield put(updatePostByIdSuccess(response.data.data));
    yield Router.push(`/post/${payload.id}`);
  } catch (error) {
    yield put(updatePostByIdFailure());
  }
}


export function* sendNewCommentSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.put,
      `api/posts/comment/${payload.postId}`,
      {
        userName: payload.userName,
        authorId: payload.authorId,
        message: payload.message,
      },
    );

    yield put(sendNewCommentSuccess(response.data.data));
  } catch (error) {
    yield put(sendNewCommentFailure());
  }
}

export function* deleteCommentByIdSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.put,
      `api/posts/comment/${payload.postId}/remove`,
      {
        commentId: payload.commentId,
        authorId: payload.authorId,
      },
    );

  
    yield put(deleteCommentByIdSuccess(response.data.data));
  } catch (error) {
    yield put(deleteCommentByIdFailure());
  }
}


export function* changeCommentSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.put,
      `api/posts/comment/${payload.postId}/change`,
      {
        comment: payload.comment,
        authorId: payload.authorId,
      },
    );


    yield put(changeCommentSuccess(response.data.data));
  } catch (error) {
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
