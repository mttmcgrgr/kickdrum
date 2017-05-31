import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import PostIndexContainer from './posts/post_index_container';
import PostFormContainer from './posts/post_form_container';
import UserProfileContainer from './users/user_profile_container';
import Home from './greeting/home';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/posts');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/home" component={Home} onEnter={_redirectIfLoggedIn} />
          <Route path="/posts" component={PostIndexContainer}  onEnter={_ensureLoggedIn} />
          <Route path="/posts/new" component={PostFormContainer} onEnter={_ensureLoggedIn} />
          <Route path="/users/:userId" component={UserProfileContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;



//<Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
//<Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
