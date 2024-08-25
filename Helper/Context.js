"use client"
import React, { createContext, useEffect, useState } from 'react'
export const MyContext = createContext();

const Context = ({children}) => {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const key = '82a72b716b2a422283580542241707'
    const city = localStorage.getItem('city') ? localStorage.getItem('city') : "New Delhi";
    const lat = localStorage.getItem('lat') ? localStorage.getItem('lat') : localStorage.setItem('lat', 28.6);
    const lon = localStorage.getItem('lon') ? localStorage.getItem('lon') : localStorage.setItem('lon', 77.2);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5&aqi=yes&alerts=yes`);
                if (!res.ok) {
                    throw new Error("City not found"); 
                }
                const response = await res.json();
                setData(response);
                setError(null); 
            } catch (error) {
                console.error(error);
                setError("Error");
                localStorage.setItem('lat', 28.6);
                localStorage.setItem('lon', 77.2);
            }
        };

        fetchData(); 
    }, []);
  return (
    <div>
        <MyContext.Provider value={{data, error}}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default Context