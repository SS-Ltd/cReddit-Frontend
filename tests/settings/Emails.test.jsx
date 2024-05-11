import { vi, describe, it, beforeEach, expect, afterEach } from "vitest";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import Emails from "@/Components/settings/Emails";

describe("Emails component", () => {
  let setUserSettings;

  beforeEach(() => {
    setUserSettings = vi.fn();
    render(
      <MemoryRouter>
        <Emails
          chatEmail={true}
          followEmail={true}
          setUserSettings={setUserSettings}
        />
      </MemoryRouter>
    );
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    expect(screen.getByText("Manage Emails")).toBeInTheDocument();
    expect(screen.getByText("Messages")).toBeInTheDocument();
    expect(screen.getByText("Activity")).toBeInTheDocument();
  });
});
