import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SimpleNavbar from '@/Components/settings/components/SimpleNavbar';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('SimpleNavbar Component', () => {
  const tabs = ['Overview', 'Settings', 'Profile'];
  const tabsPath = ['/overview', '/settings', '/profile'];
  const onSetTabMock = vi.fn();
  const currTab = 1;

  beforeEach(() => {
    render(
      <MemoryRouter>
        <SimpleNavbar
          Tabs={tabs}
          TabsPath={tabsPath}
          currTab={currTab}
          onSetTab={onSetTabMock}
        />
      </MemoryRouter>
    );
  });

  it('should render all the provided tabs correctly', () => {
    tabs.forEach((tab) => {
      expect(screen.getByText(tab)).toBeInTheDocument();
    });
  });

  it('should apply active styles to the current tab', () => {
    // Find the tab that is currently active
    const activeTab = screen.getByText(tabs[currTab]);

    // Check that the active tab has the expected styles
    expect(activeTab.closest('a')).toHaveClass('border-b-3', 'border-white');
  });

  it('should not apply active styles to other tabs', () => {
    tabs.forEach((tab, index) => {
      if (index !== currTab) {
        // Other tabs shouldn't have the active styles
        expect(screen.getByText(tab).closest('a')).not.toHaveClass('border-b-3', 'border-white');
      }
    });
  });

  it('should call onSetTab with the correct index when a tab is clicked', () => {
    // Click the first tab (index 0)
    fireEvent.click(screen.getByText(tabs[0]));

    // Verify that onSetTab was called with the correct index
    expect(onSetTabMock).toHaveBeenCalledWith(0);
  });
});
