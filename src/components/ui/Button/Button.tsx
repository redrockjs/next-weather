import s from './Button.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonProps = {
  classname?: string;
  children: ReactNode;
};

function Button({ children, classname }: ButtonProps) {
  return (
    <>
      <button className={clsx(s.Button, classname)}>{children}</button>
    </>
  );
}

export default Button;
