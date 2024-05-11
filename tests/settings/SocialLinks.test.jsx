import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SocialLinks from '@/Components/settings/components/SocialLinks';
import '@testing-library/jest-dom/vitest';

vi.mock('../utils/ChangeSetting', () => ({
  changeSetting: vi.fn(() => Promise.resolve({ status: 200 })),
}));

vi.mock('./CustomToast', () => ({
  notify: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('SocialLinks Component', () => {
  const pageName = 'test-page';
  const initialSocialLinks = [
    { displayName: 'Reddit', platform: 'Reddit' },
    { displayName: 'Twitter', platform: 'Twitter' },
  ];
  const setModalShowMock = vi.fn();

  beforeEach(() => {
    render(
      <SocialLinks
        pageName={pageName}
        socialLinks={initialSocialLinks}
        setModalShow={setModalShowMock}
      />
    );
  });

  it('should render all provided social links correctly', () => {
    // Check that each initial social link is rendered
    initialSocialLinks.forEach((link) => {
      expect(screen.getByText(link.displayName)).toBeInTheDocument();
    });
  });

  it('should call setModalShow with true when "Add social link" button is clicked', () => {
    const addButton = screen.getByRole('button', { name: 'Add social link' });
    fireEvent.click(addButton);
    expect(setModalShowMock).toHaveBeenCalledWith(true);
  });

  it('should disable "Add social link" button when five links exist', () => {
    // Simulate having five social links
    const maxLinks = [
      { displayName: 'Reddit', platform: 'Reddit' },
      { displayName: 'Twitter', platform: 'Twitter' },
      { displayName: 'Instagram', platform: 'Instagram' },
      { displayName: 'Facebook', platform: 'Facebook' },
      { displayName: 'TikTok', platform: 'TikTok' },
    ];

    cleanup();
    render(
      <SocialLinks
        pageName={pageName}
        socialLinks={maxLinks}
        setModalShow={setModalShowMock}
      />
    );

    // Check that the "Add social link" button is disabled
    const addButton = screen.getByRole('button', { name: 'Add social link' });
    expect(addButton).toBeDisabled();
  });
});
