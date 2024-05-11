import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import LandingOnChat from "@/Components/chat/LandingOnChat";
import { UserContext } from "@/context/UserContext";
import { ChatContext } from "@/context/ChatContext";
import * as React from 'react';

describe("LandingOnChat component", () => {
    it('should render landing page with welcome message, image, and create chat button', () => {
        // Arrange
        const { getByText, getByTestId } = render(
            <ChatContext.Provider value={{ isAddChat: true, setIsAddChat: vi.fn() }}>
                <LandingOnChat />
            </ChatContext.Provider>
        );

        // Act
        const landingImg = getByTestId('landing-img');
        const welcomeMessage = getByText('Welcome to chat!');
        const createChatButton = getByTestId('landing-creat-channel');

        // Assert
        expect(landingImg).toBeInTheDocument();
        expect(welcomeMessage).toBeInTheDocument();
        expect(createChatButton).toBeInTheDocument();
    });
});