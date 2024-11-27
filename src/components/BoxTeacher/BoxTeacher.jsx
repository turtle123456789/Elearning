import React, { useState } from 'react'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from "react-icons/io";
import { ModelPlayVideo } from '../Models/ModelPlayVideo';
import { Link } from 'react-router-dom';
import { SearchComponent } from '../SearchComponent/SearchComponent';
export const BoxTeacher = () => {
    const [openModal, setOpenModal] = useState(false)
    const {t} = useTranslation()
  return (
    <div className='bg-white w-[340px]'>
        <ModelPlayVideo openModal={openModal} setOpenModal={setOpenModal}/>
        <div className='relative'>
            <img src="assets/imgs/img2.jpg" alt="" />
            <div className='absolute top-[32%] w-full flex flex-col items-center gap-3'>
                <button className='bg-first rounded-full ' onClick={() => setOpenModal(true)}>
                    <svg
                        fill="#ffffff"
                        height="64px"
                        width="64px"
                        viewBox="0 0 490.718 490.718"
                        stroke="#ffffff"
                        >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <g>
                            <path d="M245.359,0.359C109.852,0.359,0,110.049,0,245.358s109.852,245,245.359,245s245.359-109.691,245.359-245 S380.866,0.359,245.359,0.359z M176.828,341.011V140.824l187.489,100.098L176.828,341.011z" />
                            </g>
                        </g>
                    </svg>  
                </button>
                <p className='text-lg  font-bold'>{t("Xem trước khóa học này")}</p>
            </div>
        </div>
        <div className='p-6 text-first'>
            <span className='text-[32px]'>₫&nbsp;399.000</span>
            <p className='text-base'>Giảm 25%</p>
            <p className='text-[#b32d0f] flex gap-2 my-2'>
                <svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <g id="style=stroke"> <g id="clock"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M12 4.75C7.44621 4.75 3.75 8.44621 3.75 13C3.75 17.5538 7.44621 21.25 12 21.25C16.5538 21.25 20.25 17.5538 20.25 13C20.25 8.44621 16.5538 4.75 12 4.75ZM2.25 13C2.25 7.61779 6.61779 3.25 12 3.25C17.3822 3.25 21.75 7.61779 21.75 13C21.75 18.3822 17.3822 22.75 12 22.75C6.61779 22.75 2.25 18.3822 2.25 13Z" fill="#b32d0f"/> <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M11.667 8.20898C12.0812 8.20898 12.417 8.54477 12.417 8.95898V12.649C12.417 12.771 12.4646 12.9586 12.5772 13.1561C12.6899 13.3536 12.827 13.4899 12.9313 13.5518L12.9333 13.5529L15.7233 15.2179C16.079 15.4302 16.1953 15.8906 15.983 16.2463C15.7708 16.602 15.3103 16.7183 14.9546 16.506L12.1666 14.8422C12.1663 14.842 12.1659 14.8418 12.1656 14.8416C11.7844 14.6154 11.4809 14.2615 11.2742 13.8991C11.0674 13.5364 10.917 13.0939 10.917 12.649V8.95898C10.917 8.54477 11.2528 8.20898 11.667 8.20898Z" fill="#b32d0f"/> <path id="line (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M17.4379 1.50345C17.7121 1.19304 18.1861 1.16374 18.4965 1.438L22.2434 4.74864C22.5539 5.0229 22.5832 5.49687 22.3089 5.80728C22.0346 6.11769 21.5607 6.14699 21.2503 5.87273L17.5033 2.56209C17.1929 2.28783 17.1636 1.81386 17.4379 1.50345Z" fill="#b32d0f"/> <path id="line (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M6.56203 1.50345C6.28776 1.19304 5.81379 1.16374 5.50339 1.438L1.75643 4.74864C1.44602 5.0229 1.41672 5.49687 1.69098 5.80728C1.96524 6.11769 2.43921 6.14699 2.74962 5.87273L6.49658 2.56209C6.80699 2.28783 6.83629 1.81386 6.56203 1.50345Z" fill="#b32d0f"/> </g> </g> </g>
                </svg>
                <span ><b>1 ngày</b> còn lại với mức giá này!</span>
            </p>
            <span></span>
            <div>
                <div className='mb-2'>
                    <ButtonComponent text={t("Thêm vào giỏ hàng")} bold={true} textColor={"white"} height={"h-12"} colorBg={"first"} fullScreen={true}/>
                </div>
                <div>
                    <ButtonComponent text={t("Mua ngay")} bold={true} height={"h-12"} hover={true} fullScreen={true}/>
                </div>
            </div>
            <p className='text-center text-xs mt-4'>{t("Đảm bảo hoàn tiền trong 30 ngày")}</p>
            <ul className='text-first'>
                <h3>{t("Khóa học này bao gồm:")}</h3>
                <li className='flex gap-3 py-1'>
                    <svg fill="#000000" width="16px" viewBox="0 -6 46 46" xmlns="http://www.w3.org/2000/svg">
                        <path id="_24.TV" data-name="24.TV" d="M46,37H2a1,1,0,0,1-1-1V8A1,1,0,0,1,2,7H46a1,1,0,0,1,1,1V36A1,1,0,0,1,46,37ZM45,9H3V35H45ZM21,16a.975.975,0,0,1,.563.2l7.771,4.872a.974.974,0,0,1,.261,1.715l-7.974,4.981A.982.982,0,0,1,21,28a1,1,0,0,1-1-1V17A1,1,0,0,1,21,16ZM15,39H33a1,1,0,0,1,0,2H15a1,1,0,0,1,0-2Z" transform="translate(-1 -7)" fill-rule="evenodd"/>
                    </svg>
                    <span>18 giờ video theo yêu cầu</span>
                </li>
                <li className='flex gap-3 py-1'>
                    <svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="white"/>
                        <path d="M13 3L16 6L19 9M13 3L5 3L5 21L19 21L19 9M13 3L13 9L19 9" stroke="#000000" stroke-linejoin="round"/>
                    </svg>
                    <span>2 bài viết</span>
                </li>
                <li className='flex gap-3 py-1'>
                    <svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 20V4C2 3.44772 2.44772 3 3 3H8.44792C8.79153 3 9.11108 3.17641 9.29416 3.46719L10.5947 5.53281C10.7778 5.82359 11.0974 6 11.441 6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z" stroke="#200E32" stroke-width="2"/>
                        <path d="M15 14L12 17L9 14" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 17L12 10" stroke="#200E32" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span>2 tài nguyên có thể tải xuống</span>
                </li>
                <li className='flex gap-3 py-1'>
                    <svg fill="#000000" width="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"/></svg>
                    <span>Truy cập trên thiết bị di động và TV</span>
                </li>
                <li className='flex gap-3 py-1'>
                    <svg fill="#000000" width="16px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <path d="M248,128a55.99955,55.99955,0,0,1-95.59766,39.59766q-.17137-.17139-.332-.35254L92.11963,99.55225a40,40,0,1,0,0,56.8955l8.519-9.61914a8,8,0,1,1,11.97754,10.6084l-8.68652,9.80811q-.16041.1809-.332.35254a56,56,0,1,1,0-79.19532q.17137.17139.332.35254l59.95068,67.69287a40,40,0,1,0,0-56.8955l-8.519,9.61914A8,8,0,0,1,143.38379,98.563l8.68652-9.80811q.16041-.1809.332-.35254A56,56,0,0,1,248,128Z"/>
                    </svg>
                    <span>Quyền truy cập đầy đủ suốt đời</span>
                </li>
                <li className='flex gap-3 py-1'>
                    <svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2.45597C17.7415 2.59747 18.1811 2.75299 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C12.7184 2 13.3857 2.02548 14 2.06829" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M19 5L19.9486 5.31621C20.9387 5.64623 21.4337 5.81124 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.87809C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L17.5 12.5" stroke="#1C274C" stroke-width="1.5"/>
                        <path d="M4.99994 5L4.05132 5.31621C3.06126 5.64623 2.56623 5.81124 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.87809C2.41441 10.2302 2.79063 10.4392 3.54305 10.8572L6.49994 12.5" stroke="#1C274C" stroke-width="1.5"/>
                        <path d="M12 17V19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M15.5 22H8.5L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.5 22Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 22H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <span>Giấy chứng nhận hoàn thành</span>
                </li>
            </ul>
            <div className='text-center'>
                <div className='flex justify-around'>
                    <Link className='font-bold m-2 underline'>{t("Chia sẻ")}</Link>
                    <Link className='font-bold m-2 underline'>{t("Tặng khóa học này")}</Link>
                </div>
                <Link className='font-bold m-2 underline'>{t("Áp dụng coupon")}</Link>
            </div>
            <div className='flex justify-between'>
                <div className='flex justify-between w-full h-12 items-center text-xs border border-dashed border-[#d1d7dc] p-2 m-2'>
                    <div>
                        <p>Đã áp dụng <b className='text-sm'>ST15MT100124B</b></p>
                        <p>Coupon của Udemy</p>
                    </div>
                    <IoMdClose size={20}/>
                </div>
            </div>
            <div>
                <SearchComponent/>
            </div>
        </div>
    </div>
  )
}
