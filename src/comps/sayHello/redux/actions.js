__devMode__&& console.log('src/comps/sayHello/redux/actions')

import * as types from './types'

export const sayHelloSet= name=> greeting=>
(
  {
    type: types.SAYHELLO_SET_+name,
    val: greeting
  }
)

export const sayHelloHide= name=>()=>
(
  {
    type: types.SAYHELLO_HIDE_+name
  }
)

export const sayHelloSetShow= name=> val=>
(
  {
    type: types.SAYHELLO_SET_SHOW_+name,
    val: val
  }
)
