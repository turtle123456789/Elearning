import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'

const DefaultPage = () => {
  const [isOpenMoDel, setIsOpenModel] = useState(false);
  return (
    <div>
      <HeaderComponent isOpenMoDel={isOpenMoDel} setIsOpenModel={setIsOpenModel}/>
      <Outlet/>
      <FooterComponent setIsOpenModel={setIsOpenModel}/>
    </div>
  )
}

export default DefaultPage