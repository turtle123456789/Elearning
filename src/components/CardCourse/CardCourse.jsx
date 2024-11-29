import { Link } from 'react-router-dom'
import { RatingComponent } from '../RatingComponent/RatingComponent';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slides/cartSlice';


export const CardCourse = ({listCourses}) => {
  const listCart = useSelector((state)=>state.cart.data)||[]
  const dispatch = useDispatch()
  let updatedCart = [...listCart];

  const AddCart = (listCourses) =>{ 
    dispatch(addItem(listCourses))
    updatedCart.push(listCourses); 
    localStorage.setItem("listcart", JSON.stringify(updatedCart))
  }
  
  return (
    <div className='relative grid grid-rows-1 gap-2 justify-items-center p-2 border mx-1' >
      <div className='mb-1 w-full'>
        <img className='aspect-first' src={listCourses?.image} alt="" />
      </div>
      <div className='w-full'>
        <Link to={`/course${listCourses?.id}`}>
          <h3 className='mb-1 h-12'>
            <Link className='crop-text2'>{listCourses?.title}</Link>
          </h3>
          <span className='text-third text-xs mb-1'>TS. Dang Xuan Tho</span>
        </Link>
        <RatingComponent rank={listCourses?.rank}/>
        <h3 className='mb-1'>₫&nbsp;899.000</h3>
        <div className='mt-2 mb-1 '>
          <span className='bg-[#eceb98] text-xs font-bold px-2 py-1'>Bán chạy nhất</span>
          <div className='mt-2 justify-center flex'>
            <ButtonComponent AddCart={AddCart} listCourses={listCourses}  padding={3} text={t('Thêm vào giỏ hàng')} hover={true} bold={true}/>
          </div>
        </div>
      </div>
    </div>
  )
}
