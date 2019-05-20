__devMode__&& console.log('src/comps/content/redux/actions')

import * as types from './types'
import {request} from 'graphql-request'

export const contentSetChildren= name=> val=>
(
  {
    type: types.CONTENT_SET_CHILDREN_+ name,
    val: val
  }
)

export const contentSetListeners= name=> val=>
(
  {
    type: types.CONTENT_SET_LISTENERS_+ name,
    val: val
  }
)

export const contentSetEmail=name=>val=>
(
  {
    type:types.CONTENT_SET_EMAIL_+name,
    val: val&& val.email
  }
)

export const contentLogout=name=>listeners=>dispatch=>
(
  request
  (
    __backend__,
    `
      mutation
      {
        logout
      }
    `
  ).then
  (
    data=>
    {
      if(data.logout)
      {
        dispatch(listeners[0]())
      }
    }
  )
)
