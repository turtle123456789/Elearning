import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RatingComponent } from '../RatingComponent/RatingComponent';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import { t } from 'i18next';



export const CardCourse = ({listCourses}) => {
    console.log('data', listCourses)
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className='relative grid grid-rows-1 gap-2 justify-items-center p-2 border mx-1' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className='mb-1 w-full'>
        <img className='aspect-first' src={listCourses?.image} alt="" />
      </div>
      <div className='w-full'>
        <h3 className='mb-1'>
          <Link className='crop-text2'>{listCourses?.title}</Link>
        </h3>
        <span className='text-third text-xs mb-1'>TS. Dang Xuan Tho</span>
        <RatingComponent rank={listCourses?.rank}/>
        <h3 className='mb-1'>₫&nbsp;899.000</h3>
        <div className='mt-2 mb-1 '>
          <span className='bg-[#eceb98] text-xs font-bold px-2 py-1'>Bán chạy nhất</span>
          <div className='mt-2 justify-center flex'>
            <ButtonComponent padding={3} text={t('Thêm vào giỏ hàng')} hover={true} bold={true}/>

          </div>
        </div>
      </div>
    </div>
  )
}
