__devMode__&& console.log('src/redux/extra/start/actions')

import {menuSetItem} from '../../../comps/menu/redux/actions'
import {request} from 'graphql-request'
import store from '../../store'

const item = window.__item__
delete window.__item__

export const start= ()=>(dispatch)=>
{
  const state= store.getState()

  dispatch({type: 'START'})

  const setRoute=()=>
  Object.keys(state.comps).forEach
  (
    key=>
    {
      const comp = state.comps[key]
      comp.route&& comp.name&& dispatch(menuSetItem(comp.name)(item)(false))
    }
  )

  request
  (
    __backend__,
    `
      query
      {
        getActs(clientId:"${window.__clientId__}")
        {
          res
          {
            act
          }
          error
          {
            name
            message
          }
        }
      }
    `
  ).then
  (
    data=>
    {
      if(!data.getActs.error)
      {
        request
        (
          __backend__,
          `
            mutation
            {
              clearActs(clientId:"${window.__clientId__}")
              {
                res
                error
                {
                  name
                  message
                }
              }
            }
          `
        ).then
        (
          data2=>
          {
            if(!data2.clearActs.error)
            {
              data.getActs.res.forEach
              (
                act=>
                dispatch(JSON.parse(act.act))
              )
              setRoute()
            }
          }
        )
      }
    }
  )
}
