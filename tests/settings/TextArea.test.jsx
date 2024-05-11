import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import TextArea from '@/Components/settings/components/TextArea';

afterEach(() => {
  cleanup();
});

describe('TextArea Component', () => {
  it('triggers the onTextChange callback when text is modified and focus is lost', async () => {
    const mockOnTextChange = vi.fn();

    render(
      <TextArea
        id="test-textarea"
        placeholder="Type something..."
        initText="Original Text"
        maxLength={50}
        onTextChange={mockOnTextChange}
      />
    );

    const textArea = screen.getByPlaceholderText('Type something...');
    fireEvent.change(textArea, { target: { value: 'Changed Text' } });
    fireEvent.blur(textArea);

    // Check if the callback was called with the updated text
    expect(mockOnTextChange).toHaveBeenCalledWith('Changed Text');
    expect(mockOnTextChange).toHaveBeenCalledTimes(1);
  });

  it('does not trigger the onTextChange callback if text remains unchanged', async () => {
    const mockOnTextChange = vi.fn();

    render(
      <TextArea
        id="test-textarea"
        placeholder="Enter text..."
        initText="Unchanged Text"
        maxLength={100}
        onTextChange={mockOnTextChange}
      />
    );

    const textArea = screen.getByPlaceholderText('Enter text...');
    fireEvent.focus(textArea); // Records the initial value
    fireEvent.blur(textArea); // Without changing the value

    // Check that the callback was not called
    expect(mockOnTextChange).not.toHaveBeenCalled();
  });
});
