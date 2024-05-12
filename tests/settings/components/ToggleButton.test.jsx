import { describe, it, expect, afterEach, vi } from 'vitest';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import ToggleButton from '@/Components/settings/components/ToggleButton';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('ToggleButton Component', () => {
  it('should render with the toggle in the correct initial state', () => {
    render(
      <ToggleButton isToggleOn={true} onToggleButtonOnClick={() => {}} clickableID="toggleTest" />
    );

    const input = screen.getByTestId('toggleTest');
    expect(input).toBeInTheDocument();
    expect(input).toBeChecked(); // Initial state: checked
  });

  it('should render with the toggle unchecked when isToggleOn is false', () => {
    render(
      <ToggleButton isToggleOn={false} onToggleButtonOnClick={() => {}} clickableID="toggleTest" />
    );

    const input = screen.getByTestId('toggleTest');
    expect(input).toBeInTheDocument();
    expect(input).not.toBeChecked(); // Initial state: unchecked
  });

  it('should call the onToggleButtonOnClick handler when toggled', () => {
    const onToggleMock = vi.fn();
    render(
      <ToggleButton isToggleOn={true} onToggleButtonOnClick={onToggleMock} clickableID="toggleTest" />
    );

    const input = screen.getByTestId('toggleTest');
    fireEvent.click(input);

    // Check if the event handler was triggered
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });
});
