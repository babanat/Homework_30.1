import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import characterReducer from './reducers';

const store = createStore(characterReducer, applyMiddleware(thunk));

export default store;
