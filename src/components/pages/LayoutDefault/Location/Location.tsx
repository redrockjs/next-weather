import s from './Location.module.scss';
import { MapIcon } from './Location.svg';

function Location() {
  return (
    <div className={s.Location}>
      <MapIcon className={s.LocationIcon} />
      <p>Russia, Sochi</p>
    </div>
  );
}

export default Location;
