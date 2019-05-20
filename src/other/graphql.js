__devMode__&& console.log('src/other/graphql')

import {GraphQLClient} from 'graphql-request'

export default new GraphQLClient
(
  __backend__
  ,{
    credentials: 'include'
  }
)
