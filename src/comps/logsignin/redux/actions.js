__devMode__&& console.log('src/comps/logsignin/redux/actions')

import * as types from './types'
import {graphqlfetch} from 'src/other/graphql'

// const logsigninReset= name=>()=>
// (
//   {
//     type:types.LOGSIGNIN_RESET_+name
//   }
// )

export const logsigninSetShow= name=> val=>dispatch=>
{
  dispatch
  (
    {
      type: types.LOGSIGNIN_SET_SHOW_+name,
      val: val
    }
  )
}

const logsigninSet= name=> val=>
(
  {
    type: types.LOGSIGNIN_SET_+name,
    val: val
  }
)

export const logsigninOut= name=> ()=>
(
  {
    type: types.LOGSIGNIN_OUT_+name
  }
)


const logsigninFetching= name=> ()=>
(
  {
    type: types.LOGSIGNIN_FETCHING_+name
  }
)

export const logsigninFetch= name=> data=> dispatch=>
{
  dispatch(logsigninFetching(name)())
  graphqlfetch
  (
    `
      mutation
      {
        login(email:"${data.email}",psswrd:"${data.psswrd}")
        {
          res
          {
            name
            email
            id
          }
        }
      }
    `
  )(data=> dispatch(logsigninSet(name)(data.login.res)))
}

export const logsigninSetListeners= name=>val=>
(
  {
    type:types.LOGSIGNIN_SET_LISTENERS_+name,
    val:val
  }
)
