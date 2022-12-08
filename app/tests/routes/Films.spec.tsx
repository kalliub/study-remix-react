import Index from 'routes/index';
import { setup } from 'tests/setup';

describe('Index Page', () => {
  const component = () => setup(<Index />);

  it('renders basic layout', () => {
    const { getByText } = component();
    expect(getByText('Studio Ghibli Movies')).toBeInTheDocument();
  });
});
