import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import { TaskStarter } from '../TaskStarter';
import userEvent from '@testing-library/user-event';

const translations: Record<string, string> = {
  'newTask': 'New Task...'
}

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => translations[key] || key,
}))

describe('TaskStarter', () => {
  test('should render successfully', () => {
    render(<TaskStarter />)

    const el = screen.getByTestId('task-starter-control');
    expect(el).toBeInTheDocument();
  })

  test('should render with correct placeholder', () => {
    render(<TaskStarter />);

    const el = screen.getByPlaceholderText(translations.newTask);
    expect(el).toBeInTheDocument();
  })

  test('should render with correct text', async () => {
    render(<TaskStarter />)

    const el = screen.getByTestId('input-control');
    await userEvent.type(el, 'test');
    await waitFor(() => {
      expect(el).toHaveValue('test')
    })
  })
})
