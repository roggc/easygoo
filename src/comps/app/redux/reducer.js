__devMode__&& console.log('src/comps/app/redux/reducer')

import * as types from './types'
import React from 'react'

export default name=> (val=
  {
    show: true,
    children: <div>app ...</div>
  }, act)=>
{
  switch (act.type) {
    case types.APP_SET_SHOW_+name:
      val=
      {
        ...val,
        show: act.val
      }
      return val
    case types.APP_SET_CHILDREN_+name:
      val=
      {
        ...val,
        children: act.val
      }
      return val
    case types.APP_SET_CHILDREN0_+name:
      val=
      {
        ...val,
        children0: act.val
      }
      return val
    default:
      return val
  }
}
