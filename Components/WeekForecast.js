"use client"
import React, { useContext, useMemo, useState } from 'react'
import { MyContext } from '@/Helper/Context'

const WeekForecast = (props) => {
    const {data} = useContext(MyContext)
    const {error} = useContext(MyContext)
    const weather = useMemo(() => {}, [data])
    let img0 = "https:"+data.forecast?.forecastday[0]?.day?.condition?.icon
    let img1 = "https:"+data.forecast?.forecastday[1]?.day?.condition?.icon
    let img2 = "https:"+data.forecast?.forecastday[2]?.day?.condition?.icon
    let img3 = "https:"+data.forecast?.forecastday[3]?.day?.condition?.icon
    let img4 = "https:"+data.forecast?.forecastday[4]?.day?.condition?.icon

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const [dayid, setDayId] = useState(0)
    props.dayId(dayid)

    if (error) {
        return(
            <div className='w-[34%] h-[53%] justify-between p-2 bg-white rounded-3xl flex flex-col text-slate-700 relative bottom-[87%]'></div>
        )
    }else{
  return (
    <div className="w-[34%] h-[53%] justify-between p-2 bg-white rounded-3xl flex flex-col text-slate-700 relative bottom-[87%]">
        <div className="heading text-lg font-semibold px-2">Forecast</div>
        <div className="box flex flex-col w-full">
            <div className="row flex w-full text-sm justify-between items-center cursor-pointer hover:bg-slate-200 px-2 rounded-lg" onClick={() => setDayId(0)}>
                <div className="day font-bold">Today</div>
                <div className="details flex w-[70%] justify-between items-center">
                    <div className="rainpercent font-semibold w-[10%]">{data.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%</div>
                    <div className="prec font-semibold">{data.forecast?.forecastday[0]?.day?.totalprecip_mm}mm</div>
                    <img src={img0} alt="" className='w-[48px] h-auto' />
                    <div className="temp  w-[28%] flex justify-between items-center gap-4">
                        <div className="highTemp font-semibold">{Math.round(data.forecast?.forecastday[0]?.day?.maxtemp_c)}℃</div>
                        <div className="lowTemp font-semibold">{Math.round(data.forecast?.forecastday[0]?.day?.mintemp_c)}℃</div>
                    </div>
                </div>
            </div>
            <div className="row flex w-full text-sm justify-between items-center cursor-pointer hover:bg-slate-200 px-2 rounded-lg" onClick={() => setDayId(1)}>
                <div className="day font-bold">{weekdays[(now.getDay()+1)%7]}</div>
                <div className="details flex w-[70%] justify-between items-center">
                    <div className="rainpercent font-semibold w-[10%]">{data.forecast?.forecastday[1]?.day?.daily_chance_of_rain}%</div>
                    <div className="prec font-semibold">{data.forecast?.forecastday[1]?.day?.totalprecip_mm}mm</div>
                    <img src={img1} alt="" className='w-[48px] h-auto' />
                    <div className="temp w-[28%] flex justify-between items-center gap-4">
                        <div className="highTemp font-semibold">{Math.round(data.forecast?.forecastday[1]?.day?.maxtemp_c)}℃</div>
                        <div className="lowTemp font-semibold">{Math.round(data.forecast?.forecastday[1]?.day?.mintemp_c)}℃</div>
                    </div>
                </div>
            </div>
            <div className="row flex w-full text-sm justify-between items-center cursor-pointer hover:bg-slate-200 px-2 rounded-lg" onClick={() => setDayId(2)}>
                <div className="day font-bold">{weekdays[(now.getDay()+2)%7]}</div>
                <div className="details flex w-[70%] justify-between items-center">
                    <div className="rainpercent font-semibold w-[10%]">{data.forecast?.forecastday[2]?.day?.daily_chance_of_rain}%</div>
                    <div className="prec font-semibold">{data.forecast?.forecastday[2]?.day?.totalprecip_mm}mm</div>
                    <img src={img2} alt="" className='w-[48px] h-auto' />
                    <div className="temp  w-[28%] flex justify-between items-center gap-4">
                        <div className="highTemp font-semibold">{Math.round(data.forecast?.forecastday[2]?.day?.maxtemp_c)}℃</div>
                        <div className="lowTemp font-semibold">{Math.round(data.forecast?.forecastday[2]?.day?.mintemp_c)}℃</div>
                    </div>
                </div>
            </div>
            <div className="row flex w-full text-sm justify-between items-center cursor-pointer hover:bg-slate-200 px-2 rounded-lg" onClick={() => setDayId(3)}>
                <div className="day font-bold">{weekdays[(now.getDay()+3)%7]}</div>
                <div className="details flex w-[70%] justify-between items-center">
                    <div className="rainpercent font-semibold w-[10%]">{data.forecast?.forecastday[3]?.day?.daily_chance_of_rain}%</div>
                    <div className="prec font-semibold">{data.forecast?.forecastday[3]?.day?.totalprecip_mm}mm</div>
                    <img src={img3} alt="" className='w-[48px] h-auto' />
                    <div className="temp  w-[28%] flex justify-between items-center gap-4">
                        <div className="highTemp font-semibold">{Math.round(data.forecast?.forecastday[3]?.day?.maxtemp_c)}℃</div>
                        <div className="lowTemp font-semibold">{Math.round(data.forecast?.forecastday[3]?.day?.mintemp_c)}℃</div>
                    </div>
                </div>
            </div>
            <div className="row flex w-full text-sm justify-between items-center cursor-pointer hover:bg-slate-200 px-2 rounded-lg" onClick={() => setDayId(4)}>
                <div className="day font-bold">{weekdays[(now.getDay()+4)%7]}</div>
                <div className="details flex w-[70%] justify-between items-center">
                    <div className="rainpercent font-semibold w-[10%]">{data.forecast?.forecastday[4]?.day?.daily_chance_of_rain}%</div>
                    <div className="prec font-semibold">{data.forecast?.forecastday[4]?.day?.totalprecip_mm}mm</div>
                    <img src={img4} alt="" className='w-[48px] h-auto' />
                    <div className="temp  w-[28%] flex justify-between items-center gap-4">
                        <div className="highTemp font-semibold">{Math.round(data.forecast?.forecastday[4]?.day?.maxtemp_c)}℃</div>
                        <div className="lowTemp font-semibold">{Math.round(data.forecast?.forecastday[4]?.day?.mintemp_c)}℃</div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )}
  
}

export default WeekForecast