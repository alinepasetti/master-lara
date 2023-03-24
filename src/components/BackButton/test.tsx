import { screen } from '@testing-library/react';
import { BackButton } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<BackButton />', () => {
  it('should render a link', () => {
    renderTheme(<BackButton />);
    const link = screen.getByTestId('back');
    expect(link).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    renderTheme(<BackButton />);
    expect(screen.getByTestId('back')).toMatchSnapshot();
  });
});
