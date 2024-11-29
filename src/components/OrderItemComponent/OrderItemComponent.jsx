import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slides/cartSlice';
const OrderItemComponent = ({data}) => {
    const cartList = JSON.parse(localStorage.getItem("listcart")) || []
    const dispatch = useDispatch()
    const formatCurrencyVND = (amount) => {
        return new Intl.NumberFormat("vi-VN", {
          maximumFractionDigits: 0,
        }).format(amount);
      };
      const remove = (id) =>{
        console.log('id', id)
        const updatedCartList = cartList.filter(item => item.id !== id);
        dispatch(removeItem(id))
        localStorage.setItem("listcart", JSON.stringify(updatedCartList))
      }
  return (
    <div>
        <div className='flex justify-between py-4'>
            <Link to={`/course`}>
                <div className='flex '>
                    <div className='w-[120px] h-[68px] mr-3'>
                        <img src={data.image} alt="hinh san pham" />
                    </div>
                    <div>
                        <h3>{data.title}</h3>
                        <p className='text-xs'>bởi {data.authur}</p>
                    </div>
                </div>
            </Link>
            <div className='flex gap-10'>
                <div>
                    <span className='cursor-pointer text-red-500' onClick={()=>remove(data.id)}>Xóa</span><br />
                    <span className='cursor-pointer text-green-500'>Lưu để mua sau</span>
                </div>
                <div className=''>
                    <span className='text-xl text-eighth'>
                        ₫ {formatCurrencyVND(data.price)}
                    </span>
                    <br />
                    <span className='float-right text-second line-through'>
                        ₫ {formatCurrencyVND(data.discount)}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderItemComponent