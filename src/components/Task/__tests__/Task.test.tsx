import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';

import { Task } from '../Task';
import { queryClient } from '@/src/api/query-client';

const renderComponent = (name = '', start = '', end: string | null = null, waiting = false) => render(
  <QueryClientProvider client={queryClient}>
    <Task id='a1' name={name} start={start} end={end} waiting={waiting} />
  </QueryClientProvider>
)

describe('Task', () => {
  test('should render successfully', () => {
    renderComponent();

    const el = screen.getByTestId('task-control');
    expect(el).toBeInTheDocument();
  })

  test('should render with name', () => {
    renderComponent('test');

    const el = screen.getByText('test');
    expect(el).toBeInTheDocument();
  })

  test('should render with start', () => {
    renderComponent('test', '12:00:01');

    const el = screen.getByText('12:00:01');
    expect(el).toBeInTheDocument();
  })

  test('should render with range', () => {
    renderComponent('test', '12:00:01', '12:00:02');

    const el = screen.getByText('12:00:01 - 12:00:02');
    expect(el).toBeInTheDocument();
  })

  test('should render with time spent', () => {
    renderComponent('test', '12:00:01', '12:00:02');

    const el = screen.getByText('00:00:01');
    expect(el).toBeInTheDocument();
  })
});
