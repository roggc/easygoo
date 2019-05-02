__devMode__&& console.log('src/hooks/useClickOutside')

import {useEffect} from 'react'

export const useClickOutside= (onOuterClick, innerRef)=>
  useEffect
  (
    () =>
    {
      const handleClick= (e)=> !innerRef.current.contains(e.target) && onOuterClick(e)

      innerRef.current&& document.addEventListener("click", handleClick)

      // unmount previous first in case input have changed
      return () => document.removeEventListener("click", handleClick)
    },
    [onOuterClick, innerRef] // invoke again, if inputs have changed
  )
