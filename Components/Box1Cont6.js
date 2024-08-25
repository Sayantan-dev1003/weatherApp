"use client"
import Image from 'next/image'
import React, { useContext, useMemo } from 'react'
import pressure from '../public/pressure.png'
import { MyContext } from '@/Helper/Context'

const Box1Cont4 = () => {
  const {data} = useContext(MyContext)
  const weather = useMemo(() => {}, [data])
  return (
    <div className='border-2 border-slate-400 w-40 h-20 flex justify-center items-center rounded-3xl'>
        <div className='flex items-center gap-4'>
          <Image src={pressure} width={50} height={50} alt={""} />
          <div className='text-center'>
            <p className='text-sm font-bold'>Pressure</p>
            <p className='text-xs'>{data.current?.pressure_mb} mb</p>
          </div>
        </div>
    </div>
  )
}

export default Box1Cont4