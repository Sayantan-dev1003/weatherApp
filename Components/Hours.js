"use client"
import React from 'react'

const Hours = (props) => {
  return (
    <div>
        <div className="hourBox flex flex-col items-center justify-evenly bg-slate-200 rounded-xl px-3 py-2 w-[83px] h-[100%]">
          <p className='text-xs font-medium'>{props.value.time}</p>
          <img src={props.value.imgIcon} alt="" className='w-[40px] h-auto' />
          <p className="percent font-semibold">{props.value.temp}℃</p>
          <p className="percent font-normal text-xs">{props.value.rainpr}%</p>
        </div>
    </div>
  )
}

export default Hours