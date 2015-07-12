import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux/react'
import { createDispatcher, createRedux, composeStores } from 'redux'
import { Router, Route } from 'react-router'
import { history } from 'react-router/lib/HashHistory'

import * as stores from './lib/stores'
import scanners from './lib/scanners'
import { thunkMiddleware, loggerMiddleware } from './lib/middleware'

const dispatcher = createDispatcher(
  composeStores(stores),
  getState => [ thunkMiddleware(getState), loggerMiddleware ]
)
const redux = createRedux(dispatcher)
// base background
// controls
// app

var App = React.createClass({
  render () {
    var query = this.props.location.query

console.dir(this.props)

    var scanner = scanners[0]

    return (
      <div>
        <audio id='scan1' src={ scanner.url } autoPlay />
      </div>
    )
  }
})

let routes = (
  <Router history={ history }>
    <Route path='/' component={ App } />
  </Router>
)

ReactDOM.render((
  <Provider redux={ redux }>
    { () => routes }
  </Provider>
), document.getElementById('app'))
