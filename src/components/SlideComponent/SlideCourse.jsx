import React from 'react'
import Slider from "react-slick";
import { CardCourse } from '../CardCourse/CardCourse';
import { CustomPrevArrow } from '../ButtonComponent/ButtonPrev';
import { CustomNextArrow } from '../ButtonComponent/ButtonNext';
import { Link } from 'react-router-dom';
export const SlideCourse = ({slideShow,listCourses}) => {
    console.log('listCourses', listCourses)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slideShow?slideShow:1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow top={"16"} record={"6"}/>,
        nextArrow: <CustomNextArrow top={"16"} record={"6"}/>,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 980,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

        ]
    };
  return (
    <Slider {...settings}>
        {listCourses.length>0 && listCourses?.map((data,index)=>{
            return(
                <Link to="/course" key={`listCoursePopular-${index}`}>
                    <CardCourse listCourses={data}/>      
                </Link>
            )
        })}

    </Slider>
  )
}
