"use client"
import React, { useContext } from 'react'
import Box1Cont1 from './Box1Cont1'
import Box1Cont2 from './Box1Cont2'
import Box1Cont3 from './Box1Cont3'
import Box1Cont4 from './Box1Cont4'
import Box1Cont5 from './Box1Cont5'
import Box1Cont6 from './Box1Cont6'
import Box1Cont7 from './Box1Cont7'
import { MyContext } from '@/Helper/Context'

const Box1 = () => {
  const {error} = useContext(MyContext)

  if (error) {
    return (
      <div className='w-[41.5%] h-48 flex justify-between p-3 bg-white rounded-3xl relative bottom-[192px] left-[16%]'></div>
    )
  } else {
  return (
    <div className='w-[41.5%] h-48 flex justify-between p-3 bg-white rounded-3xl relative bottom-[192px] left-[16%]'>
      <div className='flex gap-2'>
        <div className="row1 flex flex-col gap-2">
          <Box1Cont1 />
          <Box1Cont4 />
        </div>
        <div className="row1 flex flex-col gap-2">
          <Box1Cont2 />
          <Box1Cont3 />
        </div>
        <div className="row1 flex flex-col gap-2">
          <Box1Cont7 />
          <Box1Cont6 />
        </div>
      </div>
    </div>
  )
}
}

export default Box1