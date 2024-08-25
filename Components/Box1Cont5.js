"use client"
import React, { useContext, useMemo } from 'react'
import { MyContext } from '@/Helper/Context'

const Box1Cont5 = () => {
  const {data} = useContext(MyContext)
  const {error} = useContext(MyContext)
  const weather = useMemo(() => {
  }, [data]);
  let imgUrl = "https:"+data.current?.condition?.icon

  if (error) {
    return (
      <div className='p-5 w-[15%] h-[34%] flex flex-col justify-center items-center rounded-3xl bg-white'></div>
    )
  }else{
  return (
    <div className='p-5 w-[15%] h-[34%] flex flex-col justify-center items-center rounded-3xl bg-white'>
      <div className='w-full flex flex-col items-center'>
        <img src={imgUrl} alt="" className='w-20 h-auto' />
        <div className='w-full flex items-start justify-start flex-col'>
          <p className='text-3xl font-bold'>{data.current?.temp_c}℃</p>
          <p className='text-sm font-semibold'>{data.current?.condition?.text}</p>
          <p className='text-xs'>{data.forecast?.forecastday[0]?.day?.maxtemp_c}℃ / {data.forecast?.forecastday[0]?.day?.mintemp_c}℃</p>
          <p className='text-xs'>Feels like {data.current?.feelslike_c}℃</p>
        </div>
      </div>
    </div>
  )
}
}

export default Box1Cont5