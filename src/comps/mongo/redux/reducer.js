__devMode__&& console.log('src/comps/mongo/redux/reducer')

import * as types from './types'
import {mongoFetch} from './actions'

export default name=> (val=
  {
    show:false,
    pending:true,
    fetching:false,
    data:{},
    fetch:mongoFetch(name)
  },act)=>
  {
    switch (act.type) {
      case types.MONGO_SET_SHOW_+name:
        val=
        {
          ...val,
          show: act.val
        }
        return val
      case types.MONGO_SET_+name:
        val=
        {
          ...val,
          data: act.val,
          pending:false,
          fetching:false
        }
        return val
      case types.MONGO_FETCHING_+name:
        val=
        {
          ...val,
          fetching: true
        }
        return val
      case types.MONGO_RESET_+name:
        val=
        {
          ...val,
          pending:true,
          data:{},
          fetching: false
        }
        return val
      default:
        return val
    }
  }
