import s from './Settings.module.scss';
import { useState } from 'react';
import { Select, Switch } from '@ui/index';

function Settings() {
  const [temperature, setTemperature] = useState('°C');
  const [windForce, setWindForce] = useState('m/s');
  const [pressure, setPressure] = useState('mmHg');
  const [geolocation, setGeolocation] = useState('On');
  const [country, setCountry] = useState('English');

  const handleChangePassword = () => {};
  const handleLogout = () => {};

  return (
    <div className={s.Settings}>
      <div className={s.Settings__row}>
        <p>Temperature</p>
        <Switch
          classname={s.Switch}
          values={['°C', '°F']}
          selectedValue={temperature}
          onChange={setTemperature}
        />
      </div>
      <div className={s.Settings__row}>
        <p>Wind force</p>
        <Switch
          classname={s.Switch}
          values={['m/s', 'km/h']}
          selectedValue={windForce}
          onChange={setWindForce}
        />
      </div>
      <div className={s.Settings__row}>
        <p>Pressure</p>
        <Switch
          classname={s.Switch}
          values={['mmHg', 'GPa']}
          selectedValue={pressure}
          onChange={setPressure}
        />
      </div>
      <div className={s.Settings__row}>
        <p>Geolocation</p>
        <Switch
          classname={s.Switch}
          values={['On', 'Off']}
          selectedValue={geolocation}
          onChange={setGeolocation}
        />
      </div>
      <div className={s.Settings__column}>
        <p>Localization</p>
        <Select
          className={s.Select}
          value={country}
          placeholder={'Select'}
          items={countriesData}
          onSelect={setCountry}
        />
      </div>
      <div className={s.Settings__row}>
        <p className={s.Settings__link} onClick={handleChangePassword}>
          Change password
        </p>
      </div>
      <div className={s.Settings__row}>
        <p className={s.Settings__link} onClick={handleLogout}>
          Logout
        </p>
      </div>
    </div>
  );
}

export default Settings;

const countriesData = [
  { value: 'English', label: 'English' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Spain', label: 'Spain' },
];
