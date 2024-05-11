import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import SocialLinksModal from '@/Components/settings/components/SocialLinksModal';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('SocialLinksModal Component', () => {
  const modalProps = {
    id: 'test-modal',
    show: true,
    onHide: vi.fn(),
  };

  it('should render the modal title correctly', () => {
    render(<SocialLinksModal {...modalProps} />);

    // Check if the title contains the correct text
    const titleElement = screen.getByText('Add Social Link');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('flex', 'flex-row', 'justify-center', 'w-full', 'bg-reddit_greenyDark', 'text-white');
  });

  it('should render all the expected social links', () => {
    render(<SocialLinksModal {...modalProps} />);

    // Check that the "Custom URL" link is present
    const customLinkElement = screen.getByRole('button', { name: 'Custom URL' });
    expect(customLinkElement).toBeInTheDocument();

    // Verify each expected social link is rendered
    const socials = [
      'Reddit', 'Instagram', 'Twitter', 'TikTok', 'Twitch', 'Facebook', 'YouTube', 'Tumblr',
      'Spotify', 'SoundCloud', 'Beacons', 'Linktree', 'Discord', 'Venmo', 'Cash App',
      'Patreon', 'Kofi', 'PayPal', 'Cameo', 'Substack', 'Kickstarter', 'Buy Me a Coffee',
      'Shopify',
    ];
    socials.forEach(social => {
      const socialButton = screen.getByRole('button', { name: social });
      expect(socialButton).toBeInTheDocument();
    });
  });

  it('should have modal-specific styles and attributes', () => {
    render(<SocialLinksModal {...modalProps} />);

    // Check the modal styling
    const modalElement = screen.getByRole('dialog');
    expect(modalElement).toHaveStyle({ opacity: '1', zIndex: '9999' });
    expect(modalElement).toHaveAttribute('aria-labelledby', 'contained-modal-title-vcenter');
  });
});
