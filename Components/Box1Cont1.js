"use client"
import Image from 'next/image'
import React, { useContext, useMemo } from 'react'
import dew from '../public/dew.png'
import { MyContext } from '@/Helper/Context'

const Box1Cont1 = () => {
  const {data} = useContext(MyContext)
  const weather = useMemo(() => {}, [data])
  return (
    <div className='border-2 border-slate-400 w-40 h-20 flex justify-center items-center rounded-3xl'>
        <div className='flex items-center gap-3'>
          <Image src={dew} width={40} height={40} alt={""} />
          <div className='text-center'>
            <p className='text-sm font-bold'>Dew Point</p>
            <p className='text-xs'>{data.current?.dewpoint_c}℃</p>
          </div>
        </div>
    </div>
  )
}

export default Box1Cont1