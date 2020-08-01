import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user/reducer";
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector
} from "react-redux";
import sofasReducer from "./modules/sofas/reducer";
import bedsReducer from "./modules/beds/reducer";

const reducer = combineReducers({
	user: userReducer,
	sofas: sofasReducer,
	beds: bedsReducer
});

const store = configureStore({
	reducer
});

export type RootState = ReturnType<typeof reducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
