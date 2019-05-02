__devMode__&& console.log('src/comps/footer/render/footer')

import React from 'react'
import withStatus from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/footer'
import store from '../../../redux/store'
import {footerSetChildren} from '../redux/actions'

const init= name=> init=>
{
  init.children&& store.dispatch(footerSetChildren(name)(init.children))
}

const inst= name=> state=>
(
  <div className={style.footer}>
    {state.foo.children}
  </div>
)

export default withStatus(init)(inst)(reducer)
