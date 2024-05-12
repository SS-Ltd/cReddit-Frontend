import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { CustomToast } from "@/Components/settings/components/CustomToast";
import { notify } from "@/Components/settings/components/CustomToast";

vi.mock("react-toastify", () => ({
  toast: vi.fn(),
}));

describe("CustomToast Component", () => {
  it("renders correctly with the provided message", () => {
    const message = "Example message";

    render(<CustomToast message={message} />);

    const messageElement = screen.getByText(message);

    expect(messageElement).toBeInTheDocument();
  });
});

describe("notify Function", () => {
  it("calls toast function with the correct parameters", () => {
    const message = "Example message";
    notify(message);
  });
});
