import { describe, it, expect, afterEach, vi } from "vitest";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import Usercard from "../../src/Components/othersprofile/Usercard.jsx"; // Assuming the React component is in a file named Usercard.js
import "@testing-library/jest-dom/vitest";
import { UserContext } from "@/context/UserContext.jsx";
import { NavbarContext } from "@/context/NavbarContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
  cleanup();
});

describe("Usercard Component", () => {
  it("test 1 : clicking the button changes it to follow to unfollow and viceverse ", () => {
    const userContextValue = { isLoggedIn: true };
    const navbarContextValue = {
      isOpenedLoginMenu: false,
      setIsOpenedLoginMenu: () => {},
    };
    const setIsBlocked = vi.fn();

    // Render the component
    render(
      <UserContext.Provider value={userContextValue}>
        <NavbarContext.Provider value={navbarContextValue}>
          <Router>
            <Usercard isBlocked={false} setIsBlocked={setIsBlocked} />
          </Router>
        </NavbarContext.Provider>
      </UserContext.Provider>
    );

    const followButton = screen.getByTestId(/follow-btn-usercard/i);
    const expectedText =
      followButton.textContent === "Follow" ? "Unfollow" : "Follow";
    fireEvent.click(followButton);
    expect(expectedText).toBe(expectedText);
  });

  it("test 2 : ellipsis menu is not visible initially", () => {
    const userContextValue = { isLoggedIn: true };
    const navbarContextValue = {
      isOpenedLoginMenu: false,
      setIsOpenedLoginMenu: () => {},
    };
    const setIsBlocked = vi.fn();

    // Render the component
    render(
      <UserContext.Provider value={userContextValue}>
        <NavbarContext.Provider value={navbarContextValue}>
          <Router>
            <Usercard isBlocked={false} setIsBlocked={setIsBlocked} />
          </Router>
        </NavbarContext.Provider>
      </UserContext.Provider>
    );

    const menu = screen.queryByText(/Share/i);
    expect(menu).toBeNull();
  });

  it("test 3 : clicking the ellipsis icon shows the menu", () => {
    const userContextValue = { isLoggedIn: true };
    const navbarContextValue = {
      isOpenedLoginMenu: false,
      setIsOpenedLoginMenu: () => {},
    };
    const setIsBlocked = vi.fn();

    // Render the component
    render(
      <UserContext.Provider value={userContextValue}>
        <NavbarContext.Provider value={navbarContextValue}>
          <Router>
            <Usercard isBlocked={false} setIsBlocked={setIsBlocked} />
          </Router>
        </NavbarContext.Provider>
      </UserContext.Provider>
    );
    const ellipsisButton = screen.getAllByTestId(/user-profile-menu/i);
    fireEvent.click(ellipsisButton[0]);
    expect(
      screen.getByTestId(/user-profile-menu-dropped/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Send a Message/i)).toBeInTheDocument();
  });

  it("test 4 : ellipsis menu can be toggled", () => {
    const userContextValue = { isLoggedIn: true };
    const navbarContextValue = {
      isOpenedLoginMenu: false,
      setIsOpenedLoginMenu: () => {},
    };
    const setIsBlocked = vi.fn();

    // Render the component
    render(
      <UserContext.Provider value={userContextValue}>
        <NavbarContext.Provider value={navbarContextValue}>
          <Router>
            <Usercard isBlocked={false} setIsBlocked={setIsBlocked} />
          </Router>
        </NavbarContext.Provider>
      </UserContext.Provider>
    );
    const ellipsisButton = screen.getAllByTestId(/user-profile-menu/i);
    fireEvent.click(ellipsisButton[0]);
    fireEvent.click(ellipsisButton[0]);
    expect(screen.queryByText(/Send a Message/i)).toBeNull();
  });

  it("test 5 : clicking the block button changes it to unblock to block and viceverse ", () => {
    const userContextValue = { isLoggedIn: true };
    const navbarContextValue = {
      isOpenedLoginMenu: false,
      setIsOpenedLoginMenu: () => {},
    };
    const setIsBlocked = vi.fn();

    // Render the component
    render(
      <UserContext.Provider value={userContextValue}>
        <NavbarContext.Provider value={navbarContextValue}>
          <Router>
            <Usercard isBlocked={true} setIsBlocked={setIsBlocked} />
          </Router>
        </NavbarContext.Provider>
      </UserContext.Provider>
    );

    const blockButton = screen.getByTestId(/unblock-btn-usercard/i);
    const expectedText =
      blockButton.textContent === "Block" ? "Unblock" : "Block";
    fireEvent.click(blockButton);
    expect(expectedText).toBe(expectedText);
  });
});
