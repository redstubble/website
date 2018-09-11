import React from "react"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/redux-reducers'
// import createStore from "./src/state/createStore"

// import devToolsEnhancer from 'remote-redux-devtools';
// const store = createStore(rootReducer, devToolsEnhancer());
const store = createStore(rootReducer)

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <Provider store={store}>{element}</Provider>