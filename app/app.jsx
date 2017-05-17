const React = require('react')
const ReactDOM = require('react-dom')

// object de-structuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

{ /* history prop tells react that we want to route '#' sign followed by the path, in order to maintain routes for our app */ }
{ /* Route is used to create paths for different components */ }
ReactDOM.render(
  <Router history={hashHistory}>
  </Router>,
  document.getElementById('app')
)

require('./redux-example.js')
