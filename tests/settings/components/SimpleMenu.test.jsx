import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SimpleMenu from '@/Components/settings/components/SimpleMenu';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('SimpleMenu Component', () => {
  const title = 'Menu';
  const menuItems = [
    { name: 'Profile' },
    { name: 'Settings' },
    { name: 'Logout' }
  ];
  const onSelectMock = vi.fn();
  const id = 'test-menu';

  beforeEach(() => {
    render(
      <SimpleMenu
        title={title}
        menuItems={menuItems}
        onSelect={onSelectMock}
        id={id}
      />
    );
  });

  it('should render the dropdown title correctly', () => {
    // Check that the dropdown title is displayed
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render all menu items correctly', () => {
    // Open the dropdown
    fireEvent.click(screen.getByText(title));

    // Ensure all menu items are displayed
    menuItems.forEach((item) => {
      expect(screen.getByTestId(`${id}-${item.name.toLowerCase()}`)).toBeInTheDocument();
    });
  });

  it('should call onSelect with the correct item name when a menu item is clicked', () => {
    // Open the dropdown
    fireEvent.click(screen.getByText(title));

    // Click on the "Settings" item
    fireEvent.click(screen.getByTestId(`${id}-settings`));

    // Verify that the onSelect function is called with "Settings"
    expect(onSelectMock).toHaveBeenCalledWith('Settings');
  });
});
