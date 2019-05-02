__devMode__&& console.log('src/comps/say/redux/reducer')

import * as types from './types'

export default (name)=>(val=
{
  show: false,
  val: '...'
}, act)=>
{
  switch (act.type) {
    case types.SAY_SET_+name:
      val=
      {
        ...val,
        val: act.val
      }
      return val
    case types.SAY_HIDE_+name:
      val=
      {
        ...val,
        show: false
      }
      return val
    case types.SAY_SET_SHOW_+name:
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
