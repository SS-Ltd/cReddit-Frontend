import { describe, it, expect, afterEach, vi } from 'vitest';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import NotificationItem from '@/Components/notifications/NotificationItem';

import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('NotificationItem Component', () => {
  const mockOnRemove = vi.fn();

  const defaultProps = {
    notificationKey: '123',
    title: 'Sample Notification Title',
    date: '2024-05-12',
    description: 'This is a sample notification description that will be truncated if it is too long.',
    image: 'https://via.placeholder.com/32',
    onRemove: mockOnRemove,
    isNewNotificationsPage: false,
    isRead: false,
  };

  it('should display the correct notification title and date', () => {
    render(<NotificationItem {...defaultProps} />);

    expect(screen.getByText('Sample Notification Title')).toBeInTheDocument();
    expect(screen.getByText('2024-05-12')).toBeInTheDocument();
  });

  it('should apply the correct styles for read/unread notifications', () => {
    // Unread notification
    const unreadStyle = { backgroundColor: '#343a40' };
    const unreadProps = { ...defaultProps, isRead: false };
    const { container: unreadContainer } = render(<NotificationItem {...unreadProps} />);
    expect(unreadContainer.firstChild).toHaveStyle(unreadStyle);

    // Read notification
    const readProps = { ...defaultProps, isRead: true };
    const { container: readContainer } = render(<NotificationItem {...readProps} />);
    expect(readContainer.firstChild).not.toHaveStyle(unreadStyle);
  });
});
