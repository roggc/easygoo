__devMode__&& console.log('src/comps/content/redux/reducer')

import React from 'react'
import * as types from './types'

export default name=> (val=
  {
    show: true,
    children: <div>some content ...</div>
  }, act)=>
{
  switch (act.type)
  {
    case types.CONTENT_SET_CHILDREN_+name:
      val=
      {
        ...val,
        children: act.val
      }
      return val
    case types.CONTENT_SET_EMAIL_+name:
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
