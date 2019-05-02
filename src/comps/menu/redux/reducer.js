__devMode__&& console.log('src/comps/menu/redux/reducer')

import * as types from './types'
import {menuSetClickFirst} from './actions'

export default name=> (val=
  {
    show: true,
    children: ['item 1'],
    route: false
  }, act)=>
  {
    switch (act.type)
    {
      case types.MENU_SET_CHILDREN_+name:
        val=
        {
          ...val,
          children: act.val
        }
        return val
      case types.MENU_SET_ITEM_+name:
        val=
        {
          ...val,
          item: act.val,
          clicked: act.clicked
        }
        return val
      case types.MENU_SET_ROUTE_+name:
        val=
        {
          ...val,
          route: act.val
        }
        return val
      case types.MENU_SET_NAME_+name:
        val=
        {
          ...val,
          name: name
        }
        return val
      default:
        return val
    }
  }
