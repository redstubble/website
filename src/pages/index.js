import React from 'react';
import 'semantic-ui-css/semantic.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../redux-reducers';
import Header from '../components/header';
import HeaderFade from '../components/headerFade';
import PageType from '../utils/pageType';
import NavItems from '../components/navItems';
import Footer from '../components/footer';
import Router from '../components/customRouter';

// import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(rootReducer);
// const store = createStore(rootReducer, devToolsEnhancer());

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ textAlign: 'center' }}>
          <Header />
          <HeaderFade>
            <NavItems />
          </HeaderFade>
          <Router />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default Index;
