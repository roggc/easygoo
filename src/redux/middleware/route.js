__devMode__&& console.log('src/redux/middleware/route')

import * as types from '../../comps/menu/redux/types'

export default store => next => act =>
{
  next(act)

  const state= store.getState()

  Object.keys(state.comps).forEach
  (
    key=>
    {
      const comp = state.comps[key]
      comp.route&& act.type=== types.MENU_SET_ITEM_+comp.name&&
      (
        comp.clicked?history.pushState(comp.item,null,comp.children.items[comp.item].text):
        comp.clicked===undefined?true:history.replaceState(comp.item,null,comp.children.items[comp.item].text)
      )
    }
  )
}
