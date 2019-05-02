__devMode__&& console.log('src/comps/sayHello/redux/reducer')

import * as types from './types'

export default (name)=>(val=
{
  show: false,
  message: 'hello'
}, act)=>
{
  switch (act.type) {
    case types.SAYHELLO_SET_+name:
      val=
      {
        ...val,
        message: act.val
      }
      return val
    case types.SAYHELLO_HIDE_+name:
      val=
      {
        ...val,
        show: false
      }
      return val
    case types.SAYHELLO_SET_SHOW_+name:
      val=
      {
        ...val,
        show: act.val
      }
      return val
    default:
      return val
  }
}
