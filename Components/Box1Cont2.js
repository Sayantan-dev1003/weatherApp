"use client"
import Image from 'next/image'
import React, { useContext, useMemo } from 'react'
import uv from '../public/uv.png'
import { MyContext } from '@/Helper/Context'

const Box1Cont2 = () => {
  const {data} = useContext(MyContext)
  const weather = useMemo(() => {}, [data])
  return (
    <div className='border-2 border-slate-400 w-40 h-20 flex justify-center items-center rounded-3xl'>
        <div className='flex items-center'>
          <Image src={uv} width={60} height={60} alt={""} />
          <div className='text-center'>
            <p className='text-sm font-bold'>UV Index</p>
            <p className='text-xs'>{data.current?.uv}</p>
          </div>
        </div>
    </div>
  )
}

export default Box1Cont2