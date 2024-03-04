import s from './SignUp.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { RoutesEnum } from '@constants/routes';
import { Button, Input } from '@ui/index';
import { FaceBookIcon, GoogleIcon, LockIcon, MailIcon, PersonIcon } from '@constants/icons';

function SignUp() {
  const isRegister = false;

  return (
    <div className={s.SignUp}>
      <h2 className={s.SignUp__header}>Sign up</h2>
      {isRegister ? (
        <>
          <p className={clsx(s.SignUp__account, s.SignUp__account_padding)}>
            Your email has been successfully registered. Please check your email to complete your
            profile
          </p>
        </>
      ) : (
        <>
          <div className={clsx(s.SignUp__row, s.SignUp__row_sub)}>
            <p className={s.SignUp__account}>Already have an account? </p>
            <p className={s.SignUp__login}>
              <Link href={RoutesEnum.SIGNIN}>Login</Link>
            </p>
          </div>
          <div className={clsx(s.SignUp__row, s.SignUp__row_center)}>
            <PersonIcon />
            <Input className={s.SignUp__input} placeholder={'Alex Smith'} />
          </div>
          <div className={clsx(s.SignUp__row, s.SignUp__row_center)}>
            <MailIcon />
            <Input className={s.SignUp__input} placeholder={'alex@smith.com'} />
          </div>
          <div className={clsx(s.SignUp__row, s.SignUp__row_center)}>
            <LockIcon />
            <Input className={s.SignUp__input} placeholder={'******'} />
          </div>

          <div className={s.SignUp__row_center}>
            <Button classname={s.CreateBtn}>Create account</Button>
          </div>

          <div className={clsx(s.SignUp__row, s.SignUp__row_center, s.SignUp__row_line)}>
            <p className={s.SignUp__line}>Or with</p>
          </div>

          <div className={clsx(s.SignUp__row, s.SignUp__row_center)}>
            <Button classname={s.FacebookBtn}>
              <FaceBookIcon />
              Login with Facebook
            </Button>
          </div>

          <div className={clsx(s.SignUp__row, s.SignUp__row_center)}>
            <Button classname={s.GoogleBtn}>
              <GoogleIcon />
              Login with Google
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default SignUp;
