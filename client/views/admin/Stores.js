import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./UserReducers";


const store = configureStore({
  reducer: {
    user: userReducer
    },
});

export default store;