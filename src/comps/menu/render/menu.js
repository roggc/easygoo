__devMode__&& console.log('src/comps/menu/render/menu')

import React, {useRef} from 'react'
import withStatus from '../../../hocs/state'
import reducer from '../redux/reducer'
import {menuSetChildren, menuSetRoute, menuSetItem} from '../redux/actions'
import store from '../../../redux/store'
import Modal from '../../modal/render/modal'
import style from '../style/menu'
import {modalToggleShow, modalSetShow} from '../../modal/redux/actions'
import {useClickOutside} from '../../../hooks/useClickOutside';

const init= name=> init=>
{
  init.children&& store.dispatch(menuSetChildren(name)(init.children))
  init.route&& store.dispatch(menuSetRoute(name)(init.route))
}

const inst= name=> state=>
{
  const innerRef = useRef(null)

  useClickOutside
  (
    (e) => state.dispatch(modalSetShow('modal1')(false)),
    innerRef
  )

  const menuToggle= ()=> state.dispatch(modalToggleShow('modal1')())

  const menuClick= key=> clicked=> ()=>
  {
    menuToggle()
    state.foo.item!== key&& state.dispatch(menuSetItem(name)(key)(clicked))
  }

  const clicked= e=> e.stopPropagation()

  const el=
  (
    <div className={style.menu} ref={innerRef} onClick={menuToggle}>
      <div>
        <i className="fas fa-align-justify"></i>
      </div>
      <div className={style.wrapper} onClick={clicked}>
        <Modal name='modal1' style={{top: '6px', right: '74px'}}>
          {
            state.foo.children.items.map
            (
              (item, key)=>
              <div key={key} className={style.key} onClick={menuClick(key)(true)}>
                <i className="fas fa-angle-right"></i><div>{item.text}</div>
              </div>
            )
          }
        </Modal>
      </div>
    </div>
  )

  return el
}

export default withStatus(init)(inst)(reducer)
