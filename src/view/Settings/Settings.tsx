import s from './Settings.module.scss';
import { useState } from 'react';
import { Select, Switch } from '@ui/index';
import { useRouter } from 'next/router';
import { RoutesEnum } from '@constants/routes';
import toast from 'react-hot-toast';
import { useRemoveEmailSession } from '@api/mutations/useRemoveEmailSession';
import { useUserStore } from '@store/useUserStore';

function Settings() {
  const router = useRouter();

  const signOut = useRemoveEmailSession();
  const { clearAccount } = useUserStore();

  const [temperature, setTemperature] = useState('°C');
  const [windForce, setWindForce] = useState('m/s');
  const [pressure, setPressure] = useState('mmHg');
  const [geolocation, setGeolocation] = useState('On');
  const [country, setCountry] = useState('English');

  const handleChangePassword = () => {
    router.push(RoutesEnum.RESTORE);
  };

  const handleLogout = async () => {
    try {
      await signOut.mutateAsync(
        { sessionId: localStorage.getItem('sessionId') ?? '' },
        {
          onSuccess: () => {
            clearAccount();
            localStorage.removeItem('sessionId');
            toast.success('Successfully');
          },
          onError: (error) => {
            toast.error(`${error}`);
          },
        },
      );
    } catch (e) {
      console.log('Request error', e);
    }
  };

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
