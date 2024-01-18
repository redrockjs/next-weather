import clsx from 'clsx';
import s from './SignUp.module.scss';
import { Button, Input } from '@ui/index';

function SignUp() {
  return (
    <>
      <div className={s.SignUp}>
        <h2 className={s.SignUp__header}>Sign up</h2>
        <div className={clsx(s.SignUp__row, s.SignUp__row_sub)}>
          <p className={s.SignUp__account}>Already have an account? </p>
          <p className={s.SignUp__login}>Login</p>
        </div>
        <div className={s.SignUp__row}>
          (%)
          <Input className={s.SignUp__input} placeholder={'Alex Smith'} />
        </div>
        <div className={s.SignUp__row}>
          (%)
          <Input className={s.SignUp__input} placeholder={'alex@smith.com'} />
        </div>
        <div className={s.SignUp__row}>
          (%)
          <Input className={s.SignUp__input} placeholder={'******'} />
        </div>

        <div className={s.SignUp__row}>
          <Button>Create account</Button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
