__devMode__&& console.log('src/hocs/state')

import React from 'react'
import {connect} from 'react-redux'
import store from '../redux/store'
import addReducer from '../redux/reducer'

const withState= (instance)=> (reducer)=> ({name, ...props})=>
{
  store.replaceReducer(addReducer(reducer(name), name))

  const mapStateToProps= (state)=>
  (
    {
      foo: state.comps[name]
    }
  )

  return React.createElement(connect(mapStateToProps)(instance(name)(props)))
}

const withInstance= pre=>inst=>name=>init=>
{
  pre&& pre(name)(init)
  return inst(name)
}

export default init=>inst=>reducer=> withState(withInstance(init)(inst))(reducer)
