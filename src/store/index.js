import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import counterReducer from './coutner.slice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

export default store;