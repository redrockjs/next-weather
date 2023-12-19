import s from './Favorites.module.scss';
import { CloseIcon } from '@view/Favorites/Favorites.svg';

function Favorites() {
  return (
    <>
      <div className={s.Favorites}>
        {favoritesData.map((city, idx) => (
          <div key={idx} className={s.Favorites__city}>
            <img src="/images/weather/weather.png" alt="Cloud" />
            <p>
              {city.name}
              <span>{city.temp}°C</span>
            </p>
            <CloseIcon className={s.CloseIcon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorites;

const favoritesData = [
  { weather: 'cloud', name: 'Moscow', temp: '14' },
  { weather: 'rain', name: 'Sankt-Petersburg', temp: '12' },
  { weather: 'rain', name: 'Sochi', temp: '21' },
  { weather: 'sun', name: 'Rostov-on-don', temp: '18' },
  { weather: 'sun', name: 'Krasnodar', temp: '19' },
  { weather: 'cloud', name: 'Krasnoyarsk', temp: '13' },
];
