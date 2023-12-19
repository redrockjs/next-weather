import s from './Hidden.module.scss';
import { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

type HiddenProps = {
  className?: string;
  children: ReactNode;
  mobile?: boolean;
  tablet?: boolean;
  down?: 'mobile' | 'tablet' | 'laptop' | 'desktop';
  up?: 'mobile' | 'tablet' | 'laptop' | 'desktop';
  element?: 'div' | 'span' | 'section';
  style?: CSSProperties;
  responsive?: boolean;
};

function Hidden({
  className,
  children,
  mobile,
  tablet,
  up,
  down,
  element = 'div',
  style,
  responsive = false,
}: HiddenProps) {
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

  if (up === 'mobile') {
    classNames.push(s.MobileUp);
  }

  if (up === 'tablet') {
    classNames.push(s.TabletUp);
  }

  if (up === 'laptop') {
    classNames.push(s.LaptopUp);
  }

  if (up === 'desktop') {
    classNames.push(s.DesktopUp);
  }

  if (down === 'mobile') {
    classNames.push(s.MobileDown);
  }

  if (down === 'tablet') {
    classNames.push(s.TabletDown);
  }
  if (down === 'laptop') {
    classNames.push(s.LaptopDown);
  }

  if (down === 'desktop') {
    classNames.push(s.DesktopDown);
  }

  const Element = element;
  return (
    <Element
      className={clsx(classNames, {
        [s.Responsive]: responsive,
      })}
      style={style}
    >
      {children}
    </Element>
  );
}

export default Hidden;
