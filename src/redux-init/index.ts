import { combineReducers } from "redux";
import { ChangePageState } from "../redux-reducers/index";
const rootReducer = combineReducers({ app: ChangePageState });
export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
