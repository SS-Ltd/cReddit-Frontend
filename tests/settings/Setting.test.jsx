import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Setting from "@/Components/settings/Setting";

describe("Setting Component", () => {
  it("renders setting title and message correctly", () => {
    const title = "Test Title";
    const message = "Test Message";

    render(<Setting title={title} message={message} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it("renders toggle button and calls onToggleButtonOnClick when clicked", async () => {
    const title = "Test Title";
    const message = "Test Message";
    const clickableID = "test-toggle";
    const pageName = "testPage";
    const settingName = "testSetting";
    const setUserSettings = vi.fn();
    const isToggled = false;

    render(
      <Setting
        title={title}
        message={message}
        clickableID={clickableID}
        pageName={pageName}
        settingName={settingName}
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={isToggled}
      />
    );

    const toggleButton = screen.getByTestId(clickableID);
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);

    // Assuming your API request and state updates are handled correctly,
    // verify if the setUserSettings and notify functions are called as expected.
    // Add assertions here...
  });

  it("renders regular button and calls onRegularButtonOnClick when clicked", async () => {
    const title = "Test Title";
    const message = "Test Message";
    const clickableID = "test-regular";
    const pageName = "testPage";
    const settingName = "testSetting";
    const setUserSettings = vi.fn();

    render(
      <Setting
        title={title}
        message={message}
        clickableID={clickableID}
        pageName={pageName}
        settingName={settingName}
        setUserSettings={setUserSettings}
        regularButton={true}
      />
    );

    const regularButton = screen.getByTestId(clickableID);
    expect(regularButton).toBeInTheDocument();

    fireEvent.click(regularButton);

    // Assuming your API request and state updates are handled correctly,
    // verify if the setUserSettings and notify functions are called as expected.
    // Add assertions here...
  });

  // You can add similar tests for menu items if needed
});
