import s from './Today.module.scss';
import { useWindowSize } from 'react-use';

type TToday = {
  time: string;
  weather: string;
  temp: number;
};

type TodayProps = {
  data: TToday[];
};

function Today({ data }: TodayProps) {
  const { width } = useWindowSize();
  const count = width >= 1440 ? 10 : width < 1440 && width >= 768 ? 8 : 6;

  return (
    <div className={s.Today}>
      {data.slice(0, count).map((item, idx) => (
        <div key={idx} className={s.Today__item}>
          <p className={s.Today__text}>{item.time}</p>
          <img className={s.Today__image} src="/images/weather/rain.png" alt="rain" />
          <p className={s.Today__text}>{item.temp}°C</p>
        </div>
      ))}
    </div>
  );
}

export default Today;
