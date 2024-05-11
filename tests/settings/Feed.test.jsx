import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Feed from "@/Components/settings/Feed";
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('Feed Component', () => {
  const mockSetUserSettings = vi.fn();

  const settingsProps = {
    showAdultContent: true,
    autoPlayMedia: false,
    communityThemes: true,
    communityContentSort: "hot",
    globalContentView: "classic",
    openNewTab: false,
    setUserSettings: mockSetUserSettings
  };

  beforeEach(() => {
    render(<Feed {...settingsProps} />);
  });

  it('should display the main title "Feed Settings"', () => {
    expect(screen.getByText('Feed Settings')).toBeInTheDocument();
  });

  it('should display the subtitle "Content Preferences"', () => {
    expect(screen.getByText('Content Preferences')).toBeInTheDocument();
  });

  it('should render the "Show mature (18+) content" toggle correctly', () => {
    const showAdultToggle = screen.getByTestId('settings-feed-show-mature-content-toggle-button');
    expect(showAdultToggle).toBeInTheDocument();
  });

  it('should render the "Autoplay media" toggle correctly', () => {
    const autoplayToggle = screen.getByTestId('settings-feed-autoplay-media-toggle-button');
    expect(autoplayToggle).toBeInTheDocument();
  });

  it('should render the "Community themes" toggle correctly', () => {
    const themesToggle = screen.getByTestId('settings-feed-community-themes-toggle-button');
    expect(themesToggle).toBeInTheDocument();
  });

  it('should render the "Open posts in new tab" toggle correctly', () => {
    const openTabToggle = screen.getByTestId('settings-feed-open-posts-in-new-tab-toggle-button');
    expect(openTabToggle).toBeInTheDocument();
  });
});
