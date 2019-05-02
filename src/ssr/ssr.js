__devMode__&& console.log('src/ssr/ssr')

import {renderToString} from 'react-dom/server'
import render from '../render/render'

export default renderToString(render)
