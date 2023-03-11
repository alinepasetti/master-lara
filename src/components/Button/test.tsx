import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderTheme } from '../../styles/render-theme';
import { vi } from 'vitest';

describe('<Button />', () => {
  it('should render a button', () => {
    renderTheme(<Button clickHandler={() => 'hi'}>Example</Button>);
    const button = screen.getByText('Example');
    expect(button).toBeInTheDocument();
  });

  it('should call the click handler', () => {
    const clickHandler = vi.fn();
    renderTheme(<Button clickHandler={clickHandler}>Example</Button>);
    const button = screen.getByText('Example');
    button.click();
    expect(clickHandler).toBeCalledTimes(1);
  });

  it('should match snapshot', () => {
    renderTheme(<Button clickHandler={() => 'hi'}>Example</Button>);
    expect(screen.getByText('Example')).toMatchSnapshot();
  });
});
