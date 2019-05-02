__devMode__&& console.log('src/entries/client')

import {hydrate} from 'react-dom'
import store from '../redux/store'
import {start} from '../redux/extra/start/actions'
import {menuSetItem} from '../comps/menu/redux/actions'
import '../html/favicon'
import render from '../render/render'

hydrate
(
  render,
  document.getElementById('root')
)

store.dispatch(start())

window.addEventListener
(
  'popstate', e=>
  {
    const state= store.getState()

    Object.keys(state.comps).forEach
    (
      key=>
      {
        const comp = state.comps[key]
        comp.route&& comp.name&& store.dispatch(menuSetItem(comp.name)(e.state)())
      }
    )
  }
)
