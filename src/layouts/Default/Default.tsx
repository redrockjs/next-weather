import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Default = ({ children }: Props) => {
  return <>{children}</>;
};

export default Default;
