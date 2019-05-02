__devMode__&& console.log('src/redux/store')

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import addReducer from './reducer'
import fetch from './middleware/fetch'
import route from './middleware/route'

export default
(
  ()=>
  {
    const middlewares = [thunk, fetch, route]
    return applyMiddleware(...middlewares)(createStore)(addReducer((val={},act)=> val, 'none'))
  }
)()
