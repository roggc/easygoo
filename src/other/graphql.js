__devMode__&& console.log('src/other/graphql')

import {GraphQLClient} from 'graphql-request'

export default new GraphQLClient
(
  __backend__
  ,{
    credentials: 'include',
    mode:'cors'
  }
)

import axios from 'axios'

class Axios
{
  constructor({baseURL})
  {
    this.axios = axios.create
    ({
      baseURL,
      withCredentials:true
    })
  }

  query(query)
  {
    return cb=>
    {
      return this.axios.post
      ('',
      {
        query
      })
      .then(response=>cb(response.data.data))
    }
  }
}

export const graphql= new Axios({baseURL:__backend__})
