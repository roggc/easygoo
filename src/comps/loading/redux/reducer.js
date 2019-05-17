__devMode__&& console.log('src/comps/loading/redux/reducer')

import * as types from './types'

export default name=>
(
  val=
  {
    show:false
  },act
)=>
{
  switch (act.type) {
    case types.LOADING_SET_SHOW_+name:
      val=
      {
        ...val,
        show:act.val
      }
      return val
    default:
      return val
  }
}
