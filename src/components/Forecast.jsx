import React from "react"

const Forecast = ({ data }) => {
    if(data == false) return
    const {image,celcius,name,humidity,speed} = data
   return (
      <div className="info">
         <img className="weather_img" src={image} alt="img" />
         <h2>{celcius}°c</h2>
         <h3>{name}</h3>
         <div className="details">
            <div>
               <p>{humidity}%</p>
               <p>Humidity</p>
            </div>
            <div>
               <p>{speed} km/h</p>
               <p>Wind</p>
            </div>
         </div>
      </div>
   )
}

export default Forecast
