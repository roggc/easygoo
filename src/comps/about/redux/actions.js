__devMode__&& console.log('src/comps/about/redux/actions')

import * as types from './types'

export const aboutSetShow= name=> val=>
(
  {
    type: types.ABOUT_SET_SHOW_+name,
    val: val
  }
)

export const aboutSetChildren= name=> val=>
(
  {
    type: types.ABOUT_SET_CHILDREN_+name,
    val: val
  }
)
