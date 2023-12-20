import s from './Today.module.scss';

type TToday = {
  time: string;
  weather: string;
  temp: number;
};

type TodayProps = {
  data: TToday[];
};

function Today({ data }: TodayProps) {
  return (
    <div className={s.Today}>
      {data.map((item, idx) => (
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
