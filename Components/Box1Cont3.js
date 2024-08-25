"use client"
import Image from 'next/image'
import React, { useContext, useMemo } from 'react'
import humidity from '../public/humidity.png'
import { MyContext } from '@/Helper/Context'

const Box1Cont3 = () => {
  const {data} = useContext(MyContext)
  const weather = useMemo(() => {}, [data])
  return (
    <div className='border-2 border-slate-400 w-40 h-20 flex justify-center items-center rounded-3xl'>
        <div className='flex items-center gap-4'>
          <Image src={humidity} width={40} height={40} alt={""} />
          <div className='text-center'>
            <p className='text-sm font-bold'>Humdity</p>
            <p className='text-xs'>{data.current?.humidity}%</p>
          </div>
        </div>
    </div>
  )
}

export default Box1Cont3