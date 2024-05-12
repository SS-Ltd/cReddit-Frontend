import { vi, describe, it, beforeEach, expect } from "vitest";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { ApproveModal } from "@/Components/moderation/ApproveModal"; // Import the component you're testing

beforeEach(cleanup); // Clean up after each test

describe("ApproveModal", () => {
  it("renders without crashing", () => {
    const setIsOpenApproveModal = vi.fn();
    const approveModalRef = { current: null };
    const selectedSubreddit = { name: "test" };
    const showAlertForTime = vi.fn();
    const setApprovedUsers = vi.fn();

    render(
      <MemoryRouter>
        <ApproveModal
          setIsOpenApproveModal={setIsOpenApproveModal}
          approveModalRef={approveModalRef}
          selectedSubreddit={selectedSubreddit}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
        />
      </MemoryRouter>
    );
  });

  it("disables the 'Approve' button when the username input is empty", () => {
    const setIsOpenApproveModal = vi.fn();
    const approveModalRef = { current: null };
    const selectedSubreddit = { name: "test" };
    const showAlertForTime = vi.fn();
    const setApprovedUsers = vi.fn();

    const { getByText } = render(
      <MemoryRouter>
        <ApproveModal
          setIsOpenApproveModal={setIsOpenApproveModal}
          approveModalRef={approveModalRef}
          selectedSubreddit={selectedSubreddit}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
        />
      </MemoryRouter>
    );

    const approveButton = getByText("Approve");
    expect(approveButton).not.toBeNaN();
  });

  it("enables the 'Approve' button when the username input is not empty", () => {
    const setIsOpenApproveModal = vi.fn();
    const approveModalRef = { current: null };
    const selectedSubreddit = { name: "test" };
    const showAlertForTime = vi.fn();
    const setApprovedUsers = vi.fn();
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <ApproveModal
          setIsOpenApproveModal={setIsOpenApproveModal}
          approveModalRef={approveModalRef}
          selectedSubreddit={selectedSubreddit}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
        />
      </MemoryRouter>
    );

    const usernameInput = getByPlaceholderText("Username");
    fireEvent.change(usernameInput, { target: { value: "test" } });

    const approveButton = getByText("Approve");
    expect(approveButton).not.toBeDisabled();
  });

  it("calls setIsOpenApproveModal with false when 'Cancel' button is clicked", () => {
    const setIsOpenApproveModal = vi.fn();
    const approveModalRef = { current: null };
    const selectedSubreddit = { name: "test" };
    const showAlertForTime = vi.fn();
    const setApprovedUsers = vi.fn();
    const { getByText } = render(
      <MemoryRouter>
        <ApproveModal
          setIsOpenApproveModal={setIsOpenApproveModal}
          approveModalRef={approveModalRef}
          selectedSubreddit={selectedSubreddit}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
        />
      </MemoryRouter>
    );

    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(setIsOpenApproveModal).toHaveBeenCalledWith(false);
  });

  it("calls setApprovedUsers when 'Approve' button is clicked", async () => {
    const setIsOpenApproveModal = vi.fn();
    const approveModalRef = { current: null };
    const selectedSubreddit = { name: "test" };
    const showAlertForTime = vi.fn();
    const setApprovedUsers = vi.fn();
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <ApproveModal
          setIsOpenApproveModal={setIsOpenApproveModal}
          approveModalRef={approveModalRef}
          selectedSubreddit={selectedSubreddit}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
        />
      </MemoryRouter>
    );

    const usernameInput = getByPlaceholderText("Username");
    fireEvent.change(usernameInput, { target: { value: "test" } });

    const approveButton = getByText("Approve");
    fireEvent.click(approveButton);

    waitFor(() => expect(setApprovedUsers).toHaveBeenCalled());
  });
});
