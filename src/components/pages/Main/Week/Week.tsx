import s from './Week.module.scss';

type TWeek = {
  day: string;
  weather: string;
  tempMin: number;
  tempMax: number;
};

type WeekProps = {
  data: TWeek[];
};

function Week({ data }: WeekProps) {
  return (
    <div className={s.Week}>
      {data.map((item, idx) => (
        <div key={idx} className={s.Week__item}>
          <p className={s.Week__text}>{item.day}</p>
          <img className={s.Week__image} src="/images/weather/rain.png" alt="rain" />
          <p className={s.Week__text}>{item.tempMax}°C</p>
          <p className={s.Week__text}>{item.tempMin}°C</p>
        </div>
      ))}
    </div>
  );
}

export default Week;
