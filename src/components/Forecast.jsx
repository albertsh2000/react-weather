import React from "react"

const Forecast = ({ data }) => {
   if (data === false) return
   const { image, celcius, name, country, humidity, speed } = data
   return (
      <div className="info">
         <img className="weather_img" src={image} alt="img" />
         <h3>{celcius}°c</h3>
         <h2>
            <span className="country">{country}</span> {name}
         </h2>
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
