__devMode__&& console.log('src/redux/middleware/db')

import {request} from 'graphql-request'

export default store => next => act =>
{
  next(act)

  const state= store.getState()

  Object.keys(state.comps).forEach
  (
    key=>
    {
      const comp = state.comps[key]
      comp.keepActs&& comp.keepActs.forEach
      (
        type=>
        {
          if(act.type===type)
          {
            request
            (
              __backend__,
              `
              mutation
              {
                pushAct(act:${JSON.stringify(JSON.stringify(act))},type:"${type}")
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
              data=>
              {
                if(data.pushAct.error)
                {
                  console.log(data.pushAct.error.message)
                }
              }
            )
          }
        }
      )
    }
  )
}
