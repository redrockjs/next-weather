import s from './Default.module.scss';
import { ReactNode } from 'react';
import { Location, Profile, Search } from '@pages/index';
import { DashIcon, FavoritesIcon, Logo, LogoutIcon, SettingsIcon } from './Default.svg';

type Props = {
  children: ReactNode;
};

const Default = ({ children }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.Sidebar}>
        <Logo />
        <h1>isCloudly?!</h1>

        <div className={s.Sidebar__menu}>
          <DashIcon />
          <FavoritesIcon />
          <SettingsIcon />
        </div>
        <div className={s.Sidebar__logout}>
          <LogoutIcon />
        </div>
      </div>
      <div className={s.Main}>
        <div className={s.Top}>
          <Location />
          <Search />
          <Profile />
        </div>

        <div className={s.Content}>{children}</div>
      </div>
    </div>
  );
};

export default Default;
