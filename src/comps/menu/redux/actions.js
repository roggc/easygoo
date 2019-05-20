__devMode__&& console.log('src/comps/menu/redux/actions')

import * as types from './types'
import store from '../../../redux/store'

export const menuSetChildren= name=> val=>
(
  {
    type: types.MENU_SET_CHILDREN_+name,
    val: val
  }
)

export const menuSetItemByText=name=>val=>clicked=>dispatch=>
{
  
}

export const menuSetItem= name=> val=> clicked=> dispatch=>
{
  const state= store.getState()
  //we turn off all the content
  state.comps[name].children.items.forEach
  (
    item=>
    {
      dispatch(item.func(item.name)(false))
    }
  )
  //we turn on selected
  const item= state.comps[name].children.items[val]
  dispatch(item.func(item.name)(true))
  dispatch
  (
    {
      type: types.MENU_SET_ITEM_+name,
      val: val,
      clicked: clicked
    }
  )
}

export const menuSetRoute= name=> val=> dispatch=>
{
  dispatch
  (
    {
      type: types.MENU_SET_ROUTE_+name,
      val: val
    }
  )
  dispatch
  (
    {
      type: types.MENU_SET_NAME_+name
    }
  )
}
