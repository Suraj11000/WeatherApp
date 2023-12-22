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
  };

  return (
    <div className="  flex flex-col bg-gradient-to-r from-[#ad36cb] to-[#323333] border-2 rounded-2xl">
      <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:2text-xl text-xl text-white p-5 flex font-bold mb-4 justify-start">
        Weather App
      </h1>
      <div>
        <div className="mb-4 w-9/12 flex mx-auto">
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
              <p className="text-white uppercase font-bold xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-lg">
                City : {weatherData.name}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-wrap-reverse justify-center items-center xl:gap-10 lg:gap-10 md:gap-10 sm:gap-10">
          <div className="flex gap-4 justify-center items-center">
            <FaTemperatureFull size={40} className=" invert mt-5" />
            {weatherData && (
              <div className="mt-8">
                <p className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl text-white font-bold mb-4">
                  {weatherData.main.temp}°C
                </p>
              </div>
            )}
          </div>
          <CiCloudOn size={200} className=" invert" />
        </div>
        {weatherData && (
          <div className="pt-14 xl:pb-16 lg:pb-16 md:pb-16 sm:pb-16 pb-8">
            <ul className="flex flex-wrap justify-center items-center xl:gap-40 lg:gap-32 md:gap-28 sm:gap-24 gap-16">
              <li>
                <div className=" gap-5 flex flex-col justify-center items-center">
                  <div className=" flex flex-col justify-center items-center">
                    <WiHumidity size={50} className=" invert"/>
                    <label className=" text-white font-semibold xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl uppercase">
                      Humidity
                    </label>
                  </div>
                  <p className=" text-white font-bold xl:text-3xl lg:text-3xl md:text-2xl sm:2text-xl">
                    {weatherData.main.humidity}%
                  </p>
                </div>
              </li>
              <li>
                <div className=" gap-5 flex flex-col">
                <div className=" flex flex-col justify-center items-center">
                  <MdOutlineVisibility size={50} className=" invert"/>
                  <label className=" text-white font-semibold xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl uppercase">
                    Visibility
                  </label>
                  </div>
                  <p className=" text-white font-bold xl:text-3xl lg:text-3xl md:text-2xl sm:2text-xl">
                    {weatherData.visibility}m
                  </p>
                </div>
              </li>
              <li>
                <div className=" gap-5 flex flex-col">
                <div className=" flex flex-col justify-center items-center">
                  <CiCloudSun size={50} className=" invert"/>
                  <label className=" text-white font-semibold xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl uppercase">
                    Condition
                  </label>
                  </div>
                  <p className=" text-white font-bold xl:text-3xl lg:text-3xl md:text-2xl sm:2text-xl uppercase">
                    {weatherData.weather[0].main}
                  </p>
                </div>
              </li>
              <li>
                <div className=" gap-5 flex flex-col">
                <div className=" flex flex-col justify-center items-center">
                  <RiCloudWindyLine size={50} className=" invert"/>
                  <label className=" text-white font-semibold xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl uppercase">
                    Wind Speed
                  </label>
                  </div>
                  <p className=" text-white font-bold xl:text-3xl lg:text-3xl md:text-2xl sm:2text-xl">
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
