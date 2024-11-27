import React, { useState } from 'react'
import { DrowDownMenu1 } from './DrowDownMenu1'

export const DropDownMenu = ({categories}) => {
  const [id1,setId1] = useState();
  const [level, setLevel] = useState();
  const [id2,setId2] = useState();
  const handleMouseEnter = (e) => {
    if(e?.level===1)
    {
      setId1(e?.id);
      setLevel(e?.level+1);
    }
    if(e?.level===2)
      {
        setId2(e?.id);
        setLevel(e?.level+1);
      }
  };
  return (
    <div className={`shadow-[#d1d7dc]  flex shadow-sm  mt-1  h-[640px]`}>
          <DrowDownMenu1 id={0} handleMouseEnter={handleMouseEnter} categories={categories?.level1}/>
        {level>2?(
          <>
            <DrowDownMenu1 id={id1} handleMouseEnter={handleMouseEnter} categories={categories?.level2}/>
            <DrowDownMenu1 level={level} id={id2} categories={categories?.level3}/>
          </>
          ):level===2?(
            <DrowDownMenu1 level={level} id={id1} handleMouseEnter={handleMouseEnter} categories={categories?.level2}/>
          ):(
            <></>
          )
        } 
    </div>
  )
}
