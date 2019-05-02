__devMode__&& console.log('src/redux/extra/start/actions')

import {menuSetItem} from '../../../comps/menu/redux/actions'
import store from '../../store'

const item = window.__item__
delete window.__item__

export const start= ()=>(dispatch)=>
{
  const state= store.getState()

  dispatch({type: 'START'})

  Object.keys(state.comps).forEach
  (
    key=>
    {
      const comp = state.comps[key]
      comp.route&& comp.name&& dispatch(menuSetItem(comp.name)(item)(false))
    }
  )
}
