__devMode__&& console.log('src/comps/footer/redux/reducer')

import * as types from './types'
import React from 'react'

export default name=> (val=
  {
    show: true,
    children: <div>footer ...</div>
  }, act)=>
{
  switch(act.type)
  {
    case types.FOOTER_SET_CHILDREN_+name:
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
