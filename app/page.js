"use client"
import Box1 from '@/Components/Box1'
import Box1Cont5 from '@/Components/Box1Cont5'
import BreakingNews from '@/Components/BreakingNews'
import HourlyForecast from '@/Components/HourlyForecast'
import Location from '@/Components/Location'
import SearchCity from '@/Components/SearchCity'
import WeatherMap from '@/Components/WeatherMap'
import WeekForecast from '@/Components/WeekForecast'
import React, { useState } from 'react'

const page = () => {
  const [weekday, setWeekday] = useState(0)
  const getDayId = (day) => {
    setWeekday(day)
  }

  return (
    <>
      <div className='absolute top-0 left-0 w-[100vw] h-[100vh] p-3 bg-slate-200'>
        <div className='flex justify-between w-full mb-3'>
            <Location />
            <SearchCity />
        </div>
        <Box1Cont5 />
        <Box1 />
        <WeatherMap />
        <WeekForecast dayId={getDayId} />
        <BreakingNews />
        <HourlyForecast weekdayId={weekday} />
      </div>
    </>
  )
}

export default page