"use client"
import React, { useState , useEffect, useMemo, useContext } from 'react'
import Hours from './Hours'
import { MyContext } from '@/Helper/Context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const HourlyForecast = (props) => { 
  const {data} = useContext(MyContext)
  const {error} = useContext(MyContext)
  const weather = useMemo(() => {}, [data]) 

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const [day, setDay] = useState()
  useEffect(() => {
    if(props.weekdayId === 0){
      setDay("Today")
    }
    else{
      setDay(weekdays[(now.getDay()+props.weekdayId)%7])
    }
  }, [props.weekdayId])
  
  let hours = [];
  const hourFunc = () => {
    for (let i = 0; i < 24; i++){
      let time = String(data.forecast?.forecastday[props.weekdayId]?.hour[i]?.time).substring(11, 16);
      let rainpr = data.forecast?.forecastday[props.weekdayId]?.hour[i]?.chance_of_rain
      let temp = Math.round(data.forecast?.forecastday[props.weekdayId]?.hour[i]?.temp_c)
      let imgIcon = "https:"+data.forecast?.forecastday[props.weekdayId]?.hour[i]?.condition?.icon
      hours.push(<Hours value={{time, rainpr, temp, imgIcon}} />)
    }
    return hours;
  }

  let carouselItem = document.querySelectorAll('.carouselItem');
  const [current, setCurrent] = useState(1)
  const length  = 6;
  
  let prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    slideProductBox();
    console.log(current)
  }

  let nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    slideProductBox();
    console.log(current)
  }
  
  const slideProductBox = () => {
    carouselItem.forEach((slide) => {
          slide.style.transform = `translateX(-${current * 40}%)`;
      })
  }

  if (error) {
    return (
      <div className='w-[65%] h-[31.8%] px-4 py-2 bg-white rounded-3xl relative bottom-[138%] mt-1 left-[35%]'></div>
    )
  } else {
  return (
    <div className='w-[65%] h-[31.8%] px-4 py-2 bg-white rounded-3xl relative bottom-[138%] mt-1 left-[35%]'>
      <p className='mb-2 ml-2 font-semibold text-lg tracking-wider'>{day}</p>
      <div className="carousel flex items-center gap-2">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
        <div className="carouselContainer overflow-hidden">
          <div className="carouselTrack">
            <div className='h-full flex gap-3 w-[101.7%] cursor-pointer carouselItem' >
              {hourFunc()}
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} />
      </div>
    </div>
  )
}
}

export default HourlyForecast