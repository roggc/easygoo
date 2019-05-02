__devMode__&& console.log('src/redux/reducer')

import {combineReducers} from 'redux'

let compReducers= {}
let otherReducers= {}

export default (reducer, name)=>
{
  compReducers=
  {
    ...compReducers,
    [name]: reducer
  }

  return combineReducers
  (
    {
      ...otherReducers,
      comps: combineReducers(compReducers)
    }
  )
}
