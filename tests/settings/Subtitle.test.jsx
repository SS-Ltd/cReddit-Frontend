import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Subtitle from '@/Components/settings/components/Subtitle';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('Subtitle Component', () => {
  it('should render the title text correctly', () => {
    const titleText = 'Test Subtitle';
    render(<Subtitle title={titleText} />);

    // Check if the subtitle displays the correct text
    const subtitleElement = screen.getByRole('heading', { level: 6 });
    expect(subtitleElement).toHaveTextContent(titleText);
  });

  it('should render the horizontal rule correctly', () => {
    const titleText = 'Subtitle with Divider';
    render(<Subtitle title={titleText} />);

    // Check if the horizontal rule is present in the document
    const hrElement = screen.getByRole('separator');
    expect(hrElement).toBeInTheDocument();
  });
});
