__devMode__&& console.log('src/redux/store')

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import addReducer from './reducer'
import fetch from './middleware/fetch'
import route from './middleware/route'
import db from './middleware/db'

export default
(
  ()=>
  {
    const middlewares = [thunk, fetch, route,db]
    return applyMiddleware(...middlewares)(createStore)(addReducer((val={},act)=> val, 'none'))
  }
)()
