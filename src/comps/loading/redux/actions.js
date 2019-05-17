__devMode__&& console.log('src/comps/loading/redux/actions')

import * as types from './types'

export const loadingSetShow=name=>val=>
(
  {
    type:types.LOADING_SET_SHOW_+name,
    val:val
  }
)
