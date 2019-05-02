__devMode__&& console.log('src/comps/posts/redux/reducer')

import * as types from './types'
import {postsFetch, postsReset} from './actions'

export default name=> (val=
  {
    show: false,
    pending: true,
    data: {},
    fetch: postsFetch(name),
    reset: postsReset(name),
    time: 3000
  }, act) =>
{
  switch(act.type)
  {
    case types.POSTS_SET_+name:
      val=
      {
        ...val,
        pending: false,
        data: act.val
      }
      return val
    case types.POSTS_RESET_+name:
      val=
      {
        ...val,
        pending: true,
        data: {}
      }
      return val
    case types.POSTS_SET_TIME_+name:
      val=
      {
        ...val,
        time: act.val
      }
      return val
    case types.POSTS_SET_SHOW_+name:
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
