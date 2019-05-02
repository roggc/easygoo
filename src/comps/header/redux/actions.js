__devMode__&& console.log('src/comps/header/redux/actions')

import * as types from './types'

export const headerSetTitle= name=> val=>
(
  {
    type: types.HEADER_SET_TITLE_+name,
    val: val
  }
)

export const headerSetChildren= name=> val=>
(
  {
    type: types.HEADER_SET_CHILDREN_+name,
    val: val
  }
)
