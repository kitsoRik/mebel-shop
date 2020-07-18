import { RootState } from "../..";

export const selectUserDataFromRootReducer = (state: RootState) =>
	state.user.data;
