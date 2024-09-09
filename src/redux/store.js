// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import textReducer from './textSlice';

const store = configureStore({
  reducer: {
    texts: textReducer,
  },
});

export default store;
