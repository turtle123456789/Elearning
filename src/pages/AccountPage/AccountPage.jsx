import { t } from 'i18next'
import React from 'react'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const AccountPage = () => {
  return (
    <div>
      <div className='max-w-[1340px] mx-auto'>
        <div className='flex justify-between items-center '>
          <div>
            <img className='w-[72px]' src="assets/logos/logo.png" alt="" />
          </div>
          <div className='flex h-[72px] items-center gap-5'>
            <Link to="/" className='hover:text-eighth'>Học viên</Link>
            <div>
              <img className='w-6 h-6' src="https://img.icons8.com/ios/50/alarm--v1.png" alt="alarm--v1"/>
            </div>
            <div className='rounded-full w-8 h-8  text-white font-bold bg-first flex items-center justify-center'>
              PQ
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center shadow-lg p-12 mt-12 mb-6'>
            <p className='text-eighth'>Bắt đầu tạo khóa học</p>
            <ButtonComponent colorHover={"#0000008c"} padding={3} text={t("Tạo khóa học của bạn")} bold={true} textColor={"white"} colorBg={"first"}/>
        </div>
        <p className='text-center m-16'>Dựa trên trải nghiệm của bạn, chúng tôi nghĩ rằng những tài nguyên này sẽ hữu ích.</p>
        <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center gap-3 shadow-lg col-span-2 py-4 px-12">
              <div  className='w-52'>
                <img className='w-52' src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg" alt="" />
              </div>
              <div className='w-[540px] flex flex-col h-full justify-between'>
                <h3>Tạo khóa học thu hút</h3>
                <p>
                  Dù đã giảng dạy nhiều năm hay mới dạy lần đầu, bạn vẫn có thể tạo nên một khóa học hấp dẫn. Chúng tôi đã biên soạn các tài nguyên và phương pháp hay nhất để giúp bạn tiến bộ, bất kể vạch xuất phát của bạn ở đâu.
                </p>
                <Link className='text-eighth'>Bắt đầu</Link>
              </div>
            </div>
            <div className='flex gap-3 shadow-lg pt-8 px-12 pb-4'>
              <div  className='w-52'>
                <img className='w-52' src="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg" alt="" />
              </div>
              <div className='w-[350px] flex flex-col h-full justify-between'>
                <h3>Tạo khóa học thu hút</h3>
                <p>
                  Dù đã giảng dạy nhiều năm hay mới dạy lần đầu, bạn vẫn có thể tạo nên một khóa học hấp dẫn. Chúng tôi đã biên soạn các tài nguyên và phương pháp hay nhất để giúp bạn tiến bộ, bất kể vạch xuất phát của bạn ở đâu.
                </p>
                <Link className='text-eighth'>Bắt đầu</Link>
              </div>
            </div>
            <div className='flex gap-3 shadow-lg pt-8 px-12 pb-4'>
              <div  className='w-52'>
                <img className='w-52' src="https://s.udemycdn.com/instructor/dashboard/build-audience.jpg" alt="" />
              </div>
              <div className='w-[350px] flex flex-col h-full justify-between'>
                <h3>Tạo khóa học thu hút</h3>
                <p>
                  Dù đã giảng dạy nhiều năm hay mới dạy lần đầu, bạn vẫn có thể tạo nên một khóa học hấp dẫn. Chúng tôi đã biên soạn các tài nguyên và phương pháp hay nhất để giúp bạn tiến bộ, bất kể vạch xuất phát của bạn ở đâu.
                </p>
                <Link className='text-eighth'>Bắt đầu</Link>
              </div>
            </div>
            <div className="flex justify-center gap-3 shadow-lg col-span-2 py-4 px-12">
              <div  className='w-52'>
                <img className='w-52' src="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg" alt="" />
              </div>
              <div className='w-[540px] flex flex-col h-full justify-between'>
                <h3>Tạo khóa học thu hút</h3>
                <p>
                  Dù đã giảng dạy nhiều năm hay mới dạy lần đầu, bạn vẫn có thể tạo nên một khóa học hấp dẫn. Chúng tôi đã biên soạn các tài nguyên và phương pháp hay nhất để giúp bạn tiến bộ, bất kể vạch xuất phát của bạn ở đâu.
                </p>
                <Link className='text-eighth'>Bắt đầu</Link>
              </div>
            </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default AccountPage