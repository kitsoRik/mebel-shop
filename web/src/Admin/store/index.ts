import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../../store/modules/user/reducer";
import { manufacturesReducer } from "./modules/manufactures/reducer";
import { sofasReducer } from "./modules/sofas/reducer";
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector
} from "react-redux";
import { bedsReducer } from "./modules/beds/reducer";
import { wardrobesReducer } from "./modules/wardrobes/reducer";

const reducer = combineReducers({
	user: userReducer,
	manufactures: manufacturesReducer,
	sofas: sofasReducer,
	beds: bedsReducer,
	wardrobes: wardrobesReducer
});

const store = configureStore({
	reducer
});

export type AdminState = ReturnType<typeof reducer>;
export const useAdminSelector: TypedUseSelectorHook<AdminState> = useReduxSelector;

export default store;
