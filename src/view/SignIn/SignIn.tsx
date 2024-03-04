import s from './SignIn.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { RoutesEnum } from '@constants/routes';
import { Button, Input } from '@ui/index';
import { FaceBookIcon, GoogleIcon, LockIcon, MailIcon } from '@constants/icons';

function SignIn() {
  return (
    <>
      <div className={s.SignIn}>
        <h2 className={s.SignIn__header}>Sign up</h2>
        <div className={clsx(s.SignIn__row, s.SignIn__row_sub)}>
          <p className={s.SignIn__account}>Don't have an account? </p>
          <p className={s.SignIn__login}>
            <Link href={RoutesEnum.SIGNUP}>Sign Up</Link>
          </p>
        </div>

        <div className={clsx(s.SignIn__row, s.SignIn__row_center)}>
          <MailIcon />
          <Input className={s.SignIn__input} placeholder={'alex@smith.com'} />
        </div>
        <div className={clsx(s.SignIn__row, s.SignIn__row_center)}>
          <LockIcon />
          <Input className={s.SignIn__input} placeholder={'******'} />
        </div>

        <div className={s.SignIn__row_center}>
          <Button classname={s.SignInBtn}>Sign In</Button>
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
    </>
  );
}

export default SignIn;
