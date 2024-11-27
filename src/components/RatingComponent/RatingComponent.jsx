import React from 'react'
import { Rating } from '@mui/material';
export const RatingComponent = ({colorNumberStar,show,colorNumberRank,rank}) => {
  return (
    <div className='flex items-center'>
        <span className={`text-base font-bold ${colorNumberStar?`text-${colorNumberStar}`:""}` }>4,6</span>
        <Rating
        className='mx-1'
        sx={{
        '& .MuiRating-iconFilled': {
            color: colorNumberStar?colorNumberStar:'#b4690e',
        },
        '& .MuiRating-icon': {
            fontSize: '14px',
        },
        }} 
        name="half-rating"
        readOnly
        defaultValue={rank?rank:2.5} 
        precision={0.5} 
        />
        <span className={`${colorNumberRank?`text-${colorNumberRank}`:"text-third"} ${show&&"underline"} mb-1`}>(50 {show&&"Xếp hạng"})</span>
    </div>
  )
}
