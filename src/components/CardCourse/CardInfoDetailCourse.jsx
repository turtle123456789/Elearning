import { List } from 'flowbite-react'
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
export const CardInfoDetailCourse = ({isOpen, handleMouseLeave,handleMouseOver}) => {
  return (
    <div className={`bg-white ml-5 p-6 absolute w-[340px] left-10 z-[9999] ${isOpen?"block":"hidden"}`} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
        <h3>THÀNH THẠO XỬ LÝ DỮ LIỆU VỚI PYTHON TỪ SỐ 0 - 2024</h3>
        <div>
         
            <div >
                <div className='mt-2 mb-1 flex items-center gap-2'>
                    <span className='bg-[#eceb98] text-xs font-bold px-2 py-1'>Bán chạy nhất</span>
                    <div className='text-xs text-sixth'>
                        <span>Đã cập nhập <span className='font-bold'>Tháng 9 năm 2024</span></span>
                    </div>
                </div>  
            </div>
            <div>
                <span>Tổng số giờ 18 giờ</span>
                <span>Tất cả trình độ</span>
            </div>
            <div>
                <p className='my-2'>Lập trình Python từ cơ bản đến nâng cao thông qua các dự án với sự hỗ trợ của trí tuệ nhân tạo AI</p>
                <List className='text-first'>
                    <List.Item icon={IoMdCheckmark}>Hiểu rõ đặc điểm của ngôn ngữ lập trình Python và các ứng dụng có thể phát triển bằng ngôn ngữ này</List.Item>
                    <List.Item icon={IoMdCheckmark}>Biết cách cài đặt môi trường phát triển PyCharm để lập trình bằng Python</List.Item>
                    <List.Item icon={IoMdCheckmark}>Nắm rõ cú pháp cơ bản của Python, cách khai báo biến</List.Item>
                </List>
            </div>
        </div>
    </div>
  )
}
