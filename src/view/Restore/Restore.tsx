import s from './Restore.module.scss';
import clsx from 'clsx';
import { MailIcon } from '@constants/icons';
import { Button, Input } from '@ui/index';

function Restore() {
  return (
    <>
      <div className={s.Restore}>
        <h2 className={s.Restore__header}>Restore password</h2>
        <div className={clsx(s.Restore__row, s.Restore__row_center)}>
          <MailIcon />
          <Input className={s.Restore__input} placeholder={'alex@smith.com'} />
        </div>

        <div className={s.Restore__row_center}>
          <Button classname={s.RestoreBtn}>Restore</Button>
        </div>
      </div>
    </>
  );
}

export default Restore;
