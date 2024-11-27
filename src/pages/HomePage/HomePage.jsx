import React, { useEffect, useState } from 'react'
import { SlideComponent } from '../../components/SlideComponent/SlideComponent'
import { useTranslation } from 'react-i18next'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom';
import { SlideCourse } from '../../components/SlideComponent/SlideCourse';


const HomePage = () => {
  const {t} = useTranslation();
  const [activeButton, setActiveButton] = useState("Python");
  const [listCourses,setListCourses] = useState([
    {
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5
    },
    {
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:4
    },
    {
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:5
    },
    {
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:1
    }
  ])
  const listTagCourses = [
    'Python',
    'Microsoft Excel',
    'Phát triển web',
    'Javascript',
    'Khoa học dữ liệu',
    'Amazon AWS',
    'Vẽ'
  ];

  return (
    <div>
        <div className='max-w-[1340px] mx-auto mb-12 relative'>
          <SlideComponent/>
        </div>
        <div className='bg-third mb-8 '>
        <div className='max-w-[1292px] mx-auto p-16 tabletXs:px-12 tabletXs:py-8'>
          <p className='text-center text-[19px] text-third mb-6'>{t("Được hơn 16.000 công ty và hàng triệu học viên trên khắp thế giới tin dùng")}</p>
          <div className='grid grid-cols-8 justify-items-center items-center tablet:grid-cols-4 tablet:gap-y-4'>
            <div><img src="assets/brands/brand0.svg" alt="" /></div>
            <div><img src="assets/brands/brand1.svg" alt="" /></div>
            <div><img src="assets/brands/brand2.svg" alt="" /></div>
            <div><img src="assets/brands/brand3.svg" alt="" /></div>
            <div><img src="assets/brands/brand4.svg" alt="" /></div>
            <div><img src="assets/brands/brand5.svg" alt="" /></div>
            <div><img src="assets/brands/brand6.svg" alt="" /></div>
            <div><img src="assets/brands/brand7.svg" alt="" /></div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1292px] px-6'>
        <div className='mb-4'>
          <h1>{t("Tuyển tập khóa học rộng lớn")}</h1>
          <p className='text-[19px] mt-4'>{t("Lựa chọn trong số hơn 250000 khóa học video online với nhiều nội dung bổ sung mới được xuất bản hàng tháng")}</p>
        </div>
        <div className=' px-6'>
          <div className='flex flex-wrap mx-auto max-w-[1292px] gap-4 text-third text-base font-bold'>
            {listTagCourses?.length>0 && listTagCourses?.map((data,index)=>{
              return(
              <div key={`coursePopular-${index}`}>
                <button className={`px-1 py-2 ${activeButton===data?"text-first":""}`} onClick={()=>setActiveButton(data)}>
                  <span>{data}</span>
                </button>
              </div>
            )})}
          </div>
          <div className="p-8 border border-[#d1d7dc]">
            <h2>{t("Giúp bạn có thêm cơ hội nghề nghiệp với Python")}</h2>
            <div className='mb-8 mt-4'>
              <ButtonComponent text={t("Khám phá python")} hover={true} bold={true}/>
            </div>
            <SlideCourse listCourses={listCourses} slideShow={4}/>
          </div>
          <div className='mt-16 mb-24'>
            <h2 className='mb-4'>{t("Học viên đang xem")}</h2>
            <SlideCourse listCourses={listCourses} slideShow={5}/>
          </div>
          <div>
            <h2 className='mb-6'>
            {t("Các thể loại hàng đầu")}
            </h2>
            <div className="grid grid-cols-4 gap-x-6 tabletXs:grid-cols-3">
              <div>
                <Link>
                  <div>
                    <div className='max-w-[300px] overflow-hidden'>
                      <img src="assets/types/type0.jpg" alt="" className='hover:scale-105 duration-500'/>
                    </div>
                    <p className='font-base font-bold pt-2 pb-8'>{t("Thiết kế")}</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link>
                  <div>
                    <div className='max-w-[300px] overflow-hidden'>
                      <img src="assets/types/type1.jpg" alt="" className='hover:scale-105 duration-500'/>
                    </div>
                    <p className='font-base font-bold pt-2 pb-8'>{t("Phát triển")}</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link>
                  <div>
                    <div className='max-w-[300px] overflow-hidden'>
                      <img src="assets/types/type2.jpg" alt="" className='hover:scale-105 duration-500'/>
                    </div>
                    <p className='font-base font-bold pt-2 pb-8'>{t("Marketing")}</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link>
                  <div>
                    <div className='max-w-[300px] overflow-hidden'>
                      <img src="assets/types/type3.jpg" alt="" className='hover:scale-105 duration-500'/>
                    </div>
                    <p className='font-base font-bold pt-2 pb-8'>{t("CNTT và Phần mềm")}</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link>
                  <div>
                    <div className='max-w-[300px] overflow-hidden'>
                      <img src="assets/types/type4.jpg" alt="" className='hover:scale-105 duration-500'/>
                    </div>
                    <p className='font-base font-bold pt-2 pb-8'>{t("Phát triển cá nhân")}</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link>
                  <div>
                    <div className='max-w-[300px] overflow-hidden'>
                      <img src="assets/types/type5.jpg" alt="" className='hover:scale-105 duration-500'/>
                    </div>
                    <p className='font-base font-bold pt-2 pb-8'>{t("Kinh doanh")}</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link>
                  <div>
                    <div className='max-w-[300px] overflow-hidden'>
                      <img src="assets/types/type6.jpg" alt="" className='hover:scale-105 duration-500'/>
                    </div>
                    <p className='font-base font-bold pt-2 pb-8'>{t("Nhiếp ảnh")}</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link>
                  <div>
                    <div className='max-w-[300px] overflow-hidden'>
                      <img src="assets/types/type7.jpg" alt="" className='hover:scale-105 duration-500'/>
                    </div>
                    <p className='font-base font-bold pt-2 pb-8'>{t("Âm nhạc")}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className='bg-third mt-16 '>
        <div className='mx-auto max-w-[1292px] px-6 py-16'>
            <h2 className='mb-5'>{t("Chủ đề nổi bật theo thể loại")}</h2>
            <div className='grid grid-cols-4 tabletXs:grid-cols-2'>
              <ul className='pr-2 pb-6'>
                <p className='text-[19px] font-bold mb-6'>Development</p>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Python</Link>
                  <p className='text-third mt-2'>36,354,994 learners</p>
                </li>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Web Development</Link>
                  <p className='text-third mt-2'>11,415,615 learners</p>
                </li>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Machine Learning</Link>
                  <p className='text-third mt-2'>7,070,015 learners</p>
                </li>
              </ul>
              <ul className='pr-2 pb-6'>
                <p className='text-[19px] font-bold mb-6'>Business</p>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Financial Analysis</Link>
                  <p className='text-third mt-2'>1,195,282 learners</p>
                </li>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>SQL</Link>
                  <p className='text-third mt-2'>5,977,561 learners</p>
                </li>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>PMP</Link>
                  <p className='text-third mt-2'>1,733,398 learners</p>
                </li>
              </ul>
              <ul className='pr-2 pb-6'>
                <p className='text-[19px] font-bold mb-6'>IT and Software</p>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Amazon AWS</Link>
                  <p className='text-third mt-2'>6,123,456 learners</p>
                </li>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Ethical Hacking</Link>
                  <p className='text-third mt-2'>10,931,066 learners</p>
                </li>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Cyber Security</Link>
                  <p className='text-third mt-2'>3,998,037 learners</p>
                </li>
              </ul>
              <ul className='pr-2 pb-6'>
                <p className='text-[19px] font-bold mb-6'>Design</p>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Photoshop</Link>
                  <p className='text-third mt-2'>10,909,736 learners</p>
                </li>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Graphic Design</Link>
                  <p className='text-third mt-2'>3,381,052 learners</p>
                </li>
                <li className='mt-6'>
                  <Link className='text-eighth text-base underline font-bold'>Drawing</Link>
                  <p className='text-third mt-2'>2,410,849 learners</p>
                </li>
              </ul>
            </div>
            <ButtonComponent text={t("Khám phá thêm chủ đề")} hover={true} bold={true}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage