import s from './SignIn.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import { fetchAccount, fetchSession } from '@api/index';
import { useUserStore } from '@store/useUserStore';

import { RoutesEnum } from '@constants/routes';
import { Button, Input } from '@ui/index';
import { FaceBookIcon, GoogleIcon, LockIcon, MailIcon } from '@constants/icons';
import { Toast } from '@ui/Toast/Toast';

function SignIn() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { setSession, setAccount } = useUserStore();

  const [openToast, setOpenToast] = useState(false);

  const onSignIn = async () => {
    try {
      const session = await fetchSession({ email: email ?? '', password: password ?? '' });
      setSession(session);
      const account = await fetchAccount();
      setAccount(account);
      setOpenToast(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={s.SignIn}>
        <h2 className={s.SignIn__header}>Sign in</h2>
        <div className={clsx(s.SignIn__row, s.SignIn__row_sub)}>
          <p className={s.SignIn__account}>Don't have an account? </p>
          <p className={s.SignIn__login}>
            <Link href={RoutesEnum.SIGNUP}>Sign Up</Link>
          </p>
        </div>

        <div className={clsx(s.SignIn__row, s.SignIn__row_center)}>
          <MailIcon />
          <Input
            className={s.SignIn__input}
            placeholder={'name@email.com'}
            value={email}
            onChange={setEmail}
            autoComplete="off"
          />
        </div>
        <div className={clsx(s.SignIn__row, s.SignIn__row_center)}>
          <LockIcon />
          <Input
            className={s.SignIn__input}
            placeholder={'******'}
            value={password}
            onChange={setPassword}
            autoComplete="off"
            type="password"
          />
        </div>

        <div className={s.SignIn__row_center}>
          <Button classname={s.SignInBtn} onClick={onSignIn}>
            Sign In
          </Button>
        </div>

        <div className={clsx(s.SignIn__row, s.SignIn__row_center, s.SignIn__row_line)}>
          <p className={s.SignIn__line}>Or with</p>
        </div>

        <div className={clsx(s.SignIn__row, s.SignIn__row_center)}>
          <Button classname={s.FacebookBtn}>
            <FaceBookIcon />
            Login with Facebook
          </Button>
        </div>

        <div className={clsx(s.SignIn__row, s.SignIn__row_center)}>
          <Button classname={s.GoogleBtn}>
            <GoogleIcon />
            Login with Google
          </Button>
        </div>
      </div>
      <Toast
        open={openToast}
        onOpenChange={setOpenToast}
        title="Message"
        description="Sign in successfull"
      />
    </>
  );
}

export default SignIn;
