import clsx from 'clsx';
import s from './Profile.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useUserStore } from '@store/useUserStore';
import Link from 'next/link';
import { RoutesEnum } from '@constants/routes';

function Profile() {
  const router = useRouter();

  const { account } = useUserStore();

  const isLogged = account;

  const handleSignIn = () => {
    router.push('/signin');
  };
  const handleSignUp = () => {
    router.push('/signup');
  };

  const Avatar = () => {
    return (
      <div className={s.Profile__circle}>{account?.name[0]}</div>
      // <Image src="/images/avatar/avatar.png" width={60} height={60} alt="Alex Smith" />
    );
  };

  return (
    <div className={s.Profile}>
      {isLogged ? (
        <>
          <div className={s.Profile__user}>
            <Link href={RoutesEnum.SETTINGS}>
              <p>
                Hello, <br />
                <span>{account.name}</span>
              </p>
            </Link>
          </div>
          <div className={s.Profile__photo}>
            <Link href={RoutesEnum.SETTINGS}>
              <Avatar />
            </Link>
          </div>
        </>
      ) : (
        <>
          <p className={s.Profile__menu}>
            <button onClick={handleSignIn}>Sign in</button>
            <span>|</span>
            <button className={s.Profile__menu__btn} onClick={handleSignUp}>
              Sign up
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Profile;
