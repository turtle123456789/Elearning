import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

export const BoxCartCourse = () => {
    const {t} = useTranslation();

  return (
    <div className={`shadow-lg p-4 bg-white text-center`}>
       <p className='mb-4 text-base text-third'>{t("Giỏ hàng của bạn đang trống.")}</p>
       <Link className='text-eighth font-bold'>{t("Tiếp tục mua sắm")}</Link>
    </div>
  )
}
