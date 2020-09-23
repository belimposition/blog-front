import { createAction, createReducer } from 'redux-act';

const initialState = {
  isAuth: true,
};



export default createReducer({}, initialState);
