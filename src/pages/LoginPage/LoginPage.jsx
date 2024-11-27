import React from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const {t} = useTranslation();
  return (
    <div className='max-w-[1292px] mx-auto'>
      <div className='py-16 flex justify-between items-center'>
        <div className='max-w-[638px]'>
          <img src="assets/imgs/bg-login.webp"  alt="" />
        </div>
        <div className='max-w-[420px]'>
          <h1 className='font-sans'>{t("Đăng nhập vào tài khoản Udemy của bạn")}</h1>
          <div class="relative z-0 w-full mb-5 group">
              <input type="email" class="block p-4 pt-6  w-full bg-transparent border-[1px] appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label for="floating_email" class="peer-focus:font-bold absolute font-bold duration-300 transform -translate-y-6 scale-75 top-5 left-4 -z-10 origin-[0] peer-focus:start-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{t("Email address")}</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
              <input type="password" class="block p-4 pt-6  w-full bg-transparent border-[1px] appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label for="floating_password" class="peer-focus:font-bold absolute font-bold duration-300 transform -translate-y-6 scale-75 top-5 left-4 -z-10 origin-[0] peer-focus:start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{t("Mật khẩu")}</label>
          </div>
          <div>
          <ButtonComponent padding={3} text={t('Đăng nhập')} hover={true} bold={true} fullScreen={true} height={"h-12"}/>
          </div>
          <div className='text-base text-center mt-6 mb-4'>
            <span>{t("Hoặc")} </span>
            <Link className='text-eighth font-bold underline'>{t("Quên mật khẩu")}</Link>
          </div>
          <div className='relative text-center'>
            <hr className='absolute w-full top-1/2 -z-10'/>
            <span className='bg-white py-1 px-2'>{t("Các tùy chọn đăng nhập khác")}</span>
          </div>
          <div className="flex justify-center gap-4 mt-6 mb-16">
            <ButtonComponent padding={"3"} height={"h-12"} img={"assets/icons/google.png"} hover={true}/>
            <ButtonComponent padding={"3"} height={"h-12"} img={"assets/icons/facebook.png"} hover={true}/>
            <ButtonComponent padding={"3"} height={"h-12"} img={"assets/icons/apple-logo.png"} hover={true}/>
          </div>
          <div>
            {/* <div className='border-b-[1px] border-[#d1d7dc]'>
              <ButtonComponent link={t("Đăng nhập vào tài khoản khác")} notHover={true} colorBg={"third"} colorBoder={"white"} height={"h-12"} fullScreen={true}/>
            </div> */}
            <div className='border-b-[1px] border-[#d1d7dc]'>
              <ButtonComponent link={t("Đăng ký")} text={t("Bạn không có tài khoản?")} notHover={true} colorBg={"third"} colorBoder={"white"} height={"h-12"} fullScreen={true}/>
            </div>
            <div className='border-b-[1px] border-[#d1d7dc]'>
              <ButtonComponent link={t("Đăng nhập bằng tên tổ chức của bạn")} notHover={true} colorBg={"third"} colorBoder={"white"} height={"h-12"} fullScreen={true}/>
            </div>
          </div>
        </div>

      </div>  
    </div>
  ) 
}

export default LoginPage