import type { ReactElement } from 'react';

interface IPageContainerProps {
  children: ReactElement | ReactElement[];
}

const PageContainer = ({ children }: IPageContainerProps) => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
