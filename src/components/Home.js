import React, { useState } from "react"
import clouds from "../images/clouds.png"
import clear from "../images/clear.png"
import rain from "../images/rain.jfif"
import drizzle from "../images/drizzle.jfif"
import mist from "../images/mist.png"
import Forecast from "./Forecast"

const Home = () => {
   const [data, setData] = useState(false)
   const [name, setName] = useState("")
   const [error, setError] = useState("")

   const Api_Key = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=5046de5e3f80eb55f64b4afd062dca61&units=metric`

   let imagePath = ""

   const showImg = (info) => {
      if (info.weather[0].main === "Clouds") {
         imagePath = clouds
      } else if (info.weather[0].main === "Clouds") {
         imagePath = clear
      } else if (info.weather[0].main === "Rain") {
         imagePath = rain
      } else if (info.weather[0].main === "Drizzle") {
         imagePath = drizzle
      } else if (info.weather[0].main === "Mist") {
         imagePath = mist
      } else {
         imagePath = clouds
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (name.trim() !== "") {
         fetch(Api_Key)
            .then((res) => res.json())
            .then((info) => {
               showImg(info)
               setData({
                  ...data,
                  celcius: info.main.temp,
                  name: info.name,
                  humidity: info.main.humidity,
                  speed: info.wind.speed,
                  image: imagePath,
               })
               setName("")
               setError("")
            })
            .catch((err) => {
               err ? setError("Invalid city name") : setError("")
            })
      }
   }

   return (
      <div className="container">
         <div className="weather glass">
            <form className="search" onSubmit={handleSubmit}>
               <input
                  type="text"
                  placeholder="enter city name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
               <button className="search_btn">Search</button>
            </form>
            {error && (
               <div className="error">
                  <p>{error}</p>
               </div>
            )}
            <Forecast data={data} />
         </div>
      </div>
   )
}

export default Home
