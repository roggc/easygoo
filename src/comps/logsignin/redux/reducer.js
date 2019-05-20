__devMode__&& console.log('src/comps/logsignin/redux/reducer')

import * as types from './types'

export default name=> (val=
  {
    show:false,
    fetched:false,
    fetching:false,
    data:{},
    listeners:undefined,
    //keepActs:[types.LOGSIGNIN_SET_+name]
  },act)=>
  {
    switch (act.type) {
      case types.LOGSIGNIN_SET_SHOW_+name:
        val=
        {
          ...val,
          show: act.val
        }
        return val
      case types.LOGSIGNIN_SET_+name:
        val=
        {
          ...val,
          data: act.val,
          fetched:true,
          fetching:false
        }
        return val
      case types.LOGSIGNIN_OUT_+name:
        val=
        {
          ...val,
          data: {},
          fetched:false
        }
        return val
      case types.LOGSIGNIN_FETCHING_+name:
        val=
        {
          ...val,
          fetching: true
        }
        return val
      case types.LOGSIGNIN_SET_LISTENERS_+name:
        val=
        {
          ...val,
          listeners: act.val
        }
        return val
      default:
        return val
    }
  }
