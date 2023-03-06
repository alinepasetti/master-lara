import { screen } from '@testing-library/react';
import { RecipeCard } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<RecipeCard />', () => {
  it('should render a heading', () => {
    renderTheme(
      <RecipeCard label={'food'} image={''}>
        Example
      </RecipeCard>,
    );
    const heading = screen.getByRole('heading', { name: 'Example' });
    expect(heading).toBeInTheDocument();
  });
});