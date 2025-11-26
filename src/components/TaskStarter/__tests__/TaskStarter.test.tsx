import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClientProvider } from '@tanstack/react-query';

import { TaskStarter } from '../TaskStarter';
import { queryClient } from '@/src/api/query-client';

const translations: Record<string, string> = {
  'newTask': 'New Task...'
}

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => translations[key] || key,
}));

const renderComponent = () => render(
  <QueryClientProvider client={queryClient}>
    <TaskStarter />
  </QueryClientProvider>
)

describe('TaskStarter', () => {
  test('should render successfully', () => {
    renderComponent();

    const el = screen.getByTestId('task-starter-control');
    expect(el).toBeInTheDocument();
  })

  test('should render with correct placeholder', () => {
    renderComponent();

    const el = screen.getByPlaceholderText(translations.newTask);
    expect(el).toBeInTheDocument();
  })

  test('should render with correct text', async () => {
    renderComponent();

    const el = screen.getByTestId('input-control');
    await userEvent.type(el, 'test');
    await waitFor(() => {
      expect(el).toHaveValue('test')
    })
  })
})
