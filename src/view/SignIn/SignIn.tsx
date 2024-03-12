import s from './SignIn.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { createEmailSessionFn, getAccountFn } from '@api/index';
import { useUserStore } from '@store/index';
import { RoutesEnum } from '@constants/routes';

import toast from 'react-hot-toast';
import { Button, Input } from '@ui/index';
import { FaceBookIcon, GoogleIcon, LockIcon, MailIcon } from '@constants/icons';

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { setAccount } = useUserStore();

  const onSignIn = async () => {
    try {
      const session = await createEmailSessionFn({ email: email ?? '', password: password ?? '' });

      if (session !== null) {
        const account = await getAccountFn();
        setAccount(account);
        localStorage.setItem('sessionId', session.$id);
      }

      router.push(RoutesEnum.HOME).then(() => {
        toast.success('Successfully logged in!');
      });
    } catch (e) {
      console.log(e);
      toast.error('Incorrect email or password');
    }
  };

  return (
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
  );
}

export default SignIn;
