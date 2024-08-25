"use client"
import { MyContext } from '@/Helper/Context'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const WeatherMap = () => {
  const {data} = useContext(MyContext)
  const {error} = useContext(MyContext)
  const weather = useMemo(() => {}, [data])
  const key = '82a72b716b2a422283580542241707'
  let position = [localStorage.getItem('lat'), localStorage.getItem('lon')]
  if(error) {
    return(
      <div className='w-[41.5%] h-[55%] flex justify-between p-3 bg-white rounded-3xl relative bottom-[384px] left-[58.5%] overflow-hidden'></div>
    )
  } else { 
  return (
    <div className='w-[41.5%] h-[55%] flex justify-between p-3 bg-white rounded-3xl relative bottom-[384px] left-[58.5%] overflow-hidden'>
      <MapContainer center={position} zoom={11} style={{ height: "100%", width: "100%" }} className='rounded-xl'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <TileLayer
          url={`http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${key}`}
          attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        />
      </MapContainer>
    </div>
  )
}
}


export default WeatherMap