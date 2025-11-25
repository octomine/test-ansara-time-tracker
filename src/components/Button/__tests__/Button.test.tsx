import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import { Button } from '../Button';
import userEvent from '@testing-library/user-event';

const renderComponent = (label = '', onClick = () => { }) => render(<Button onClick={onClick}>{label}</Button>);

describe('Button', () => {
  test('should render correctly', () => {
    renderComponent();

    const el = screen.getByTestId('button-control');
    expect(el).toBeInTheDocument();
  })

  test('should render with label', () => {
    renderComponent('test', () => { });

    const el = screen.getByText('test');
    expect(el).toBeInTheDocument();
  })

  test('should call onClick', async () => {
    const onClick = jest.fn();
    renderComponent('test', onClick);

    const el = screen.getByTestId('button-control');
    await userEvent.click(el);
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    })
  })
})
