import { screen } from '@testing-library/react';
import { Link } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Link />', () => {
  it('should render a link', () => {
    renderTheme(<Link url="url.com">Click Me</Link>);
    const link = screen.getByRole('link', { name: 'Click Me' });
    expect(link).toBeInTheDocument();
  });

  it('should open in a new tab', () => {
    renderTheme(<Link url="url.com">Click Me</Link>);
    expect(screen.getByRole('link', { name: 'Click Me' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    renderTheme(<Link url="url.com">Click Me</Link>);
    expect(screen.getByRole('link', { name: 'Click Me' })).toMatchSnapshot();
  });
});
