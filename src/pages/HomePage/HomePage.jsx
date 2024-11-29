import React, { useEffect, useState } from 'react'
import { SlideComponent } from '../../components/SlideComponent/SlideComponent'
import { useTranslation } from 'react-i18next'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom';
import { SlideCourse } from '../../components/SlideComponent/SlideCourse';
import { updateItem } from '../../redux/slides/cartSlice';

const HomePage = () => {
  const {t} = useTranslation();
  const [activeButton, setActiveButton] = useState("");

  const [listTagCourses,setListTagCourses] = useState([]);

  const [listCourses,setListCourses] = useState([
    {
      id: 0,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:400,
      discount:200,
      type: "Ai",
    },
    {
      id: 1,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:401,
      discount:201,
      type:"Amazon AWS"
    },
    {
      id: 2,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:402,
      discount:202,
      type:"Phát triển web"
    },
    {
      id: 3,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:403,
      discount:203,
      type:"Khoa học dữ liệu"
    },
    {
      id: 4,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:404,
      discount:204,
      type: "Ai",
    },
    {
      id: 5,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:405,
      discount:205,
      type:"Amazon AWS"
    },
    {
      id: 6,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:406,
      discount:206,
      type:"Phát triển web"
    },
    {
      id: 7,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:407,
      discount:207,
      type:"Khoa học dữ liệu"
    },
    {
      id: 8,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:408,
      discount:208,
      type: "Ai",
    },
    {
      id: 9,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:409,
      discount:209,
      type:"Amazon AWS"
    },
    {
      id: 10,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4010,
      discount:20010,
      type:"Phát triển web"
    },
    {
      id: 11,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4011,
      discount:20011,
      type:"Khoa học dữ liệu"
    },
    {
      id: 12,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4012,
      discount:20012,
      type: "Ai",
    },
    {
      id: 13,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4013,
      discount:20013,
      type:"Amazon AWS"
    },
    {
      id: 14,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4014,
      discount:20014,
      type:"Phát triển web"
    },
    {
      id: 15,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4015,
      discount:20015,
      type:"Khoa học dữ liệu"
    },
    {
      id: 16,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4016,
      discount:20016,
      type: "Ai",
    },
    {
      id: 17,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4017,
      discount:20017,
      type:"Amazon AWS"
    },
    {
      id: 18,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4018,
      discount:20018,
      type:"Phát triển web"
    },
    {
      id: 19,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4019,
      discount:20019,
      type:"Khoa học dữ liệu"
    },
    {
      id: 20,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4020,
      discount:20020,
      type: "Ai",
    },
    {
      id: 21,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4021,
      discount:20021,
      type:"Amazon AWS"
    },
    {
      id: 22,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4022,
      discount:20022,
      type:"Phát triển web"
    },
    {
      id: 23,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4023,
      discount:20023,
      type:"Khoa học dữ liệu"
    },
    {
      id: 24,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4024,
      discount:20024,
      type: "Ai",
    },
    {
      id: 25,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4025,
      discount:20025,
      type:"Amazon AWS"
    },
    {
      id: 26,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4026,
      discount:20026,
      type:"Phát triển web"
    },
    {
      id: 27,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4027,
      discount:20027,
      type:"Khoa học dữ liệu"
    },
    {
      id: 28,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4028,
      discount:20028,
      type: "Ai",
    },
    {
      id: 29,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4029,
      discount:20029,
      type:"Amazon AWS"
    },
    {
      id: 30,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4030,
      discount:20030,
      type:"Phát triển web"
    },
    {
      id: 31,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4031,
      discount:20031,
      type:"Khoa học dữ liệu"
    },
    {
      id: 32,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4032,
      discount:20032,
      type: "Ai",
    },
    {
      id: 33,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4033,
      discount:20033,
      type:"Amazon AWS"
    },
    {
      id: 34,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4034,
      discount:20034,
      type:"Phát triển web"
    },
    {
      id: 35,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4035,
      discount:20035,
      type:"Khoa học dữ liệu"
    },
    {
      id: 36,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4036,
      discount:20036,
      type: "Ai",
    },
    {
      id: 37,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4037,
      discount:20037,
      type:"Amazon AWS"
    },
    {
      id: 38,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4038,
      discount:20038,
      type:"Phát triển web"
    },
    {
      id: 39,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4039,
      discount:20039,
      type:"Khoa học dữ liệu"
    },
    {
      id: 40,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4040,
      discount:20040,
      type: "Ai",
    },
    {
      id: 41,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4041,
      discount:20041,
      type:"Amazon AWS"
    },
    {
      id: 42,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4042,
      discount:20042,
      type:"Phát triển web"
    },
    {
      id: 43,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4043,
      discount:20043,
      type:"Khoa học dữ liệu"
    },
    {
      id: 44,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4044,
      discount:20044,
      type: "Ai",
    },
    {
      id: 45,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4045,
      discount:20045,
      type:"Amazon AWS"
    },
    {
      id: 46,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4046,
      discount:20046,
      type:"Phát triển web"
    },
    {
      id: 47,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4047,
      discount:20047,
      type:"Khoa học dữ liệu"
    },
    {
      id: 48,
      image:"https://img-b.udemycdn.com/course/240x135/6212921_1abf_3.jpg",
      title:"AI tạo sinh (Generative AI)",
      rank:2.5,
      price:4048,
      discount:20048,
      type: "Ai",
    },
    {
      id: 49,
      image:"https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg",
      title:"AWS Cloud for beginner (Vietnamese)",
      rank:4,
      price:4049,
      discount:20049,
      type:"Amazon AWS"
    },
    {
      id: 50,
      image:"https://img-b.udemycdn.com/course/240x135/5391834_7008_2.jpg",
      title:"Viết ứng dụng bán hàng với Java Springboot/API và Angular",
      rank:5,
      price:4050,
      discount:20050,
      type:"Phát triển web"
    },
    {
      id: 51,
      image:"https://img-b.udemycdn.com/course/240x135/5537120_b24f.jpg",
      title:"DevOps on AWS for beginner (Vietnamese)",
      rank:1,
      price:4051,
      discount:20051,
      type:"Khoa học dữ liệu"
    },
  ])

  useEffect(()=>{
    const types = [...new Set(listCourses.map(course => course.type))];
    setListTagCourses(types);
    setActiveButton(types[0]);

    },[])
  return (
    <div>
        <div className='max-w-[1340px] mx-auto mb-12 relative z-0'>
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
              <ButtonComponent text={`${t("Khám phá")} ${activeButton}`} hover={true} bold={true}/>
            </div>
            <SlideCourse typeCourse={activeButton} listCourses={listCourses} slideShow={4}/>
          </div>
          <div className='mt-16 mb-24'>
            <h2 className='mb-4'>{t("Học viên đang xem")}</h2>
            <SlideCourse  listCourses={listCourses} slideShow={5}/>
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