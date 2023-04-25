import { Card, Grid, Input, Text } from "@nextui-org/react";
import React, { useState } from "react";
import WeatherService from "../services/weather.service";
import "../styles/weather.css";

const WeatherComp = () => {
  const [place, setPlace] = useState("vadodara");
  const [temperature, setTemperature] = useState("29");
  const [icons, setIcons] = useState("");
  const [data, setData] = useState();
  //   useEffect(() => {
  //     fetchNews(place);
  //   }, [place]);

  const handleChange = (e) => {
    setPlace(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNews(place);
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    setPlace("");
  };

  const fetchNews = async (place) => {
    try {
      const res = await WeatherService.getTemperature(place);
      setPlace(place);
      setTemperature(res.data.main.temp);
      setIcons(res.icon_source);
      setData(res.data);
      // console.log("res.data", res);
    } catch (e) {
      console.log(e);
      setPlace(null);
    }
    console.log(data);
  };
  return (
    <>
      <Card css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
          <div style={{ width: "25px", height: "25px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {place}
              </Text>
            </Grid>
          </Grid.Container>
          <form onSubmit={handleSubmit}>
            <Input
              clearable
              bordered
              placeholder="location"
              aria-label="Search"
              onClick={handleTextChange}
              onChange={handleChange}
            />
          </form>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$2" }}>
          <Text>
            <div className="main-temp">
              <h2 className="temp-head">{temperature}°C</h2>
              <img className="img-style" alt="weather-icon" src={icons} />
              <h4 className="temperature">{data?.weather[0].description}</h4>
              <p className="description"></p>
            </div>

            <div className="details-flex">
              <div className="humidity">
                <div className="text">
                  <span>{data?.main.humidity}</span>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="wind">
                <div className="text">
                  <span>{data?.wind.speed}</span>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </>
  );
};

export default WeatherComp;
