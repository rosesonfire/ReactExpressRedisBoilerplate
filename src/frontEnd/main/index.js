import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise-middleware'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './app/components/app'
import reducers from './app/reducers'
import authMiddleware from './app/middlewares/auth'

// ========== Initialize application ==========

const createReduxStore = () => {
  const middlewares = applyMiddleware(
    reduxThunk,
    authMiddleware,
    reduxLogger,
    reduxPromise())
  const store = createStore(reducers, {}, middlewares)

  return store
}

const start = async () => {
  const store = createReduxStore()
  const mainContainerElement = document.getElementById('main-container')

  ReactDOM.render(<Provider store={store}><App /></Provider>, mainContainerElement)
}

start().catch(err => {
  console.error(err.message)
})
