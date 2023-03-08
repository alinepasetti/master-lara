import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Button />', () => {
  it('should render a link', () => {
    renderTheme(<Button url="url.com">Click Me</Button>);
    const link = screen.getByRole('link', { name: 'Click Me' });
    expect(link).toBeInTheDocument();
  });

  it('should open in a new tab', () => {
    renderTheme(<Button url="url.com">Click Me</Button>);
    expect(screen.getByRole('link', { name: 'Click Me' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    renderTheme(<Button url="url.com">Click Me</Button>);
    expect(screen.getByRole('link', { name: 'Click Me' })).toMatchSnapshot();
  });
});
