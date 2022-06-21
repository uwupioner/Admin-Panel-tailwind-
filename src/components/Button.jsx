import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context/ContextProvider';

const Button = ( {bgColor, color, size, text, borderRadius, } ) => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color: color, borderRadius}}
      className={"text-${size} p-3 hover:drop-shadow-xl"}
      color={currentColor}
      >
        {text}
    </button>
  )
}

export default Button