__devMode__&& console.log('src/comps/app/render/app')

import React from 'react'
import style from '../style/app'
import reducer from '../redux/reducer'
import {appSetShow, appSetChildren, appSetChildren0} from '../redux/actions'
import store from '../../../redux/store'
import withState from '../../../hocs/state'

const init = name=> init=>
{
  init.show&& store.dispatch(appSetShow(name)(init.show))
  init.children&& store.dispatch(appSetChildren(name)(init.children))
  init.children0&& store.dispatch(appSetChildren0(name)(init.children0))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className={style.app}>
    {state.foo.children0}
    <div className={style.clear}/>
    {state.foo.children}
  </div>
)

export default withState(init)(inst)(reducer)
