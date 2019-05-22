__devMode__&& console.log('src/entries/client')

import {hydrate} from 'react-dom'
import store from '../redux/store'
import {start} from '../redux/extra/start/actions'
import {menuSetItem} from '../comps/menu/redux/actions'
import 'src/html/android-chrome-192x192'
import 'src/html/android-chrome-512x512'
import 'src/html/apple-touch-icon'
import 'src/html/favicon-16x16'
import 'src/html/favicon-32x32'
import 'src/html/favicon'
import 'src/html/site'
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
