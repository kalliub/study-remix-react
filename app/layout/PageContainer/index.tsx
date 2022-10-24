import type { ReactElement } from 'react';

interface IPageContainerProps {
  children: ReactElement | ReactElement[];
}

const PageContainer = ({ children }: IPageContainerProps) => {
  return <div className="page-container">{children}</div>;
};

export default PageContainer;
