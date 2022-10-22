/* eslint-disable import/prefer-default-export */
import type { ReactElement } from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-location-mock';

export const setup = (jsx: ReactElement) => ({
  user: userEvent.setup(),
  ...render(jsx),
});
