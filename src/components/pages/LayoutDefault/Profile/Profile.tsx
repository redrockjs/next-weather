import clsx from 'clsx';
import s from './Profile.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Profile() {
  const router = useRouter();

  const isLogged = false;

  const handleSignIn = () => {
    router.push('/signin');
  };
  const handleSignUp = () => {
    router.push('/signup');
  };

  return (
    <div className={s.Profile}>
      {isLogged ? (
        <>
          <div className={s.Profile__user}>
            <p>
              Hello, <br />
              <span>Alex Smith</span>
            </p>
          </div>
          <div className={s.Profile__photo}>
            <Image src="/images/avatar/avatar.png" width={60} height={60} alt="Alex Smith" />
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
