import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Mainfeed from "@/Components/mainfeed/Mainfeed";
import { UserContext } from "@/context/UserContext";
import { expect, describe, test } from "vitest";

describe("Mainfeed component", () => {
  test("renders Mainfeed component with a logged in user", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ isLoggedIn: true }}>
          <Mainfeed mode="test" />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const elements = screen.getAllByTestId("mainfeed");
    expect(elements).to.have.lengthOf.at.least(1);

    fireEvent.click(screen.getByText("Best"));
    fireEvent.click(screen.getByText("New"));
    expect(screen.getByText("New")).to.exist;
  });
});
