import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'
import { useTranslation } from 'react-i18next';
const FooterComponent = ({setIsOpenModel}) => {
  const { t } = useTranslation();
  const earthWhite = (
    <svg className="mr-1"width="24px" height="24px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier"> <path d="M5.5 16.5H19.5M5.5 8.5H19.5M4.5 12.5H20.5M12.5 20.5C12.5 20.5 8 18.5 8 12.5C8 6.5 12.5 4.5 12.5 4.5M12.5 4.5C12.5 4.5 17 6.5 17 12.5C17 18.5 12.5 20.5 12.5 20.5M12.5 4.5V20.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" stroke="#ffffff" stroke-width="1.2"/> </g>
    </svg>
  )
  return (
    <div className='bg-first text-white pt-6 px-12'>
      <div className='flex justify-between tabletXs:flex-col-reverse'>
        <div className='grid grid-cols-3 w-[768px] tabletXs:block tabletXs:w-full'>
          <ul>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Study24')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Giảng dạy trên Udemy')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Tải ứng dụng')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Giới thiệu')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Hãy liên hệ với chúng tôi')}</Link></li>
          </ul>
          <ul>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Nghề nghiệp')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Blog')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Trợ giúp và Hỗ trợ')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Đơn vị liên kết')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Nhà đầu tư')}</Link></li>
          </ul>
          <ul>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Điều khoản')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Chính sách về quyền riêng tư')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Cài đặt cookie')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Sơ đồ trang web')}</Link></li>
            <li className='py-1'><Link to="/" className='hover:underline'>{t('Tuyến bố về khả năng tiếp cận')}</Link></li>
          </ul>
        </div>
        <div className='tabletXs:py-6' onClick={()=>setIsOpenModel(true)}>
          <ButtonComponent colorBoder="white" icon={earthWhite} textColor={"white"} text={t("Tiếng việt")} width={"w-[140px]"}/>
        </div>
      </div>
      <div className='pt-16 pb-8 flex justify-between items-center tabletXs:block'>
        <div className='max-w-[92px] tabletXs:py-4'>
          <Link to="/"><img src="/assets/logos/logo2.svg" alt="" /></Link>
        </div>
        <p>© 2024 Udemy, Inc.</p>
      </div>
    </div>
  )
}

export default FooterComponent