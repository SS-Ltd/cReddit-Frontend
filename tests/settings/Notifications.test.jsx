import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Notifications from "@/Components/settings/Notifications";
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('Notifications Component', () => {
  const mockSetUserSettings = vi.fn();
  
  const settingsProps = {
    mentionsNotifs: true,
    commentsNotifs: false,
    postsUpvotesNotifs: true,
    repliesNotifs: false,
    postNotifs: true,
    setUserSettings: mockSetUserSettings
  };

  beforeEach(() => {
    render(<Notifications {...settingsProps} />);
  });

  it('should display the main title "Notification settings"', () => {
    expect(screen.getByText('Notification settings')).toBeInTheDocument();
  });

  it('should display the subtitle "Activity"', () => {
    expect(screen.getByText('Activity')).toBeInTheDocument();
  });

  it('should render the "Mentions of u/username" toggle correctly', () => {
    const mentionsToggle = screen.getByTestId('settings-notifications-mentions-of-username-toggle-button');
    expect(mentionsToggle).toBeInTheDocument();
  });

  it('should render the "Comments on your posts" toggle correctly', () => {
    const commentsToggle = screen.getByTestId('settings-notifications-comments-on-your-posts-toggle-button');
    expect(commentsToggle).toBeInTheDocument();
  });

  it('should render the "Upvotes on your posts" toggle correctly', () => {
    const upvotesToggle = screen.getByTestId('settings-notifications-upvotes-on-your-posts-toggle-button');
    expect(upvotesToggle).toBeInTheDocument();
  });

  it('should render the "Replies to your comments" toggle correctly', () => {
    const repliesToggle = screen.getByTestId('settings-notifications-replies-to-your-comments-toggle-button');
    expect(repliesToggle).toBeInTheDocument();
  });

  it('should render the "Posts you follow" toggle correctly', () => {
    const postsToggle = screen.getByTestId('settings-notifications-posts-you-follow-toggle-button');
    expect(postsToggle).toBeInTheDocument();
  });
});
