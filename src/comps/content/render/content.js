__devMode__&& console.log('src/comps/content/render/content')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/content'
import store from '../../../redux/store'
import {contentSetChildren} from '../redux/actions'
import {contentLogout,contentSetListeners} from '../redux/actions'

const init= name=> init=>
{
  init.children&& store.dispatch(contentSetChildren(name)(init.children))
  init.listeners&& store.dispatch(contentSetListeners(name)(init.listeners))
}

const inst= name=> state=>
{
  const logout=()=>
  {
    state.dispatch(contentLogout(name)(state.foo.listeners))
  }
  const el=
  state.foo.show&&
  <div>
    <div className={style.wrapper}>{state.foo.email}</div>
    {state.foo.email&& <div className={style.logout} onClick={logout}>logout</div>}
    <div className={`${style.content} ${style.flexColumn}`}>
        <div className={style.flexRow}>
          {state.foo.children}
        </div>
    </div>
    {
        // <div>
        //   <Loading name='loading-content' show={state.foo.loading.show}/>
        //   {
        //     !state.foo.loading.show
        //   }
        //
        // </div>
      }
  </div>

  return el
}


export default withState(init)(inst)(reducer)
