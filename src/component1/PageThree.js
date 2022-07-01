import React, { useState } from "react";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";

const PageThree = (props) => {
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.input}&units=metric&appid=86a33b3bc07850d9a2d013d789d09795`;

      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { temp } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;

      const myNewWeatherInfo = {
        temp,
        weathermood,
        name,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pageThree">
      <div className="wrap">
        <div className="search">
          The current weather tempeture for
          <span className="tempName">{tempInfo.name} </span>is
          <span className="tempName">
            {tempInfo.temp}
            &deg;
          </span>
          <div className="weatherCondition">{tempInfo.weathermood}</div>
          <button
            className="searchButton"
            type="submit"
            onClick={getWeatherInfo}
          >
            check
          </button>
          <input
            type="search"
            autoFocus
            id="search"
            className="searchTerm"
            placeholder="search..."
            value={props.input}
            onChange={props.handleChangforWeather}
          />
        </div>
      </div>
    </div>
  );
};

export default PageThree;
