import s from './Default.module.scss';
import { ReactNode } from 'react';
import { Location, Profile, Search } from '@pages/index';
import { DashIcon, FavoritesIcon, Logo, LogoutIcon, MenuIcon, SettingsIcon } from './Default.svg';

type Props = {
  children: ReactNode;
};

const Default = ({ children }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.Sidebar}>
        <Logo className={s.LogoIcon} />
        <h1>isCloudly?!</h1>

        <div className={s.Sidebar__menu}>
          <DashIcon className={s.DashIcon} />
          <FavoritesIcon className={s.FavoritesIcon} />
          <SettingsIcon className={s.SettingsIcon} />
        </div>
        <div className={s.Sidebar__logout}>
          <LogoutIcon className={s.LogoutIcon} />
        </div>
      </div>

      <div className={s.Top}>
        <Location />
        <Search />
        <Profile />
      </div>

      <div className={s.TopMobile}>
        <div className={s.TopMobile__logo}>
          <Logo className={s.LogoIcon} />
          <h1>isCloudly?!</h1>
        </div>
        <div className={s.TopMobile__location}>
          <Location />
        </div>
        <div className={s.TopMobile__search}>
          <Search />
        </div>
        <div className={s.TopMobile__menu}>
          <MenuIcon className={s.MenuIcon} />
        </div>
      </div>
      <div className={s.SearchMobile}>
        <Search />
      </div>

      <div className={s.Main}>{children}</div>
    </div>
  );
};

export default Default;
