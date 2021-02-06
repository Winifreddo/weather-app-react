import React from "react";

export default function Row() {
  
  let overviewData = {
description: "Snowing",
humidity: "0",
temperature: "0",
wind: "15",
weatherUrl: "https://ssl.gstatic.com/onebox/weather/64/snow.png"
  };
  return (
    <div className="forecast">
    <div className="row">
      <div className="col-6">
        <div className="clearfix image">
          <img src={overviewData.weatherUrl} alt={overviewData.description} class="float-left" />
          <span className="float-left">
<span className="Temperature">
            <strong>{overviewData.temperature}</strong>
            </span>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
              </span>
              </span>
              </div>
              </div>

              <div className="col-5" >
            <ul>
                <li>{overviewData.description}</li>
                <li>Humidity:{overviewData.humidity}%</li>
                <li>Wind: {overviewData.wind} km/h</li>
                </ul>
                </div>
                </div>
                </div>
            
            
             
                
              
  );
}
