import { Grid } from '@mui/material';
import type { ReactElement } from 'react';

interface IPageContainerProps {
  children: ReactElement | ReactElement[];
}

const PageContainer = ({ children }: IPageContainerProps) => {
  return <Grid container>{children}</Grid>;
};

export default PageContainer;
