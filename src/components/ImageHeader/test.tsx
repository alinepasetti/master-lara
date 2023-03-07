import { screen } from '@testing-library/react';
import { ImageHeader } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<ImageHeader />', () => {
  it('should render a ImageHeader', () => {
    renderTheme(<ImageHeader text="image text" srcImage="image.jpg" />);
    expect(screen.getByAltText('image text')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
});
