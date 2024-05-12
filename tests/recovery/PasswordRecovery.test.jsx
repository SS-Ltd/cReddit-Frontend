import { describe, it, expect, afterEach, vi } from 'vitest';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import PasswordRecovery from '@/Components/recovery/PasswordRecovery';
import { patchRequest, postRequest } from '@/services/Requests';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

// Mock the postRequest function
vi.mock('@/services/Requests', async (importOriginal) => ({
  ...await importOriginal(),
  postRequest: vi.fn(() => Promise.resolve({ status: 200 })),
  patchRequest: vi.fn(() => Promise.resolve({ status: 200 })),

}));

describe('PasswordRecovery Component', () => {
  it('should accept a valid password', async () => {
    render(
      <MemoryRouter>
        <PasswordRecovery />
      </MemoryRouter>
    );
    const newPasswordInput = screen.getByLabelText('New Password');
    fireEvent.change(newPasswordInput, { target: { value: 'validPassword123' } });

    // Check if Continue button is enabled
    expect(screen.getByRole('button', { name: 'Continue' })).toBeEnabled();
  });

  it('should not accept an invalid password', async () => {
    render(
      <MemoryRouter>
        <PasswordRecovery />
      </MemoryRouter>);
    const newPasswordInput = screen.getByLabelText('New Password');
    fireEvent.change(newPasswordInput, { target: { value: 'short' } });

    // Check if Continue button is disabled
    expect(screen.getByRole('button', { name: 'Continue' })).toHaveAttribute('aria-disabled', 'true');
  });

  it('should check if passwords match', async () => {
    render(<MemoryRouter>
      <PasswordRecovery />
    </MemoryRouter>);
    const newPasswordInput = screen.getByLabelText('New Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm New Password');

    fireEvent.change(newPasswordInput, { target: { value: 'validPassword123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'validPassword123' } });

    // Check if Continue button is enabled because passwords match
    expect(screen.getByRole('button', { name: 'Continue' })).toBeEnabled();
  });

  it('should handle form submission correctly', async () => {
    postRequest.mockImplementation(() => Promise.resolve({ status: 200 }));
    patchRequest.mockImplementation(() => Promise.resolve({ status: 200 }));
    render(<MemoryRouter>
      <PasswordRecovery />
    </MemoryRouter>);
    const newPasswordInput = screen.getByLabelText('New Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm New Password');

    fireEvent.change(newPasswordInput, { target: { value: 'validPassword123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'validPassword123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    // Verify that the postRequest was called
    expect(patchRequest).toHaveBeenCalled();
  });

  it('should disable the submit button when passwords do not match', async () => {
    render(
      <MemoryRouter>
        <PasswordRecovery />
      </MemoryRouter>
    );
    const newPasswordInput = screen.getByLabelText('New Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm New Password');

    fireEvent.change(newPasswordInput, { target: { value: 'validPassword123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'anotherPassword123' } });

    expect(screen.getByRole('button', { name: 'Continue' })).toHaveAttribute('aria-disabled', 'true');
  });
});
