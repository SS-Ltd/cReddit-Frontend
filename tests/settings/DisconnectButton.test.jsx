import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import DisconnectButton from '@/Components/settings/components/DisconnectButton';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('DisconnectButton Component', () => {
  const buttonId = 'settings-disconnect-apple-button';
  const buttonText = '(disconnect)';

  beforeEach(() => {
    render(<DisconnectButton />);
  });

  it('should render the button with the correct text', () => {
    // Check that the button contains the expected text
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('should have the correct ID attribute', () => {
    // Verify that the button's ID attribute is set correctly
    expect(screen.getByRole('button', { name: buttonText })).toHaveAttribute('id', buttonId);
  });

  it('should have the correct CSS classes', () => {
    // Verify that the button has the correct CSS classes applied
    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toHaveClass('text-reddit_light_blue', 'hover:bg-gray-800', 'text-sm', 'font-bold', 'font-plex', 'rounded-2xl', 'pt-2', 'pb-2');
  });
});
