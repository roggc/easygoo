__devMode__&& console.log('src/comps/home/redux/actions')

import * as types from './types'

export const homeSetShow= name=> val=>
(
  {
    type: types.HOME_SET_SHOW_+name,
    val: val
  }
)

export const homeSetChildren= name=> val=>
(
  {
    type: types.HOME_SET_CHILDREN_+name,
    val: val
  }
)
