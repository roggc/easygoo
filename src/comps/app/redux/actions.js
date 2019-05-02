__devMode__&& console.log('src/comps/app/redux/actions')

import * as types from './types'

export const appSetShow= name=> val=>
(
  {
    type: types.APP_SET_SHOW_+name,
    val: val
  }
)

export const appSetChildren= name=> val=>
(
  {
    type: types.APP_SET_CHILDREN_+name,
    val: val
  }
)

export const appSetChildren0= name=> val=>
(
  {
    type: types.APP_SET_CHILDREN0_+name,
    val: val
  }
)
