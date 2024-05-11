import { describe, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SwitchButton from "@/Components/createCommunity/SwitchButton";

describe("SwitchButton", () => {
  it("renders correctly", () => {
    const isSwitched = false;
    const setIsSwitched = vi.fn();

    render(
      <SwitchButton isSwitched={isSwitched} setIsSwitched={setIsSwitched} />
    );
  });
});
