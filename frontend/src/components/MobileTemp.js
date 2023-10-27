import { Image, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";

import WeatherService from "../services/weather.service";

const MobileTemp = () => {
  useEffect(() => {
    getTemperatureForMobile();
  }, []);
  const [temperature, setTemperature] = useState("27");
  const [icon, setIcon] = useState("");
  const getTemperatureForMobile = async () => {
    try {
      let res = await WeatherService.getTemperatureForMobile();
      setTemperature(res.data.main.temp);
      setIcon(res.icon_source);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Text
          h1
          size="$4xl"
          css={{ textGradient: "45deg, $pink600 -20%, $blue600 50%" }}
          weight="bold"
        >
          {temperature}°C
        </Text>
        <Image
          width={40}
          height={30}
          src={icon}
          alt=""
          objectFit="cover"
          showSkeleton
        />
      </div>
    </>
  );
};

export default MobileTemp;
