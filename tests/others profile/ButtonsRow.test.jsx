import { describe, it, vi, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router-dom";
import ButtonsRow from "@/Components/othersprofile/ButtonsRow";

describe("ButtonsRow", () => {
  it("renders correctly", () => {
    const selectedPage = "overview";
    const setSelectedPage = vi.fn();
    const userName = "testUser";

    render(
      <BrowserRouter>
        <ButtonsRow
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          userName={userName}
        />
      </BrowserRouter>
    );

    const overviewButton = screen.getByText("overview");
    const postsButton = screen.getByText("posts");
    const commentsButton = screen.getByText("comments");

    expect(overviewButton).toBeInTheDocument();
    expect(postsButton).toBeInTheDocument();
    expect(commentsButton).toBeInTheDocument();

    expect(overviewButton).toHaveClass("bg-reddit_search_light");
    expect(postsButton).not.toHaveClass("bg-reddit_search_light");
    expect(commentsButton).not.toHaveClass("bg-reddit_search_light");

    fireEvent.click(postsButton);

    expect(setSelectedPage).toHaveBeenCalledWith("submitted");

    expect(window.location.pathname).toBe(`/user/${userName}/submitted`);
  });
});
