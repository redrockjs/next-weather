import { Switch } from '@ui/index';
import s from './Settings.module.scss';

function Settings() {
  return (
    <div className={s.Settings}>
      <div className={s.Settings__row}>
        <p>Temperature</p>
        <Switch />
      </div>
      <div className={s.Settings__row}>
        <p>Wind force</p>
      </div>
      <div className={s.Settings__row}>
        <p>Pressure</p>
      </div>
      <div className={s.Settings__row}>
        <p>Geolocation</p>
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
