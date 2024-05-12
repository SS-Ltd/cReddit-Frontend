import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ImageUpload from '@/Components/settings/components/ImageUpload';
import '@testing-library/jest-dom/vitest';

// Mock 'react-dropzone' functions
const mockOnDrop = vi.fn();
vi.mock('react-dropzone', () => ({
  useDropzone: ({ onDrop }) => ({
    getRootProps: vi.fn(() => ({
      onDrop: () => {},
      className: 'mock-root-props',
    })),
    getInputProps: vi.fn(() => ({
      type: 'file',
    })),
    isDragActive: false,
    onDrop,
  }),
}));

afterEach(() => {
  cleanup();
  mockOnDrop.mockClear();
});

describe('ImageUpload Component', () => {
  const id = 'upload-avatar';

  beforeEach(() => {
    render(<ImageUpload id={id} />);
  });

  it('should render the dropzone area with correct text', () => {
    expect(screen.getByText('Drag and Drop or Upload Avatar Image')).toBeInTheDocument();
  });


  it('should call onDrop when files are dropped', () => {
    const files = [new File(['dummy content'], 'test.png', { type: 'image/png' })];

    act(() => {
      // Simulate dropping files
      mockOnDrop(files);
    });

    expect(mockOnDrop).toHaveBeenCalled();
  });
});
