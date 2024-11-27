import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'
import { useTranslation } from 'react-i18next'
export const SubMenu1 = ({isOpen1,swapSubmenu,isClickSwap,categories}) => {
    const {t} = useTranslation();
    const filterCategories = categories.filter((category)=>category.level === 1)
    const earthBlack = (
        <svg width="24px" height="24px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 16.5H19.5M5.5 8.5H19.5M4.5 12.5H20.5M12.5 20.5C12.5 20.5 8 18.5 8 12.5C8 6.5 12.5 4.5 12.5 4.5M12.5 4.5C12.5 4.5 17 6.5 17 12.5C17 18.5 12.5 20.5 12.5 20.5M12.5 4.5V20.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" stroke="#121923" stroke-width="1.2"/>
        </svg>
      )
  return (
    <div className={`overflow-auto  w-full  h-full ${isOpen1?"translate-x-[0] ": isClickSwap?"":"translate-x-[-100%]"} duration-500 transition-all ease-in-out`}>
        <div className={`bg-white pb-8 `}>
            <ul className='py-2'>
                <li className='text-base pt-2 px-4'>
                    <Link className='text-eighth'>{t("Đăng nhập")}</Link>
                </li>
                <li className='text-base pt-2 px-4'>
                    <Link className='text-eighth'>{t("Đăng ký")}</Link>
                </li>     
            </ul>
            <h2 className='p-4 pb-0 border-t border-[#d1d7dc] text-third font-bold text-sm'>{t("Phổ biến nhất")}</h2>
            <ul className='py-2'>
                {filterCategories.length>0&&filterCategories?.map((data,index)=>{
                    return(
                        <li key={`submenu1-${index}`} className='text-base pt-2 px-4'>
                        <button className='flex justify-between items-center w-full' key={`subCategories-${index}`} onClick={()=>swapSubmenu(data?.id)}>
                            <div>
                                {data?.name}
                            </div>
                            <svg fill="#2d2f31" height="10px" width="10px" version="1.1" viewBox="0 0 24 24" stroke="#2d2f31">
                                <g>
                                    <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
                                </g>
                            </svg>
                        </button>
                    </li>
                    )
                })}
            </ul>
            <h2 className='p-4 pb-0 border-t border-[#d1d7dc] text-third font-bold text-sm'>Thể loại khác trên Udemy</h2> 
            <ul className='py-2'>
                <li className='text-base pt-2 px-4'>
                    <Link>{t("Study24")}</Link>
                </li>
                <li className='text-base pt-2 px-4'>
                    <Link>{t("Tải ứng dụng")}</Link>
                </li>
                <li className='text-base pt-2 px-4'>
                    <Link>{t("Mời bạn bè")}</Link>
                </li>
                <li className='text-base pt-2 px-4'>
                    <Link>{t("trợ giúp và hỗ trợ")}</Link>
                </li>
            </ul>
            <div className='px-4'>
                <ButtonComponent icon={earthBlack} hover={true} text={t("Tiếng việt")} width={"w-[140px]"}/>
            </div>
        </div>
    </div>
  )
}
