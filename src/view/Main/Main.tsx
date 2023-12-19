import s from './Main.module.scss';
import {
  FeelsIcon,
  HumidityIcon,
  PressureIcon,
  UVIcon,
  VisibilityIcon,
  WindArrow,
  WindIcon,
} from '@view/Main/Main.svg';

function Main() {
  return (
    <div className={s.Main}>
      <div className={s.Main__top}>
        <div className={s.Widget}>
          <div className={s.Widget__image}>
            <img src="/images/weather/weather.png" alt="sun" />
          </div>
          <div className={s.Widget__temp}>
            <p>14 °C</p>
            <p>Rain</p>
          </div>
          <div className={s.Widget__item}>
            <WindIcon className={s.WindIcon} />
            <p>5 m/s</p>
            <WindArrow className={s.WindArrow} />
          </div>
          <div className={s.Widget__item}>
            <PressureIcon className={s.PressureIcon} />
            <p>768 mm.</p>
          </div>
          <div className={s.Widget__item}>
            <HumidityIcon className={s.HumidityIcon} />
            <p>58%</p>
          </div>
          <div className={s.Widget__item}>
            <VisibilityIcon className={s.VisibilityIcon} />
            <p>10 km.</p>
          </div>
          <div className={s.Widget__item}>
            <UVIcon className={s.UVIcon} />
            <p>0</p>
          </div>
          <div className={s.Widget__item}>
            <FeelsIcon className={s.FeelsIcon} />
            <p>10°C</p>
          </div>
        </div>
        <div className={s.Main__map}>
          <img src="/images/dash/map.png" alt="map" />
        </div>
      </div>
      <div className={s.Main__today}>today</div>
      <div className={s.Main__week}>week</div>
    </div>
  );
}

export default Main;

const currentWeatherData = {
  temperature: 14,
  weather: 'rain',
  wind: 5,
  windDirection: 90,
  pressure: 768,
  humidity: 58,
  visibility: 10,
  uv: 0,
  feels: 10,
};
