__devMode__&& console.log('src/comps/about/redux/reducer')

import * as types from './types'
import React from 'react'

export default name=> (
  val=
  {
    show: false,
    children: <div>about ...</div>
  }, act)=>
  {
    switch (act.type) {
      case types.ABOUT_SET_SHOW_+name:
        val=
        {
          ...val,
          show: act.val
        }
        return val
      case types.ABOUT_SET_CHILDREN_+name:
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
