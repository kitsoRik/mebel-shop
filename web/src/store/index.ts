import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user/reducer";

const reducer = combineReducers({
	user: userReducer,
});

const store = configureStore({
	reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
