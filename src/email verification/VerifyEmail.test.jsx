import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import VerifyEmail from '@/views/VerifyEmail';
import { getRequest } from '@/services/Requests';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import '@testing-library/jest-dom/vitest';

vi.mock('@/services/Requests', async (importOriginal) => ({
  ...await importOriginal(),
  getRequest: vi.fn(),
}));

vi.mock('react-router-dom', async (importOriginal) => ({
  ...await importOriginal(),
  useParams: () => ({ token: 'dummyToken' }),
  useNavigate: vi.fn(),
}));

const navigateMock = useNavigate();

afterEach(() => {
  cleanup();
});

describe('VerifyEmail Component', () => {

  it('should log an error message when verification fails', async () => {
    const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {});
    getRequest.mockResolvedValueOnce({ status: 400, statusText: 'Bad Request' });

    render(
      <MemoryRouter>
        <VerifyEmail />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(consoleErrorMock).toHaveBeenCalledWith('Failed to verify email:', 400, 'Bad Request');
    });

    consoleErrorMock.mockRestore();
  });

  it('should log an error message when a network error occurs', async () => {
    const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {});
    getRequest.mockRejectedValueOnce(new Error('Network Error'));

    render(
      <MemoryRouter>
        <VerifyEmail />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(consoleErrorMock).toHaveBeenCalledWith('Error verifying email:', expect.any(Error));
    });

    consoleErrorMock.mockRestore();
  });
});
