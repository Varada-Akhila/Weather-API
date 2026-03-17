import React, { useRef, useState } from 'react'
import axios from "axios"  //install package to fetch data
import "./weather.css"

const Weather = () => {
    let city=useRef()

    let [state,setState]=useState()

    let handleChange= async (city)=>{
        console.log(city);
        if(city === "")
        {
            window.alert("enter any city name")
            return ;
        }

        let api_key='1b286342896e9733ef6bd67cf34bcf80'
        let res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
        console.log(res);

        let {data}=res
        console.log(data)

        setState(data)
    }
  return (
    <div>
        <div className="app-title">🌤 Weather Finder</div>
        <input type='text' name="" id="" ref={city} />
        <button onClick={()=>{handleChange(city.current.value)}}>search</button>
        <div>
            {
                state && <>
                    <h1>City Name: {state.name}</h1>
                    <h2>Humidity:{state.main.humidity}%</h2>
                    <h2>Temperature:{Math.floor(state.main.temp)}&deg; C</h2>
                    <h2>{state.weather[0].description}</h2>
                    <h2>Wind Speed:{state.wind.speed} km/h</h2>

                </>
            }
        </div>
    </div>
  )
}

export default Weather