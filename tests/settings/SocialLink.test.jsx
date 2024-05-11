import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SocialLink from '@/Components/settings/components/SocialLink';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('SocialLink Component', () => {
  const defaultProps = {
    id: 'test-link',
    url: 'reddit',
    platform: 'Reddit',
    selected: false,
    handleAddSocial: vi.fn(),
    handleRemoveSocial: vi.fn(),
  };

  it('should render the button with correct text and image', () => {
    render(<SocialLink {...defaultProps} />);

    // Check for the button text (platform name)
    expect(screen.getByText('Reddit')).toBeInTheDocument();

    // Verify the image source URL matches the platform URL
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://www.redditstatic.com/desktop2x/img/social-links/reddit.png');
  });
});
