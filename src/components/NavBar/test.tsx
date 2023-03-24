import { screen } from '@testing-library/react';
import NavBar from '../NavBar';
import { renderTheme } from '../../styles/render-theme';

describe('<NavBar />', () => {
  it('should render a nav bar', () => {
    renderTheme(<NavBar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
