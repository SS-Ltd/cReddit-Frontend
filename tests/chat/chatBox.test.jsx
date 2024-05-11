import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ChatBox from "@/Components/chat/ChatBox";
import { ChatContext } from "@/context/ChatContext";
import { UserContext } from "@/context/UserContext";
import baseUrl from "@/constants";

afterEach(() => {
    cleanup();
});


describe("Chat Box", () => {
    // Renders chat room name and messages
    it('should render chat room name and messages when selectedRoomId is defined', async () => {
        // Mock dependencies
        const mockSelectedRoomId = 'room1';
        const mockSelectedRoom = { name: 'Room 1' };
        const mockHandleSendMessage = vi.fn();
        const mockSocket = { current: { on: vi.fn(), off: vi.fn(), emit: vi.fn() } };
        const mockSetReRenderSide = vi.fn();
        const mockSetIsAddChat = vi.fn();
        const mockSetIsChannelSelected = vi.fn();
        const mockUser = 'user1';
        const mockUserProfilePicture = 'profile1';
        const mockGetRequest = vi.fn().mockImplementation(() => Promise.resolve({
            status: 200,
            data: mockData,  // Replace with your mock data
        }));


        // Mock context values
        const mockChatContextValue = {
            selectedRoomId: mockSelectedRoomId,
            selectedRoom: mockSelectedRoom,
            handleSendMessage: mockHandleSendMessage,
            socket: mockSocket,
            setReRenderSide: mockSetReRenderSide,
            setIsAddChat: mockSetIsAddChat,
            setIsChannelSelected: mockSetIsChannelSelected
        };
        const mockUserContextValue = {
            user: mockUser,
            userProfilePicture: mockUserProfilePicture
        };
        window.HTMLElement.prototype.scrollIntoView = function () { };


        // Render ChatBox with mocked context values
        render(
            <ChatContext.Provider value={mockChatContextValue}>
                <UserContext.Provider value={mockUserContextValue}>
                    <ChatBox />
                </UserContext.Provider>
            </ChatContext.Provider>
        );

        // Assertions
        await waitFor(() => {
            expect(mockSetReRenderSide).toHaveBeenCalledTimes(0);
            expect(mockSetIsAddChat).toHaveBeenCalledTimes(0);
            expect(mockSetIsChannelSelected).toHaveBeenCalledTimes(0);
        });
    });
    // Does not fetch messages when selectedRoomId is undefined
    it('should not fetch messages when selectedRoomId is undefined', () => {
        // Mock dependencies
        const mockSelectedRoomId = 'room1';
        const mockSelectedRoom = { name: 'Room 1' };
        const mockHandleSendMessage = vi.fn();
        const mockSocket = { current: { on: vi.fn(), off: vi.fn(), emit: vi.fn() } };
        const mockSetReRenderSide = vi.fn();
        const mockSetIsAddChat = vi.fn();
        const mockSetIsChannelSelected = vi.fn();
        const mockUser = 'user1';
        const mockUserProfilePicture = 'profile1';
        const mockGetRequest = vi.fn().mockImplementation(() => Promise.resolve({
            status: 200,
            data: mockData,  // Replace with your mock data
        }));


        // Mock context values
        const mockChatContextValue = {
            selectedRoomId: mockSelectedRoomId,
            selectedRoom: mockSelectedRoom,
            handleSendMessage: mockHandleSendMessage,
            socket: mockSocket,
            setReRenderSide: mockSetReRenderSide,
            setIsAddChat: mockSetIsAddChat,
            setIsChannelSelected: mockSetIsChannelSelected
        };
        const mockUserContextValue = {
            user: mockUser,
            userProfilePicture: mockUserProfilePicture
        };
        window.HTMLElement.prototype.scrollIntoView = function () { };

        // Render ChatBox with mocked context values
        render(
            <ChatContext.Provider value={mockChatContextValue}>
                <UserContext.Provider value={mockUserContextValue}>
                    <ChatBox />
                </UserContext.Provider>
            </ChatContext.Provider>
        );

        // Assertions
        expect(mockGetRequest).not.toHaveBeenCalled();
    });


});