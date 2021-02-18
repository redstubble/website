import { combineReducers, createStore, PreloadedState } from "redux";
import { ChangePageState } from "./index";

const rootReducer = combineReducers({ pageState: ChangePageState });
export type RootState = ReturnType<typeof rootReducer>;
const createReduxStore = (
  preloadedState: PreloadedState<RootState>
): RootState => createStore(rootReducer, preloadedState);

export { rootReducer, createReduxStore };
