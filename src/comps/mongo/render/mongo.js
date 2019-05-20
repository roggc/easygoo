__devMode__&& console.log('src/comps/mongo/render/mongo')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/mongo'

const inst= name=> state=>
(
  state.foo.show&&
  <div className={style.mongo}>
    {
      state.foo.pending&&
      <div className={style.spinner}>
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    }
    {
      state.foo.pending||
      <div className={style.wrapper}>
        {
          state.foo.data.users.res&& state.foo.data.users.res.map
          (
            user=>
            <div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.id}</div>
            </div>
          )
        }
        {
          state.foo.data.users.error&&
          (
            <div className={style.wrapper}>
              <div className={style.wrapper}><div>name:</div><div>message:</div><div>function:</div></div>
              <div className={style.wrapper}>
                <div>{state.foo.data.users.error.name}</div>
                <div>{state.foo.data.users.error.message}</div>
                <div>{state.foo.data.users.error.function}</div>
              </div>
            </div>
          )
        }
      </div>
    }
  </div>
)

export default withState()(inst)(reducer)
