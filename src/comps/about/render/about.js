__devMode__&& console.log('src/comps/about/render/about')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import store from '../../../redux/store'
import {aboutSetShow, aboutSetChildren} from '../redux/actions'
import style from '../style/about'

const init= name=> init=>
{
  init.show&& store.dispatch(aboutSetShow(name)(init.show))
  init.children&& store.dispatch(aboutSetChildren(name)(init.children))
}

const inst= name=> state=>
(
  state.foo.show&&
  <div className={`${style.about} ${style.fade}`}>
    <div className={style.bounce}>
      {state.foo.children}
    </div>
  </div>
)

export default withState(init)(inst)(reducer)
