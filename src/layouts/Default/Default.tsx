import s from './Default.module.scss';
import { ReactNode } from 'react';
import { Location, Profile, Search } from '@pages/index';
import { DashIcon, FavoritesIcon, Logo, LogoutIcon, MenuIcon, SettingsIcon } from './Default.svg';
import Link from 'next/link';
import { RoutesEnum } from '@constants/routes';
import { useRemoveEmailSession } from '@api/mutations/useRemoveEmailSession';
import { useUserStore } from '@store/useUserStore';
import toast from 'react-hot-toast';

type Props = {
  children: ReactNode;
};

const Default = ({ children }: Props) => {
  const signOut = useRemoveEmailSession();
  const { clearAccount } = useUserStore();

  const onLogout = async () => {
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
    <div className={s.Container}>
      <div className={s.Sidebar}>
        <Link href={RoutesEnum.HOME}>
          <Logo className={s.LogoIcon} />
          <h1>isCloudly?!</h1>
        </Link>

        <div className={s.Sidebar__menu}>
          <Link href={RoutesEnum.HOME}>
            <DashIcon className={s.DashIcon} />
          </Link>
          <Link href={RoutesEnum.FAVORITES}>
            <FavoritesIcon className={s.FavoritesIcon} />
          </Link>
          <Link href={RoutesEnum.SETTINGS}>
            <SettingsIcon className={s.SettingsIcon} />
          </Link>
        </div>
        <div className={s.Sidebar__logout} onClick={onLogout}>
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
          <Link href={RoutesEnum.HOME}>
            <Logo className={s.LogoIcon} />
            <h1>isCloudly?!</h1>
          </Link>
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

      <div className={s.Wrapper}>{children}</div>
    </div>
  );
};

export default Default;
