import s from './Map.module.scss';

function Map() {
  return (
    <div className={s.Map}>
      <img className={s.Map__image} src="/images/dash/map.png" alt="map" />
    </div>
  );
}

export default Map;