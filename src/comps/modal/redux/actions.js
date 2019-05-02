__devMode__&& console.log('src/comps/modal/redux/actions')

import * as types from './types'

export const modalSetShow= name=> (val)=>
(
  {
    type: types.MODAL_SET_SHOW_+name,
    val: val
  }
)

export const modalToggleShow= name=> ()=>
(
  {
    type: types.MODAL_TOGGLE_SHOW_+name
  }
)

export const modalSetStyle= name=> (val)=>
(
  {
    type: types.MODAL_SET_STYLE_+name,
    val: val
  }
)

export const modalSetChildren= name=> (val)=>
(
  {
    type: types.MODAL_SET_CHILDREN_+name,
    val: val
  }
)
