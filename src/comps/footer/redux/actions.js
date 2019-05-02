__devMode__&& console.log('src/comps/footer/redux/actions')

import * as types from './types'

export const footerSetChildren= name=> val=>
(
  {
    type: types.FOOTER_SET_CHILDREN_+name,
    val: val
  }
)
