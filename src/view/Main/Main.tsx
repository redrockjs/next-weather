import s from './Main.module.scss';

function Main() {
  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <div className={s.Menu}>Menu</div>
        <div className={s.Logo}>Logo</div>
        <div className={s.Search}>Search</div>
        <div className={s.Profile}>Profile</div>
        <div className={s.Main}>Main</div>
      </div>
    </div>
  );
}

export default Main;
