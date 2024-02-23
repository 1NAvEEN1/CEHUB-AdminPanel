import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import loaderReducer from "../reducers/loaderSlice";
import successMessageSlice from "../reducers/successMessageSlice";
import networkStatusSlice from "../reducers/networkStatusSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
    success: successMessageSlice,
    networkStatus: networkStatusSlice,
    
  },

});

export default store;
