"use client"
import { MyContext } from '@/Helper/Context'
import React, { useState, useEffect, useContext, useMemo } from 'react'

const Location = () => {
  const {data} = useContext(MyContext)
  const {error} = useContext(MyContext)
  const weather = useMemo(() => {}, [data])
  const city = localStorage.getItem('city') ? localStorage.getItem('city') : "New Delhi";
  // const dateTime = new Date(String(data.location?.localtime))
  const [time, setTime] = useState(new Date())
  const t = new Intl.DateTimeFormat("en-in", {
    dateStyle: "full",
    timeStyle: "medium"
  })
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [time])

  if (error) {
    return(
      <div></div>
    )
  } else{
  return (
    <div>
        <p className='text-xl font-bold text-slate-700 tracking-wide'>{data.location?.name}, {data.location?.country}</p>
        <p className='tracking-wide text-xs text-slate-700'>{t.format(time)}</p>
    </div>
  )
}
}

export default Location