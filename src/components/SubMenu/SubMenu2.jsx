import React from 'react'
import { Link } from 'react-router-dom'
export const SubMenu2 = ({isOpen2,swapSubmenu,categories}) => {
  return (
    <div className={`overflow-auto absolute top-0 w-full  h-full ${isOpen2?"translate-x-[0]":"translate-x-[100%]"} transition-all duration-500 ease-in-out`}>
        <div className={`w-full  bg-white  pb-8 font-udemy `}>
            <ul>
                <li>
                    <button onClick={swapSubmenu} className='flex p-4 w-full items-center bg-third'>
                        <svg fill="#2d2f31" height="10px" width="10px" version="1.1" viewBox="0 0 24 24" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#2d2f31"
                        >
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                            <g>
                                <g>
                                <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
                                </g>
                            </g>
                        </svg>
                        <p className='ml-4'>Menu</p>
                    </button>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
                <li className='px-4 py-2'>
                    <Link>khoa hocjs</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
