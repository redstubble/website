import React from "react";
import { Provider } from "react-redux";
import { createStore as reduxCreateStore } from "redux";
import { rootReducer } from "./index";

const createStore = () => reduxCreateStore(rootReducer);

type ReduxRootProps = {
  element: JSX.Element;
};

const reduxRoot = ({ element }: ReduxRootProps) => {
  const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};

export { reduxRoot };
