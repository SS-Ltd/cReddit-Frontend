import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import * as React from 'react';
import SearchChat from "@/Components/chat/SearchChat";
import { ChatContext } from "@/context/ChatContext";
import { getRequest } from "@/services/Requests";
afterEach(() => {
    cleanup();
});

vi.mock('@/services/Requests', () => ({
    getRequest: vi.fn(() => ({ status: 200, data: ['malek'] })),
}));

describe("search-chat component", () => {

    // User types in a search query and sees relevant search results for users.
    it('should not  display  search results when user types in a irelevent search query', () => {
        // Arrange
        render(
            <ChatContext.Provider value={{ tags: [], setTags: vi.fn(), groupName: '', setGroupName: vi.fn(), setProfilePictureTag: vi.fn(), profilePictureTag: '' }}>
                <SearchChat />
            </ChatContext.Provider>
        );
        const searchInput = screen.getByPlaceholderText('Enter username(s) *');

        // Act
        fireEvent.change(searchInput, { target: { value: 'm' } });

        // Assert
        const userResults = screen.queryAllByTestId("search-user-row-1");
        expect(userResults.length).toBe(0);
    });

    it('tags input is rendred if tag morethan > 1 ', () => {
        // Arrange
        render(
            <ChatContext.Provider value={{ tags: ["samir"], setTags: vi.fn(), groupName: '', setGroupName: vi.fn(), setProfilePictureTag: vi.fn(), profilePictureTag: '' }}>
                <SearchChat />
            </ChatContext.Provider>
        );

        // Assert
        const tagsInput = screen.queryByTestId('remove-tag-icon');

    });

});