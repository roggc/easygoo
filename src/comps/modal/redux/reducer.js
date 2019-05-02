__devMode__&& console.log('src/comps/modal/redux/reducer')

import * as types from './types'
import React from 'react'

export default name=> (val=
  {
    show: false,
    style:
    {
      top: '0px',
      right: '0px'
    },
    children: <div>this is a modal ...</div>
  }, act)=>
  {
    switch (act.type) {
      case types.MODAL_SET_SHOW_+name:
        val=
        {
          ...val,
          show: act.val
        }
        return val
      case types.MODAL_TOGGLE_SHOW_+name:
        val=
        {
          ...val,
          show: !val.show
        }
        return val
      case types.MODAL_SET_STYLE_+name:
        val=
        {
          ...val,
          style:
          {
            ...val.style,
            top: act.val.top|| val.style.top,
            right: act.val.right|| val.style.right
          }
        }
        return val
      case types.MODAL_SET_CHILDREN_+name:
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
