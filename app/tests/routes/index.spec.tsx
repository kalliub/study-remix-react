import Index from 'routes/';
import { setup } from 'tests/setup';

describe('Index Page', () => {
  const component = () => setup(<Index />);

  it('renders basic layout', () => {
    const { getByText } = component();
    expect(getByText('Index page')).toBeInTheDocument();
    expect(getByText('This is the first page!')).toBeInTheDocument();
  });

  it('renders test page link', () => {
    const { getByTestId } = component();
    expect(getByTestId('testPageLink')).toBeInTheDocument();
  });
});
