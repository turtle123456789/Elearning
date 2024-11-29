import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { CardCourse } from '../CardCourse/CardCourse';
import { CustomPrevArrow } from '../ButtonComponent/ButtonPrev';
import { CustomNextArrow } from '../ButtonComponent/ButtonNext';
export const SlideCourse = ({slideShow,listCourses,typeCourse}) => {
    const [listCourseType,setListCourseType] = useState([])
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
    useEffect(()=>{
        if(typeCourse){
            const listCourseType = listCourses.filter(course => course.type === typeCourse)
            setListCourseType(listCourseType)
        }else{
            setListCourseType(listCourses)
        }
    },[typeCourse])
    
  return (
    <Slider {...settings}>
        {listCourseType.length>0 && listCourseType?.map((data,index)=>{
            return(
                <div  key={`listCoursePopular-${index}`}>
                    <CardCourse listCourses={data}/>      
                </div>
            )
        })}

    </Slider>
  )
}
