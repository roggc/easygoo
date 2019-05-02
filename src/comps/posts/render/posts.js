__devMode__&& console.log('src/comps/posts/render/posts')

import React from 'react'
import store from '../../../redux/store'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import {postsSetTime,postsSetShow} from '../redux/actions'
import style from '../style/posts'

const init= name=> init=>
{
  init.time&& store.dispatch(postsSetTime(name)(init.time))
  init.show&& store.dispatch(postsSetShow(name)(init.show))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className={style.posts}>
    {state.foo.pending|| (()=>
      (
        state.foo.data.name
      ))()} <br/>
    posts <br/>
    {state.foo.pending|| (()=>
    (
      <ul>
      {state.foo.data.posts.map((post, key)=>
        (
          <li key={key}>{post}</li>
        ))}
      </ul>
    ))()}
  </div>
)

export default withState(init)(inst)(reducer)
