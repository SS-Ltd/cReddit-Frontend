import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import CommunityType from "@/Components/createCommunity/CommunityType";

describe("CommunityType", () => {
  it("renders correctly", () => {
    const handleRadioChange = vi.fn();
    const isChecked = false;

    render(
      <CommunityType
        type="Type"
        typeDescription="Description"
        handleRadioChange={handleRadioChange}
        isChecked={isChecked}
      >
        <div>Child component</div>
      </CommunityType>
    );
  });
});
