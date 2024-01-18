import s from './Settings.module.scss';
import { useState } from 'react';
import { Switch } from '@ui/index';

function Settings() {
  const [temperature, setTemperature] = useState('°C');
  const [windForce, setWindForce] = useState('m/s');
  const [pressure, setPressure] = useState('mmHg');
  const [geolocation, setGeolocation] = useState('On');

  return (
    <div className={s.Settings}>
      <div className={s.Settings__row}>
        <p>Temperature</p>
        <Switch values={['°C', '°F']} selectedValue={temperature} onChange={setTemperature} />
      </div>
      <div className={s.Settings__row}>
        <p>Wind force</p>
        <Switch values={['m/s', 'km/h']} selectedValue={windForce} onChange={setWindForce} />
      </div>
      <div className={s.Settings__row}>
        <p>Pressure</p>
        <Switch values={['mmHg', 'GPa']} selectedValue={pressure} onChange={setPressure} />
      </div>
      <div className={s.Settings__row}>
        <p>Geolocation</p>
        <Switch values={['On', 'Off']} selectedValue={geolocation} onChange={setGeolocation} />
      </div>
      <div className={s.Settings__row}>
        <p>Localization</p>
      </div>
      <div className={s.Settings__row}>
        <p>Change password</p>
      </div>
      <div className={s.Settings__row}>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Settings;
