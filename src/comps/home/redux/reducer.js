__devMode__&& console.log('src/comps/home/redux/reducer')

import * as types from '../redux/types'
import React from 'react'

export default name=> (val=
  {
    show: false,
    children: <div>home ...</div>
  }, act)=>
{
  switch (act.type) {
    case types.HOME_SET_SHOW_+name:
      val=
      {
        ...val,
        show: act.val
      }
      return val
    case types.HOME_SET_CHILDREN_+name:
      val=
      {
        ...val,
        children: act.val
      }
      return val
    default:
      return val
  }
}
