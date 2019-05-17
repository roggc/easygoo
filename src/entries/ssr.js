__devMode__&& console.log('src/entries/ssr')

import fs from 'fs'
import path from 'path'
import html from '../ssr/ssr'
import store from '../redux/store'

export const render= (req, res)=>
{
  let item=0
  const route= req.path.slice(1)
  if(route.length>0)
  {
    const state= store.getState()
    Object.keys(state.comps).forEach
    (
      key=>
      {
        const comp = state.comps[key]
        comp.route&& comp.name&& comp.children.items.some
        (
          (el,i)=>
          el.text===route?(item=i)||true:false
        )
      }
    )
  }

  fs.readFile(path.resolve('./out/client/index.html'), 'utf8', (err, data) =>
    {
      return res.send
      (
        data.replace
        (
          '$html',
          html
        ).replace
        (
          '$item',
          item
        ).replace
        (
          '$clientId',
          req.connection.remoteAddress
        )
      )
    }
  )
}

export const __devMode=__devMode__
