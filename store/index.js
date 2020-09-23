import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import user from './user';
import posts from './posts';

import sagas from './sagas';


const combinedReducer = combineReducers({
  user,
  posts,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    // Здесь нужно проверить состояние хранилища на сервере и на клиенте и если нужно, перезаписать данные
    // подробности https://github.com/vercel/next.js/blob/canary/examples/with-redux-wrapper/store/store.js
    // if (state.count) nextState.count = state.count // preserve count value on client side navigation

    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = (initialState = {}, options = {}) => {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      res: options.res,
      ctx: options,
      axios: axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8000',
        },
      }),
    },
  });

  const middlewares = [sagaMiddleware];
  const finalCreateStore = composeWithDevTools(applyMiddleware(...middlewares))(createStore);
  const store = finalCreateStore(reducer, initialState);

  store.runSaga = (s, params) => sagaMiddleware.run(s, params);
  store.runSaga(sagas);

  return store;
}

export const wrapper = createWrapper(makeStore);
