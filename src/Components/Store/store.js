import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authslice';

var store = configureStore({
    reducer:{
             auth: authReducer
    }
});
export default store;