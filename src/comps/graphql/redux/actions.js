__devMode__&& console.log('src/comps/graphql/redux/actions')

import * as types from './types'
import {request} from 'graphql-request'

const graphqlReset= name=>()=>
(
  {
    type:types.GRAPHQL_RESET_+name
  }
)

export const graphqlSetShow= name=> val=>dispatch=>
{
  dispatch
  (
    {
      type: types.GRAPHQL_SET_SHOW_+name,
      val: val
    }
  )
  if (!val) dispatch(graphqlReset(name)())
}


const graphqlSet= name=> val=>
(
  {
    type: types.GRAPHQL_SET_+name,
    val: val
  }
)

const graphqlFetching= name=> ()=>
(
  {
    type: types.GRAPHQL_FETCHING_+name
  }
)

export const graphqlFetch= name=> ()=> dispatch=>
{
  dispatch(graphqlFetching(name)())
  request
  (
    'https://graphql.anilist.co',
    `
      query {
        Page {
          media(isAdult: false, sort: POPULARITY_DESC) {
            id
            title {
              romaji
              english
            }
            coverImage {
              large
            }
          }
        }
      }
    `
  ).then(data=> dispatch(graphqlSet(name)(data)))
}
