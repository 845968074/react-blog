import Hello from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, hashHistory} from 'react-router';
import Article from './article.jsx';

const router = <Router history={hashHistory}>
  <Route path="/article" component={Article}/>
</Router>;

ReactDOM.render(
  router,
  document.getElementById("content")
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
