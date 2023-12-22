import React, { useState } from "react";
import "./App.css";
import { CiCloudOn } from "react-icons/ci";
import { FaTemperatureFull } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { CiCloudSun } from "react-icons/ci";
import { RiCloudWindyLine } from "react-icons/ri";

const api = {
  key: "e826e48d7151cdc606a30282e2286143",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  const handleSearch = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeatherData(result);
      });
    console.log(city);
    // const mockWeatherData = {
    //   city: " New York",
    //   temperature: 25,
    //   conditions: "Partly Cloudy",
    //   windSpeed: 10,
    //   Date: "Fri, Dec22",
    //   Humidity: 99,
    //   Visibility: 10,
    // };

    // setWeatherData(mockWeatherData);
  };

  return (
    <div className=" h-[40rem] flex flex-col bg-gradient-to-r from-[#ad36cb] to-[#323333] border-2 rounded-2xl">
      <h1 className="text-3xl text-white p-5 flex font-bold mb-4 justify-start">
        Weather App
      </h1>
      <div>
        <div className="mb-4 w-5/12 flex mx-auto">
          <input
            type="text"
            className="w-full p-2 px-5 border border-gray-300 rounded-l-lg"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-[#10b68f] text-white px-4 py-2 rounded-r-lg hover:bg-[#458f38]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          {weatherData && (
            <div className="mt-8 justify-center flex px-20">
              <p className="text-white uppercase font-bold text-2xl">
                City : {weatherData.name}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="flex gap-4 justify-center items-center">
            <FaTemperatureFull size={40} className=" invert mt-5" />
            {weatherData && (
              <div className="mt-8">
                <p className="text-4xl text-white font-bold mb-4">
                  {weatherData.main.temp}°C
                </p>
              </div>
            )}
          </div>
          <CiCloudOn size={200} className=" invert" />
        </div>
        {weatherData && (
          <div className="pt-14">
            <ul className="flex justify-center items-center gap-40">
              <li>
                <div className=" gap-5 flex flex-col justify-center items-center">
                  <div className=" flex flex-col justify-center items-center">
                    <WiHumidity size={50} className=" invert"/>
                    <label className=" text-white font-semibold text-2xl uppercase">
                      Humidity
                    </label>
                  </div>
                  <p className=" text-white font-bold text-3xl">
                    {weatherData.main.humidity}%
                  </p>
                </div>
              </li>
              <li>
                <div className=" gap-5 flex flex-col">
                <div className=" flex flex-col justify-center items-center">
                  <MdOutlineVisibility size={50} className=" invert"/>
                  <label className=" text-white font-semibold text-2xl uppercase">
                    Visibility
                  </label>
                  </div>
                  <p className=" text-white font-bold text-3xl">
                    {weatherData.visibility}m
                  </p>
                </div>
              </li>
              <li>
                <div className=" gap-5 flex flex-col">
                <div className=" flex flex-col justify-center items-center">
                  <CiCloudSun size={50} className=" invert"/>
                  <label className=" text-white font-semibold text-2xl uppercase">
                    Condition
                  </label>
                  </div>
                  <p className=" text-white font-bold text-2xl uppercase">
                    {weatherData.weather[0].main}
                  </p>
                </div>
              </li>
              <li>
                <div className=" gap-5 flex flex-col">
                <div className=" flex flex-col justify-center items-center">
                  <RiCloudWindyLine size={50} className=" invert"/>
                  <label className=" text-white font-semibold text-2xl uppercase">
                    Wind Speed
                  </label>
                  </div>
                  <p className=" text-white font-bold text-3xl">
                    {weatherData.wind.speed}km/h
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
