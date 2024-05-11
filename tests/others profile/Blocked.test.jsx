import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Blocked from "@/Components/othersprofile/Blocked";

describe("Blocked", () => {
  it("renders correctly", () => {
    vi.mock("@/assets/Block.svg", () => ({
      default: "mocked-block-image-path",
    }));

    render(<Blocked userName="John" />);

    const imgElement = screen.getByAltText("Blocked");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "mocked-block-image-path");

    const userNameElement = screen.getByText("You have Blocked John");
    expect(userNameElement).toBeInTheDocument();

    const detailsMessageElement = screen.getByText("unblock to see details");
    expect(detailsMessageElement).toBeInTheDocument();

    const additionalTextElement = screen.getByText(
      "Tabgo corpus texo. Cicuta dsdsdsdddddddddddddsdsdsds dsdsdsddsdsdsdsffffffffffff in quaerat caveo corpus bellicus. Voluptates terror via curis deludo supra somniculosus bibo."
    );
    expect(additionalTextElement).toBeInTheDocument();
  });
});
