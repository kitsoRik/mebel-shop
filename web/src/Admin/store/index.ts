import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../../store/modules/user/reducer";
import { manufacturesReducer } from "./modules/manufactures/reducer";
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector,
} from "react-redux";

const reducer = combineReducers({
	user: userReducer,
	manufactures: manufacturesReducer,
});

const store = configureStore({
	reducer,
});

export type AdminState = ReturnType<typeof reducer>;
export const useAdminSelector: TypedUseSelectorHook<AdminState> = useReduxSelector;

export default store;
