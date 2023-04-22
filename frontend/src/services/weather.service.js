import axios from "axios";

const url = "http://localhost:5000";
const WeatherService = {
  getTemperature: async () => {
    const { data } = await axios.get(url + "/weather");
    // "https://api.open-meteo.com/v1/forecast?latitude=22.30&longitude=73.21&hourly=temperature_2m&daily=weathercode,sunrise,sunset&current_weather=true&forecast_days=1&timezone=auto"
    let icon_source =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    // console.log(data.main.temp);
    // console.log(icon_source);
    let data1 = {
      data,
      icon_source,
    };
    return data1;
  },
};

export default WeatherService;
