__devMode__&& console.log('src/comps/header/redux/reducer')

import * as types from './types'
import React from 'react'

export default name=> (val=
{
  show: true,
  title: 'title ...'
}, act)=>
{
  switch (act.type) {
    case types.HEADER_SET_TITLE_+name:
      val=
      {
        ...val,
        title: act.val
      }
      return val
    case types.HEADER_SET_CHILDREN_+name:
      val=
      {
        ...val,
        children: act.val
      }
      return val
    case types.HEADER_SET_EMAIL_+name:
      val=
      {
        ...val,
        email: act.val
      }
      return val
    default:
      return val
  }
}
