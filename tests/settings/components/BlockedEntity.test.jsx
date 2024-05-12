import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import moment from 'moment';
import BlockedEntity from '@/Components/settings/components/BlockedEntity';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('BlockedEntity Component', () => {
  const entityName = 'BlockedUser';
  const timestamp = moment().subtract(2, 'days').toISOString(); // 2 days ago
  const onUnblock = vi.fn();

  beforeEach(() => {
    render(<BlockedEntity entityName={entityName} timestamp={timestamp} onUnblock={onUnblock} />);
  });

  it('should display the entity name', () => {
    expect(screen.getByText(entityName)).toBeInTheDocument();
  });

  it('should display the timestamp in the "time ago" format', () => {
    const timeAgo = moment(timestamp).fromNow();
    expect(screen.getByText(timeAgo)).toBeInTheDocument();
  });

  it('should display a "REMOVE" button', () => {
    expect(screen.getByText('REMOVE')).toBeInTheDocument();
  });

  it('should trigger onUnblock when the "REMOVE" button is clicked', () => {
    const removeButton = screen.getByText('REMOVE');
    fireEvent.click(removeButton);
    expect(onUnblock).toHaveBeenCalled();
  });

  it('should have the correct test ID attribute', () => {
    expect(screen.getByTestId(entityName)).toBeInTheDocument();
  });
});
