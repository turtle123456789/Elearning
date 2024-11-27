import React from 'react'
import { useTranslation } from 'react-i18next'

export const SearchComponent = () => {
    const {t} = useTranslation()

  return (
    <div className='flex items-center h-10'>
        <input type="text" className='h-10 px-4 border border-first focus:border-first focus:ring-0' placeholder={t("Nhập coupon")}/>
        <button className='px-3 bg-black font-bold text-white h-full w-full text-nowrap'>{t("Áp dụng")}</button>
    </div>
  )
}
