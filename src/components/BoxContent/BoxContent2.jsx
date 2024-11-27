import React from 'react'

export const BoxContent2 = ({block1,block2,type}) => {
    if(!type){
        type=1;
    }
  return (
    <div className={`flex ${type===1?"":"flex-row-reverse"} max-w-[896px] justify-between items-center mx-auto tablet:flex-col-reverse tablet:max-w-[600px]`}>
        <div className='w-full max-w-[400px] tablet:max-w-none'>
            {block1} 
        </div>
        <div className='w-full max-w-[400px] tablet:max-w-none flex items-center tablet:mb-5'>
            {block2}
        </div>
    </div>
  )
}
