import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import RegularButton from '@/Components/settings/components/RegularButton';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('RegularButton Component', () => {
  const clickableID = 'submit-button';
  const regularButton = 'Submit';
  const onRegularButtonOnClickMock = vi.fn();

  beforeEach(() => {
    render(
      <RegularButton
        regularButton={regularButton}
        onRegularButtonOnClick={onRegularButtonOnClickMock}
        clickableID={clickableID}
      />
    );
  });

  it('should render the button with the correct text', () => {
    // Check that the button contains the provided text
    expect(screen.getByTestId(clickableID)).toHaveTextContent(regularButton);
  });

  it('should have the correct ID attribute', () => {
    // Verify that the button ID is rendered in lowercase
    expect(screen.getByTestId(clickableID)).toHaveAttribute('id', clickableID.toLowerCase());
  });

  it('should call onRegularButtonOnClick when the button is clicked', () => {
    // Click the button
    fireEvent.click(screen.getByTestId(clickableID));

    // Verify that the click handler is called
    expect(onRegularButtonOnClickMock).toHaveBeenCalled();
  });
});
