import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter as Router } from "react-router-dom";
import SignUpEmail from "@/Components/authentication/signup/SignUpEmail";
import { UserContext } from "@/context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const mockUserContextValue = {
  isLoggedIn: true,
  username: "testUser",
  setIsLoggedIn: () => {},
};

describe("SignUpEmail component", () => {
  let setIsOpenedSignupMenuMock;
  let setIsOpenedLoginMenuMock;
  let setIsOpenedSecondSignupMenuMock;
  let setNavbarSignupEmailMock;

  beforeEach(() => {
    setIsOpenedSignupMenuMock = vi.fn();
    setIsOpenedLoginMenuMock = vi.fn();
    setIsOpenedSecondSignupMenuMock = vi.fn();
    setNavbarSignupEmailMock = vi.fn();
  });

  it("updates email state on input change", () => {
    const { getByLabelText } = render(
      <GoogleOAuthProvider>
        <UserContext.Provider value={mockUserContextValue}>
          <Router>
            <SignUpEmail
              setIsOpenedSignupMenu={setIsOpenedSignupMenuMock}
              setIsOpenedLoginMenu={setIsOpenedLoginMenuMock}
              setIsOpenedSecondSignupMenu={setIsOpenedSecondSignupMenuMock}
              setNavbarSignupEmail={setNavbarSignupEmailMock}
            />
          </Router>
        </UserContext.Provider>
      </GoogleOAuthProvider>
    );

    const emailInput = getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  it("submits form with valid email", () => {
    const { getByText, getByLabelText } = render(
      <GoogleOAuthProvider>
        <UserContext.Provider value={mockUserContextValue}>
          <Router>
            <SignUpEmail
              setIsOpenedSignupMenu={setIsOpenedSignupMenuMock}
              setIsOpenedLoginMenu={setIsOpenedLoginMenuMock}
              setIsOpenedSecondSignupMenu={setIsOpenedSecondSignupMenuMock}
              setNavbarSignupEmail={setNavbarSignupEmailMock}
            />
          </Router>
        </UserContext.Provider>
      </GoogleOAuthProvider>
    );

    const emailInput = getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  });

  it("does not submit form with invalid email", () => {
    const { getByText } = render(
      <GoogleOAuthProvider>
        <UserContext.Provider value={mockUserContextValue}>
          <Router>
            <SignUpEmail
              setIsOpenedSignupMenu={setIsOpenedSignupMenuMock}
              setIsOpenedLoginMenu={setIsOpenedLoginMenuMock}
              setIsOpenedSecondSignupMenu={setIsOpenedSecondSignupMenuMock}
              setNavbarSignupEmail={setNavbarSignupEmailMock}
            />
          </Router>
        </UserContext.Provider>
      </GoogleOAuthProvider>
    );

    expect(setNavbarSignupEmailMock).not.toHaveBeenCalled();
  });
});
