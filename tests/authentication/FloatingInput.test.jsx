import { render, fireEvent, waitFor } from '@testing-library/react';
import FloatingInput from '@/Components/authentication/FloatingInput';
import { it, expect, describe, vi, beforeEach } from 'vitest'

describe('FloatingInput', () => {
  let mockValidateInput;
  let mockSetInputNameOnChange;
  let mockSetBackendValidationError;
  let mockSetBackendMessage;

  beforeEach(() => {
    mockValidateInput = vi.fn();
    mockSetInputNameOnChange = vi.fn();
    mockSetBackendValidationError = vi.fn();
    mockSetBackendMessage = vi.fn();
  });

  it('renders without crashing', () => {
    render(<FloatingInput 
      id="test_id"
      label="Test Label"
      validateInput={mockValidateInput}
      setInputNameOnChange={mockSetInputNameOnChange}
      backendValidationError={null}
      setBackendValidationError={mockSetBackendValidationError}
      setBackendMessage={mockSetBackendMessage}
    />);
  });

  

});