import s from './Location.module.scss';
import { MapIcon } from '@pages/LayoutDefault/Location/Location.svg';

function Location() {
  return (
    <div className={s.Location}>
      <MapIcon />
      <p>Russia, Sochi</p>
    </div>
  );
}

export default Location;
