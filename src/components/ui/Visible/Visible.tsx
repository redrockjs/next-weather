import s from './Visible.module.scss';
import { ReactNode } from 'react';

type VisibleProps = {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
  className?: string;
  children: ReactNode;
};

function Visible({ mobile, tablet, desktop, className, children }: VisibleProps) {
  const classNames: string[] = [];

  if (className) {
    classNames.push(className);
  }

  if (mobile) {
    classNames.push(s.Mobile);
  }

  if (tablet) {
    classNames.push(s.Tablet);
  }

  if (desktop) {
    classNames.push(s.Desktop);
  }

  return <div className={classNames.join(' ')}>{children}</div>;
}

export default Visible;
