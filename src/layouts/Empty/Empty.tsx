import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Empty = ({ children }: Props) => {
  return <>{children}</>;
};

export default Empty;
