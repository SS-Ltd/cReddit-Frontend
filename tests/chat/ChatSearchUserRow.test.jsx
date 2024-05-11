import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import * as React from 'react';
import ChatSearchUserRow from "@/Components/chat/ChatSearchUserRow";
afterEach(() => {
    cleanup();
});

describe("Chat Search UserRow component", () => {
    // Renders a div element with id and data-testid attributes.
    it('should render a div element with id and data-testid attributes', () => {
        // Arrange
        const _id = '123';
        const username = 'testUser';
        const profilePicture = 'testPicture';
        const isNSFW = false;
        const handleClick = vi.fn();
        const index = 0;

        // Act
        render(
            <ChatSearchUserRow
                _id={_id}
                username={username}
                profilePicture={profilePicture}
                isNSFW={isNSFW}
                handleClick={handleClick}
                index={index}
            />
        );

        // Assert
        const divElement = screen.getByTestId(`search-user-row-${index}`);
        expect(divElement).toBeInTheDocument();
        expect(divElement).toHaveAttribute('id', `search-user-row-${index}`);
    });

    // username is null or undefined
    // username is null or undefined.
    it('should render a div element with default username when username is null or undefined', () => {
        // Arrange
        const _id = '123';
        const username = null;
        const profilePicture = 'testPicture';
        const isNSFW = false;
        const handleClick = vi.fn();
        const index = 0;

        // Act
        render(
            <ChatSearchUserRow
                _id={_id}
                username={username}
                profilePicture={profilePicture}
                isNSFW={isNSFW}
                handleClick={handleClick}
                index={index}
            />
        );

        // Assert
        const usernameElement = screen.getByText('u/');
        expect(usernameElement).toBeInTheDocument();
    });

});