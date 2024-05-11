import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ProfileHead from "@/Components/othersprofile/ProfileHead";

describe("ProfileHead", () => {
  it("renders correctly", () => {
    const imgSrc = "profile.jpg";
    const displayName = "John Doe";
    const userName = "johndoe123";

    render(
      <ProfileHead
        imgSrc={imgSrc}
        displayName={displayName}
        userName={userName}
      />
    );

    const profileImage = screen.getByAltText("profile");
    const displayNameElement = screen.getByText(displayName);
    const userNameElement = screen.getByText(`u/${userName}`);

    expect(profileImage).toBeInTheDocument();
    expect(displayNameElement).toBeInTheDocument();
    expect(userNameElement).toBeInTheDocument();

    expect(profileImage).toHaveAttribute("src", imgSrc);

    expect(displayNameElement).toHaveTextContent(displayName);
    expect(userNameElement).toHaveTextContent(`u/${userName}`);
  });
});
