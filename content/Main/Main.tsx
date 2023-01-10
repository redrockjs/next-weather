import s from "./main.module.scss"
import {Button, Input} from "@mui/material";
import Image from "next/image";
import {useEffect, useState} from "react";
import {webAPI} from "../../api/web";
import {pressurePascalToMMHg} from "../../utilities/weather";

type CoordsTypes = {
  lat: number
  lon: number
}

export function Main() {

  const [coordinates, setCoordinates] = useState<CoordsTypes>()

  const [data, setData] = useState<any>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        setCoordinates({lat, lon})
      }
    )
  }, [])

  useEffect(() => {
    coordinates &&
    webAPI.getWeatherByPosition(coordinates.lat, coordinates.lon)
      .then(result => {
        setData(result)
        console.log(data)
      })
      .catch(error => console.log(error));
  }, [coordinates])

  return <>
    <main className={s.main}>
      <p>
        {
          coordinates &&
          `Ваши координаты определены, как ${coordinates.lat.toFixed(2)} широты ${coordinates.lon.toFixed(2)} долготы.`
        }
      </p>
      <div className={s.mainCard}>
        <div>
          <Image
            src="/salzburg.6327137c.jpg"
            fill
            alt="Salzburg"/>
        </div>
        <Input
          color="primary"
          placeholder="Enter city name"
          size="medium"
          sx={{width: '90%'}}
        />
        <Button variant="contained" color="primary" size="small" sx={{margin: '10px'}}> Get </Button>
        <p>Город - {data.name}</p>
        <div className={s.mainCardInformation}>
          {data &&
              <>
                  <div>
                      <p>Температура воздуха {data.main.temp}°,</p>
                      <p>Ощущается как {data.main.feels_like}°</p>
                      <p>Мин-Макс,t° : {data.main.temp_min}°-{data.main.temp_max}°</p>
                      <p>Относительная влажность воздуха {data.main.humidity} %</p>
                      <p>Давление {pressurePascalToMMHg(data.main.pressure)} мм. рт. ст.</p>
                  </div>
                  <div>
                      <p>Облачность {data.clouds.all} %</p>
                      <p>Видимость {data.visibility} метров</p>
                      <p>Сила ветра {data.wind.speed} м/с</p>
                      <p>Направление {data.wind.deg}°</p>
                  </div>
              </>
          }
        </div>
      </div>
    </main>
  </>
}