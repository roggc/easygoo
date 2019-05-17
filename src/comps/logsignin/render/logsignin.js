__devMode__&& console.log('src/comps/logsignin/render/logsignin')

import React,{useState} from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/logsignin'
import store from '../../../redux/store'
import {logsigninSetListeners,logsigninFetch} from '../redux/actions'

const init= name=>init=>
{
  init.listeners&& store.dispatch(logsigninSetListeners(name)(init.listeners))
}

const inst= name=> state=>
{
  const [input, setInput] = useState({email:'',psswrd:''})
  state.foo.listeners&& state.foo.listeners.forEach(listener=>state.dispatch(listener(state.foo.data)))
  const enterClick=()=>
  {
    !state.foo.fetching&& !state.foo.fetched&& state.dispatch(logsigninFetch(name)(input))
  }
  const inputChange=(e)=> 
  {
    setInput
    (
      {
        ...input,
        [e.target.name]:e.target.value
      }
    )
  }
  const el=
  (
    state.foo.show&& !state.foo.fetched&&
    <div className={style.fade}>
      <div className={style.logsignin}>
        <div className={style.wrapper}>
          <div className={style.item}><div>email:</div></div>
          <div className={style.item}><input name='email' type='text' className={style.input} onChange={inputChange}/></div>
        </div>
      </div>
      <div className={style.logsignin}>
        <div className={`${style.wrapper} ${style.last}`}>
          <div className={style.item}><div>password:</div></div>
          <div className={style.item}><input name='psswrd' type='password' className={style.input} onChange={inputChange}/></div>
        </div>
      </div>
      <div className={style.logsigninwrapper}>
        <div className={`${style.logsignin} ${style.last} ${style.logsignin2}`}>
          <div className={`${style.wrapper} ${style.last}`}>
            <div className={style.item}><div><button onClick={enterClick} className={style.button}>enter</button></div></div>
          </div>
        </div>
      </div>
    </div>
  )
  return el
}

export default withState(init)(inst)(reducer)
