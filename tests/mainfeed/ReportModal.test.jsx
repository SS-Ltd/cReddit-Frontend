import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { ReportModal } from "@/Components/mainfeed/ReportModal";

describe("ReportModal component", () => {
  const mockCommunityRules = [
    { text: "Rule 1", appliesTo: "Posts only" },
    { text: "Rule 2", appliesTo: "Posts only" },
  ];

  it("renders ReportModal component without crashing", async () => {
    const { getByText } = render(
      <ReportModal
        setIsOpenReportModal={() => {}}
        isOpenReportModal={true}
        postId="post_id"
        reportModalRef={null}
        communityRules={mockCommunityRules}
        showAlertForTime={() => {}}
      />
    );

    expect(getByText("Submit a report")).toBeInTheDocument();
    expect(getByText("Rule 1")).toBeInTheDocument();
    expect(getByText("Rule 2")).toBeInTheDocument();

    fireEvent.click(getByText("Rule 1"));

    fireEvent.click(getByText("Submit"));
  });
});
