import s from './Main.module.scss';
import { Current, Map, Today, Week } from '@pages/index';
import { currentWeatherData, todayWeatherData, weekWeatherData } from '@view/Main/Main.defaults';
import { fetchSession } from '@api/mutations/useSessionMutation';
import { fetchAccount } from '@api/queries';

function Main() {
  // fetchSession({ email: '', password: '' })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // fetchAccount()
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  return (
    <div className={s.Main}>
      <div className={s.Main__top}>
        <Current data={currentWeatherData} />
        <Map />
      </div>
      <Today data={todayWeatherData} />
      <Week data={weekWeatherData} />
    </div>
  );
}

export default Main;
