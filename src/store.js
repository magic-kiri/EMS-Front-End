import { createStore, applyMiddleware, compose } from 'redux'
import getRootReducer from './rootReducer'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore (state = {}) {
  return createStore(
    getRootReducer(history), // root reducer with router state
    state,
    compose(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  )
}

