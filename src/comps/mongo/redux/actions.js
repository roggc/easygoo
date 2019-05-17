__devMode__&& console.log('src/comps/mongo/redux/actions')

import * as types from './types'
import {request} from 'graphql-request'

const mongoReset= name=>()=>
(
  {
    type:types.MONGO_RESET_+name
  }
)

export const mongoSetShow= name=> val=>dispatch=>
{
  dispatch
  (
    {
      type: types.MONGO_SET_SHOW_+name,
      val: val
    }
  )
  if (!val) dispatch(mongoReset(name)())
}

const mongoSet= name=> val=>
(
  {
    type: types.MONGO_SET_+name,
    val: val
  }
)

const mongoFetching= name=> ()=>
(
  {
    type: types.MONGO_FETCHING_+name
  }
)

export const mongoFetch= name=> ()=> dispatch=>
{
  dispatch(mongoFetching(name)())
  request
  (
    __backend__,
    `
      query
      {
        users
        {
          res
          {
            name
            email
            id
          }
          error
          {
            name
            message
            category
          }
        }
      }
    `
  ).then(data=> dispatch(mongoSet(name)(data)))
}
