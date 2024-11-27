import React, { useEffect, useState } from 'react'
import { SubMenu2 } from './SubMenu2'
import { SubMenu1 } from './SubMenu1'

const SubMenu = ({isOpen,setIsOpen,categories}) => {
    const [isOpen1,setIsOpen1] = useState(true)
    const [isOpen2,setIsOpen2] = useState(false)
    const [isClickSwap,setIsClickSwap] = useState(false)
    useEffect(()=>{
        setIsClickSwap(true);
        setIsOpen1(true);
        setIsOpen2(false);
    },[isOpen])
    const swapSubmenu = (id) => {
        const temp = isOpen1;
        setIsOpen1(isOpen2);
        setIsOpen2(temp);
    }
    const closeMenu = () =>{
        setIsOpen(false);
        setIsClickSwap(false);
    }
  return (
    <div className={`fixed z-20 bg-[#2d2f31cc] top-0 h-full left-0 right-0 ${isOpen?' opacity-100 translate-x-0 duration-0':' opacity-0 translate-x-[-100%] duration-500'} transition-all  ease-in-out`}>
        <div className={`h-full  flex ${isOpen?'translate-x-0':'translate-x-[-100%]'} transition-all duration-500 ease-in-out`}>
            <div className='max-w-[280px] relative overflow-hidden'>
                <SubMenu1 categories={categories?.level1} isOpen1={isOpen1} isClickSwap={isClickSwap} swapSubmenu={swapSubmenu}/>
                <SubMenu2 categories={categories?.level2} isOpen2={isOpen2} swapSubmenu={swapSubmenu}/>
            </div>
            <button className='bg-white rounded-full w-12 h-12 m-4 hover:bg-[#e0e0e0]' onClick={closeMenu}>
                X
            </button>
        </div>
    </div>
  )
}

export default SubMenu