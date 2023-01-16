import s from "./styles.module.scss"
import {Button, Input} from "@mui/material";
import Image from "next/image";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";
import {webAPI} from "../../api/web";
import {pressurePascalToMMHg} from "../../utilities/weather";
import {useSession} from "next-auth/react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {addFavorites, removeFavorites, FavoriteCitiesType} from "../../store/rootSlice"

type CoordsType = {
  lat: number
  lon: number
}

type APIResponseType = {
  "coord":
    {
      "lon": number,
      "lat": number
    },
  "weather":
    {
      "id": number,
      "main": string,
      "description": string,
      "icon": string
    }[],
  "base": string,
  "main": {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number
  },
  "visibility": number,
  "wind": {
    "speed": number,
    "deg": number
  },
  "clouds": {
    "all": number
  },
  "dt": number,
  "sys": {
    "type": number,
    "id": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number
}

const initialData = {
  "coord": {
    "lon": 0,
    "lat": 0
  },
  "weather": [
    {"id": 0, "main": "", "description": "", "icon": ""}],
  "base": "",
  "main": {
    "temp": 0,
    "feels_like": 0,
    "temp_min": 0,
    "temp_max": 0,
    "pressure": 0,
    "humidity": 0
  },
  "visibility": 10000,
  "wind": {
    "speed": 2,
    "deg": 20
  },
  "clouds": {
    "all": 0
  },
  "dt": 1673341747,
  "sys": {
    "type": 0,
    "id": 0,
    "country": "",
    "sunrise": 0,
    "sunset": 0
  },
  "timezone": 0,
  "id": 0,
  "name": "",
  "cod": 0
}

export function Main() {

  const [coordinates, setCoordinates] = useState<CoordsType>()

  const [data, setData] = useState<APIResponseType>(initialData)

  const [cityName, setCityName] = useState<string>("")

  const {data: session, status} = useSession()

  const isAuth = useSelector<RootStateType>(state => state.root.rootReducer.isAuth) as boolean

  const favoriteCities = useSelector<RootStateType>(state => state.root.rootReducer.favoriteCities)

  const dispatch = useDispatch()

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
      })
      .catch(error => console.log(error));
  }, [coordinates])

  const handleGetByName = () => {
    webAPI.getWeatherByCityName(cityName)
      .then(result => {
        setData(result)
      })
      .catch(error => console.log(error))
  }

  const handleInputKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleGetByName()
    }
  }

  const handleAddFavorites = () => {
    console.log('add fav')
  }

  const handleRemoveFavorites = () => {
    console.log('remove fav')
  }

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
          onChange={(e) => {
            setCityName(e.target.value)
          }}
          onKeyDown={handleInputKeyDown}
        />
        <Button variant="contained" color="primary" size="small" sx={{margin: '10px'}}> Get </Button>
        <div className={s.mainCardCity}>
          <div>
            <p>Город - {data.name}</p>
          </div>

          {/*{isAuth &&*/}
          <div>
            <Icon icon="mdi:cards-heart-outline" color="red" width="24" hFlip={true} onClick={handleAddFavorites}
                  style={{cursor: "pointer"}}/>
          </div>
          {/*}*/}

        </div>
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