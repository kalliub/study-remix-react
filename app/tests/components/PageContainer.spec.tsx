import PageContainer from 'layout/PageContainer';
import { setup } from 'tests/setup';

describe('PageContainer component', () => {
  const pageContainerTestString = 'dummy test text';
  const component = () =>
    setup(
      <PageContainer>
        <span>{pageContainerTestString}</span>
      </PageContainer>
    );

  it('renders children', () => {
    const { getByText } = component();
    expect(getByText(pageContainerTestString)).toBeInTheDocument();
  });
});
