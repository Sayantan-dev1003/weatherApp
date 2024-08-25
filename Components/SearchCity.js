"use client"
import { MyContext } from '@/Helper/Context'
import React, { useState, useContext, useEffect, useMemo } from 'react'

const SearchCity = () => {
  const [city, setCity] = useState(
    localStorage.getItem('city') ? localStorage.getItem('city') : ""
  );
  const {data} = useContext(MyContext)
  const {error} = useContext(MyContext)
  const weather = useMemo(() => {
    console.log(data)
  }, [data])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('city', city)
    localStorage.setItem('lat', data.location?.lat)
    localStorage.setItem('lon', data.location?.lon)
    window.location.reload()
  };
  
  if (error) {
    return (
      <>
        <form className='w-[30%] flex'>
          <input onChange={(e) => {setCity(e.target.value)}} type="text" placeholder='Search city' className='border-2 border-zinc-400 w-full rounded-full py-2 px-5 text-zinc-700 font-semibold tracking-wide outline-none bg-transparent' />
          <button onClick={handleSubmit} type="submit" className='hidden'>Submit</button>
        </form>
      </>
    )
  } else {
  return (
    <>
      <form className='w-[30%] flex'>
        <input onChange={(e) => {setCity(e.target.value)}} type="text" placeholder='Search city' className='border-2 border-zinc-400 w-full rounded-full py-2 px-5 text-zinc-700 font-semibold tracking-wide outline-none bg-transparent' value={city} />
        <button onClick={handleSubmit} type="submit" className='hidden'>Submit</button>
      </form>
    </>
  )
}
}

export default SearchCity