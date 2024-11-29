import React from 'react'
import { BoxContent } from '../../components/BoxContent/BoxContent'
import { t } from 'i18next'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'

const TeacherPage = () => {
  return (
    <div>
        <div className='bg-no-repeat bg-cover z-0' style={{backgroundImage:"url(assets/imgs/bg1.webp)", height:"600px"}}>
          <div className="max-w-[1340px] m-auto flex items-center h-full">
              <BoxContent  heightBn={"h-12"} shadow={true} bgBox={"bg-seventh"} h1={t("Hãy đến giảng dạy với chúng tôi")} p={t("Trở thành giảng viên và thay đổi cuộc sống của mọi người, bao gồm cả cuộc sống của chính bạn")} textBn={t("Bắt đầu")}/>
          </div>
        </div>
        <div className='max-w-[1340px] mx-auto my-12'>
          <h1 className='text-center'>Có quá nhiều lý do để bắt đầu</h1>
          <div className='flex justify-between gap-48'>
            <div className='flex flex-col items-center text-center'>
              <div className='w-24'>
                <img src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" alt="" />
              </div>
              <div>
                <h3>Giảng dạy theo cách của bạn</h3>
                <p>Xuất bản khóa học mong muốn, theo cách mong muốn và bạn luôn có quyền kiểm soát nội dung của riêng mình. </p>
              </div>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='w-24'>
                <img src="	https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" alt="" />
              </div>
              <div>
                <h3>Truyền cảm hứng cho học viên</h3>
                <p>Dạy những gì bạn biết và giúp học viên khám phá sở thích, tiếp thu kỹ năng mới và thăng tiến trong sự nghiệp của họ. </p>
              </div>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='w-24'>
                <img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" alt="" />
              </div>
              <div>
                <h3>Nhận phần thưởng</h3>
                <p>Mở rộng mạng lưới nghề nghiệp, xây dựng kiến thức chuyên môn và kiếm thu nhập từ mỗi lượt ghi danh có trả phí. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fourth">
            <div className="max-w-[1340px] mx-auto flex justify-between text-white py-11">
              <div className='text-center'>
                <h1>73 triệu</h1>
                <h3>học viên</h3>
              </div>
              <div className='text-center'>
                <h1>Hơn 75</h1>
                <h3>Ngôn ngữ</h3>
              </div>
              <div className='text-center'>
                <h1>1 tỷ</h1>
                <h3>Lượt ghi danh</h3>
              </div>
              <div className='text-center'>
                <h1>Hơn 180</h1>
                <h3>Quốc gia</h3>
              </div>
              <div className='text-center'>
                <h1>Hơn 16000</h1>
                <h3>Khách hàng doanh nghiệp</h3>
              </div>
            </div>
        </div>
        <div className="bg-third mx-auto">
          <div className='max-w-[1340px] mx-auto mt-12 py-12'>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center gap-2'>
                  <h1>Trở thành giảng viên ngay hôm nay</h1>
                  <p>Tham gia một trong những thị trường học tập trực tuyến lớn nhất thế giới.</p>
                  <ButtonComponent width={"w-80"}  padding={3} text={t("Bắt đầu")} bold={true} textColor={"white"} colorBg={"first"}/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TeacherPage