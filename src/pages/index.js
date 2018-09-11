import React from 'react'
import 'semantic-ui-css/semantic.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../redux-reducers'
import Header from '../components/header'
import PageType from '../utils/pageType'
import Footer from '../components/footer'
import Router from '../components/customRouter'
import get from 'lodash/get'

// import devToolsEnhancer from 'remote-redux-devtools';

// const store = createStore(rootReducer)
// const store = createStore(rootReducer, devToolsEnhancer());

class Index extends React.Component {
  render() {
    return (
      // <Provider store={store}>
        <div>
          <Header {...this.props} />
          <Router />
          <Footer />
        </div>
      // </Provider>
    )
  }
}

export default Index
