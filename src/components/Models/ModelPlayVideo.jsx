import React, { useRef } from 'react'
import { IoMdClose } from "react-icons/io";
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';
export const ModelPlayVideo = ({openModal, setOpenModal}) => {
    const {t} = useTranslation();
    const modalRef = useRef(null);
    const handleMouseDownOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setOpenModal(false);  
        }
    };
  return (
    <div className={`${openModal?"block":"hidden"} cursor-pointer fixed bg-[#2d2f31cc] z-50 flex justify-center left-0 top-0 w-full h-full`} onMouseDown={handleMouseDownOutside}  >
        <div ref={modalRef} className='max-w-[600px] cursor-auto  w-full px-6 font-bold text-white bg-first'>
            <div className='py-6'>
                <div className='flex justify-between'>
                    <span>{t("Xem trước khóa học")}</span>
                    <button onClick={()=>setOpenModal(false)}>
                        <IoMdClose size={20}/>
                    </button>
                </div> 
                <h3 className='text-[19px] pr-9'>THÀNH THẠO XỬ LÝ DỮ LIỆU VỚI PYTHON TỪ SỐ 0 - 2024</h3>
            </div>
            <ReactPlayer
                url='assets/videos/video1.mp4'
                controls
                width='552px'
                height='400px'
                playbackRate={1}
            />
            <div>
                <h3 className='py-4'>{t("Video mẫu miễn phí:")}</h3>

            </div>
        </div>
    </div>
  )
}
