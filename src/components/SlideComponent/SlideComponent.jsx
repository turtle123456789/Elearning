import React from 'react'
import Slider from "react-slick";
import { CustomPrevArrow } from '../../components/ButtonComponent/ButtonPrev';
import { CustomNextArrow } from '../../components/ButtonComponent/ButtonNext';
import { BoxContent } from '../BoxContent/BoxContent';
import { useTranslation } from 'react-i18next';
export const SlideComponent = ({slideShow}) => {
  const {t} = useTranslation();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slideShow?slideShow:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

    };
  return (
    <Slider {...settings} className='z-0'>
        <div className='relative'>
          <div className={`absolute  tablet:hidden top-16 left-[72px]`}>
            <BoxContent heightBn={"h-12"} h1={t("Bạn đang trong tình huống bế tắc?")} p={t("Tăng tốc tương lai của bạn với những bài học từ McLaren Racing.")} textBn={t("Tham gia khóa học")}/>
          </div>
          <img src="assets/imgs/slide1.jpg" alt="Slide 1" />
        </div>
        <div className='relative'>
          <div className={`absolute  tablet:hidden top-16 left-[72px]`}>
            <BoxContent heightBn={"h-12"} h1={t("Kỹ năng thúc đẩy bạn tiến về phía trước")} p={t("Bắt kịp tốc độ thay đổi nhanh chóng của công nghệ và nhu cầu công việc. Có được các kỹ năng để đạt được mục tiêu và duy trì tính cạnh tranh.")} textBn={t("Gói dành cho tổ chức")} />
          </div>
          <img src="assets/imgs/slide2.jpeg" alt="Slide 2" />
        </div>
        
    </Slider>
  )
}
