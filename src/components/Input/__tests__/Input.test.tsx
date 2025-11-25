import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '../Input';

const renderComponent = (
  value = '',
  onChange = () => { },
  placeholder = ''
) => render(<Input value={value} onChange={onChange} placeholder={placeholder} />)
describe('Input', () => {
  test('should render correctly', () => {
    renderComponent();

    const el = screen.getByTestId('input-control');
    expect(el).toBeInTheDocument();
  });

  test('should render with value', () => {
    renderComponent('test', () => { });

    const el = screen.getByDisplayValue('test');
    expect(el).toBeInTheDocument();
  });

  test('should render call onChange', async () => {
    const onChange = jest.fn();
    renderComponent('test', onChange);

    const el = screen.getByTestId('input-control');
    await userEvent.type(el, 'a')

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    })
  })

  test('should render with placeholder', () => {
    renderComponent('', () => { }, 'test');

    const el = screen.getByPlaceholderText('test');
    expect(el).toBeInTheDocument();
  })
})
