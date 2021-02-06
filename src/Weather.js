import React from "react";

export default function Weather() {

let weatherData ={
city: "London, UK",
day: "Tuesday",
date: "12th Jan",
Time: "18.00"
};
  return (
    <div className="Weather">
      <h1>{weatherData.city} 📍</h1>
      <ul>
        <li>{weatherData.day}, {weatherData.date} | {weatherData.Time}</li>
        
        
      </ul>

    </div>
  );
}
