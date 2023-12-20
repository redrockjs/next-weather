import s from './Current.module.scss';
import {
  FeelsIcon,
  HumidityIcon,
  PressureIcon,
  UVIcon,
  VisibilityIcon,
  WindArrow,
  WindIcon,
} from './Current.svg';

type TCurrent = {
  temperature: number;
  weather: string;
  wind: number;
  windDirection: number;
  pressure: number;
  humidity: number;
  visibility: number;
  uv: number;
  feels: number;
};

type CurrentProps = {
  data: TCurrent;
};

function Current({ data }: CurrentProps) {
  return (
    <div className={s.Widget}>
      <div className={s.Widget__image}>
        <img src="/images/weather/weather.png" alt="sun" />
      </div>
      <div className={s.Widget__temp}>
        <p>{data.temperature} °C</p>
        <p>{data.weather}</p>
      </div>
      <div className={s.Widget__item}>
        <WindIcon className={s.WindIcon} />
        <p>{data.wind} m/s</p>
        <WindArrow className={s.WindArrow} />
      </div>
      <div className={s.Widget__item}>
        <PressureIcon className={s.PressureIcon} />
        <p>{data.pressure} mm.</p>
      </div>
      <div className={s.Widget__item}>
        <HumidityIcon className={s.HumidityIcon} />
        <p>{data.humidity}%</p>
      </div>
      <div className={s.Widget__item}>
        <VisibilityIcon className={s.VisibilityIcon} />
        <p>{data.visibility} km.</p>
      </div>
      <div className={s.Widget__item}>
        <UVIcon className={s.UVIcon} />
        <p>{data.uv}</p>
      </div>
      <div className={s.Widget__item}>
        <FeelsIcon className={s.FeelsIcon} />
        <p>{data.feels}°C</p>
      </div>
    </div>
  );
}

export default Current;
