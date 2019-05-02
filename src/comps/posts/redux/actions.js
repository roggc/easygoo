__devMode__&& console.log('src/comps/posts/redux/actions')

import * as types from './types'
import store from '../../../redux/store'

const postsSet= name=>val=>
(
  {
    type: types.POSTS_SET_+name,
    val: val
  }
)

export const postsReset= name=>()=>
(
  {
    type: types.POSTS_RESET_+name
  }
)

export const postsFetch= name=> ()=> (dispatch)=>
{
  const data=
  {
    name: 'john',
    posts:
    [
      'hey, how are you',
      'this is another post'
    ]
  }
  setTimeout(()=>dispatch(postsSet(name)(data)), store.getState().comps[name].time)
}

export const postsSetTime= name=> val=>
(
  {
    type: types.POSTS_SET_TIME_+name,
    val: val
  }
)

export const postsSetShow= name=> val=>
(
  {
    type: types.POSTS_SET_SHOW_+name,
    val: val
  }
)
