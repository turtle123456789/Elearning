import React from 'react'
import { Link } from 'react-router-dom'

const OrderItemComponent = ({data}) => {
    const formatCurrencyVND = (amount) => {
        return new Intl.NumberFormat("vi-VN", {
          maximumFractionDigits: 0,
        }).format(amount);
      };
  return (
    <div>
        <div className='flex justify-between py-4'>
            <Link>
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
                    <span className='cursor-pointer text-red-500'>Xóa</span><br />
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