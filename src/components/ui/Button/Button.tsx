import s from './Button.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonProps = {
  classname?: string;
  children: ReactNode;
  onClick?: () => void;
};

function Button({ children, classname, onClick }: ButtonProps) {
  return (
    <>
      <button className={clsx(s.Button, classname)} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
