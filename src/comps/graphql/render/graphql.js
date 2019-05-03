__devMode__&& console.log('src/comps/graphql/render/graphql')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/graphql'

const inst= name=> state=>
(
  state.foo.show&&
  <div className={style.graphql}>
    {
      state.foo.pending&&
      <div className={style.spinner}>
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    }
    {
      state.foo.pending||
      <div className={style.graphql}>
        {
          state.foo.data.Page.media.map
          (
            item=>
            <div key={item.id} className={style.wrapper}>
              <img src={item.coverImage.large}/>
            </div>
          )
        }
      </div>
    }
  </div>
)

export default withState()(inst)(reducer)
