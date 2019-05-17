__devMode__&& console.log('src/comps/loading/render/loading')

import React from 'react'
import reducer from '../redux/reducer'
import withState from '../../../hocs/state'
import store from '../../../redux/store'
import {loadingSetShow} from '../redux/actions'
import style from '../style/loading'

const init=name=>init=>
{
  init.show&& store.dispatch(loadingSetShow(name)(init.show))
}

const inst=name=>state=>
(
  state.foo.show&&
  <div className={style.spinner}>
    <i className="fas fa-spinner fa-spin"></i>
  </div>
)

export default withState(init)(inst)(reducer)
