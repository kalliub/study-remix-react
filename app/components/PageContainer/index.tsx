import type { ReactElement } from 'react';
import './index.css';

interface IPageContainerProps {
  children: ReactElement | ReactElement[];
}

const PageContainer = ({ children }: IPageContainerProps) => {
  return <div className="page-container">{children}</div>;
};

export default PageContainer;
