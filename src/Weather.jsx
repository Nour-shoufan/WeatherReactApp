import React, { useEffect, useState } from "react";
import image from "./ChatGPT Image 8 نوفمبر 2025، 03_50_48 م.png";
// import { Wind, Droplets } from "lucide-react";

export const Weather = () => {
  const [temp, setTemp] = useState();
  const [time, setTime] = useState();
  const [hour, setHour] = useState();
  const [windspeed, setWindspeed] = useState();
  const [humidity, setHumidity] = useState();
  const [isDay, setIsDay] = useState();

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=Europe/Berlin
`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTemp(data.current_weather.temperature);
        setTime(data.current_weather.time.split("T")[0]);
        setHour(data.current_weather.time.split("T")[1].slice(0, 5));
        setWindspeed(data.current_weather.windspeed);
        setHumidity(data.hourly.relative_humidity_2m);
        // setWindspeed(data.hourly.relative_humidity_2m);
        setIsDay(data.current_weather.is_day);
      });
  }, []);
  return (
    <div
      className="border"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2%",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          width: "350px",
          height: "450px",
          padding: "20px",
        }}
      >
        <h1 style={{ margin: "0px" }}>Today Weather</h1>

        <div
          className="time"
          style={{
            display: "flex",
            backgroundColor: "#71ce71ff",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <h6
            style={{
              padding: "12px",
              color: "white",
              marginBottom: "0px",
              fontSize: "14px",
              margin: "5px",
            }}
          >
            {hour}
            {isDay == "1" ? " am" : " bm"}
          </h6>
          <p style={{ fontSize: "15px" }}>{time}</p>
        </div>

        <span></span>

        {/* <p style={{backgroundColor}}>Friday</p> */}
        <div
          className="sid"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <img src={image} style={{ width: "200px", margin: "0px" }} />
          <div className="flex">
            <p style={{ marginTop: "30px" }}>Temperature</p>
            <h1 style={{ fontSize: "45px", margin: "0px" }}>
              {" "}
              20
              {temp}
              °C
            </h1>
          </div>
        </div>
        <div
          className="f"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <div
            className="icons"
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "gray",
              fontSize: "20px",
              width: "100px",
              height: "50px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C12 2 6 9 6 14a6 6 0 0 0 12 0c0-5-6-12-6-12z" />
            </svg>

            <p style={{ marginTop: "8px" }}>
              {windspeed}
              km/h
            </p>
          </div>

          <div
            className="ico"
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "gray",
              fontSize: "20px",
              width: "100px",
              height: "50px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M17.7 4a2 2 0 1 1 0 4H3" />
              <path d="M9.6 16a2 2 0 1 1 0 4H3" />
              <path d="M20.4 10a2 2 0 1 1 0 4H3" />
            </svg>

            <p style={{ marginTop: "8px" }}>
              {windspeed}
              km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
