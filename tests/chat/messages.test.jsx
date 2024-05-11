import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import * as React from 'react';
import moment from "moment";
import Message from "@/Components/chat/Message";
afterEach(() => {
    cleanup();
});

describe("Threads component", () => {
    // Renders a div element with id 'open-threads' and data-testid 'open-threads'
    // Renders a message with username, profile picture, message content and timestamp when isFirstMessage is true
    it('should render a message with username, profile picture, message content, and timestamp when isFirstMessage is true', () => {
        // Arrange
        const message = "Hello";
        const isFirstMessage = true;
        const time = "2022-01-01";
        const username = "John";
        const profilePicture = "profile.jpg";

        // Act
        render(<Message Message={message} isFirstMessage={isFirstMessage} time={time} username={username} profilePicture={profilePicture} />);

        // Assert
        expect(screen.getByText(message)).toBeInTheDocument();
        expect(screen.getByText(username)).toBeInTheDocument();
        expect(screen.getByText(moment(time).calendar())).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', profilePicture);
    });


    // username is null or undefined
    it('should render a message without username when username is null or undefined', () => {
        // Arrange
        const message = "Hello";
        const isFirstMessage = false;
        const time = "2022-01-01";
        const username = null;
        const profilePicture = "profile.jpg";

        // Act
        render(<Message Message={message} isFirstMessage={isFirstMessage} time={time} username={username} profilePicture={profilePicture} />);

        // Assert
        expect(screen.getByText(message)).toBeInTheDocument();
        expect(screen.queryAllByTestId("null-message")).not.toBeNull();
    });

});