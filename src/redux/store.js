import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './reducers';

const store = configureStore({
  reducer: characterReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), 
});

export default store;