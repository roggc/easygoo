__devMode__&& console.log('src/comps/graphql/redux/reducer')

import * as types from './types'
import {graphqlFetch} from './actions'

export default name=> (val=
  {
    show:false,
    pending:true,
    fetching:false,
    data:{},
    fetch:graphqlFetch(name)
  },act)=>
  {
    switch (act.type) {
      case types.GRAPHQL_SET_SHOW_+name:
        val=
        {
          ...val,
          show: act.val
        }
        return val
      case types.GRAPHQL_SET_+name:
        val=
        {
          ...val,
          data: act.val,
          pending:false,
          fetching:false
        }
        return val
      case types.GRAPHQL_FETCHING_+name:
        val=
        {
          ...val,
          fetching: true
        }
        return val
      case types.GRAPHQL_RESET_+name:
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
