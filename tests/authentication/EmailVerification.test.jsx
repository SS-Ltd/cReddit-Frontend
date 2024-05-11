import { render, fireEvent } from '@testing-library/react';
import EmailVerification from '@/Components/authentication/reset_components/EmailVerification';
import { test, expect, describe, beforeEach, vi} from 'vitest'

describe('EmailVerification', () => {
  let mockSetIsOpenedEmailVerification;
  let mockSetIsOpenedForgotPass;
  let mockSetIsOpenedForgotUsername;

  beforeEach(() => {
    mockSetIsOpenedEmailVerification = vi.fn();
    mockSetIsOpenedForgotPass = vi.fn();
    mockSetIsOpenedForgotUsername = vi.fn();
  });
  

  test('renders without crashing', () => {
    render(<EmailVerification 
      setIsOpenedEmailVerification={mockSetIsOpenedEmailVerification}
      setIsOpenedForgotPass={mockSetIsOpenedForgotPass}
      setIsOpenedForgotUsername={mockSetIsOpenedForgotUsername}
      isPrevForgotPassOrUsername={false}
    />);
  });

  test('calls setIsOpenedEmailVerification when close button is clicked', async () => {
    const { getAllByTestId } = render(<EmailVerification 
      setIsOpenedEmailVerification={mockSetIsOpenedEmailVerification}
      setIsOpenedForgotPass={mockSetIsOpenedForgotPass}
      setIsOpenedForgotUsername={mockSetIsOpenedForgotUsername}
      isPrevForgotPassOrUsername={false}
    />);
    const closeButton = getAllByTestId('email_verify_close')[1];
    fireEvent.click(closeButton);
    expect(mockSetIsOpenedEmailVerification).toHaveBeenCalledWith(false);
  });

});