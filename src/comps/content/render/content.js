__devMode__&& console.log('src/comps/content/render/content')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/content'
import store from '../../../redux/store'
import {contentSetChildren} from '../redux/actions'

const init= name=> init=>
{
  init.children&& store.dispatch(contentSetChildren(name)(init.children))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className= {`${style.content} ${style.flexColumn}`}>
    <div className={style.flexRow}>
      {state.foo.children}
    </div>
  </div>
)

export default withState(init)(inst)(reducer)
