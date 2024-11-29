import { t } from 'i18next'
import React from 'react'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import OrderItemComponent from '../../components/OrderItemComponent/OrderItemComponent'
import {  useSelector } from 'react-redux';
const CartPage = () => {
    const listCart = useSelector((state) => state.cart.data)||[];
    const totalDiscount = useSelector((state) => state.cart.totalDiscount)||0;
    const total = useSelector((state) => state.cart.total)||0;
    const formatCurrencyVND = (amount) => {
        return new Intl.NumberFormat("vi-VN", {
          maximumFractionDigits: 0,
        }).format(amount);
      };
      
  return (
    <div className='max-w-[1340px] mx-auto'>
        <h1 className='text-5xl my-8'>Giỏ hàng</h1>
        <p className='font-bold text-base'>0 khóa học trong giỏ hàng</p>
        <div className="border p-6 flex justify-center mb-[94px]">
            <div>
                {listCart.length<=0?(<>
                    <div className='mb-6 flex justify-center'>
                        <img className='w-[240px] h-[180px]' src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg" alt="" />
                    </div>
                    <p className='mb-6 text-base'>Giỏ hàng của bạn đang trống. Hãy tiếp tục mua sắm để tìm một khóa học!</p>
                </>
                ):(

                    <>
                    <div className='flex justify-between  mb-5 gap-4' >
                        <div>
                            <p className='font-bold'>{listCart.length} khóa học trong giỏ hàng</p>
                            {
                                listCart.map((data,index)=>{
                                    return (<>
                                        <div key={`cartItem-${index}`} className='w-[880px] border-t'>
                                            <OrderItemComponent data={data}/>
                                        </div>
                                    </>)   
                                })
                            }
                        </div>
                        <div className='w-[300px] text-base border-b'>
                            <p>Tổng:</p>
                            <h1>₫ {formatCurrencyVND(total)}</h1>
                            
                            <span className='text-second line-through'>₫ {formatCurrencyVND(totalDiscount)}</span>
                            <br />
                            <span className='text-second'>Giảm giá {formatCurrencyVND((total*100)/totalDiscount)}%</span>
                            <br />
                            <br />
                            <ButtonComponent padding={3} text={t("Thanh toán")} fullScreen={true} bold={true} textColor={"white"} colorBg={"first"}/>
                        </div>
                    </div>
                    </>
                )}
                
                <div className='flex justify-center'>
                    <ButtonComponent padding={3} notHover={true} address={"/"} underline={true} link={t("Tiếp tục mua sắm")} bold={true} textColor={"white"} colorBg={"first"} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartPage