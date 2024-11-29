import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonComponent = ({listCourses,AddCart,link,address,underline,text,img,icon,textColor,colorBoder,colorBg,bold,padding,hover,height,fullScreen,width,colorHover,notHover,cursor,rounder}) => {
  return (
      <button onClick={listCourses ? () => AddCart(listCourses) : null}    className={`${fullScreen?`w-full`:""} ${colorBg?`bg-${colorBg}`:""} ${cursor?cursor:""} ${width?width:""} flex items-center justify-center border ${bold?`font-bold`:""}  ${rounder?`rounded-full`:""} ${colorBoder?`border-${colorBoder}`:"border-first"} ${textColor?`text-${textColor}`:"text-black"} ${padding?`px-${padding}`:"px-4"} ${height?height:"h-10"} ${notHover?``:colorHover?`hover:bg-${colorHover}`:hover?"hover:bg-[#1739531f]":"hover:bg-[#3e4143]"} `}>
          {icon}
          {img && <img className='max-w-6 ' src={img} alt="" />}
          <span className='tablet:text-base'>
            {text?text:""}
          </span>
          {link && <Link className={`${textColor?`text-${textColor}`:""} ${underline?"":"underline"} decoration-1 underline-offset-4 font-bold text-eighth ${notHover?"":"hover:text-sixth"}`} to = {address?address:""}> {link}</Link>}
      </button>
  )
}   
