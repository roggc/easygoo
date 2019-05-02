__devMode&& console.log('src/entries/server')

import express from 'express'
import {render, __devMode} from '../../out/server/ssr.bundle'

const app = express()
const port = process.env.PORT || 3000

app.use('/public',express.static('out/client/public'))
app.use(render)
app.listen(port)

console.log(`listening on localhost:${port} ...`)
