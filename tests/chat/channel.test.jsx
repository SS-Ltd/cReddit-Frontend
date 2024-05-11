import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import LeftSidebar from "@/Components/viewprofile/LeftSidebar";
import { UserContext } from "@/context/UserContext";
import { ChatContext } from "@/context/ChatContext";
import * as React from 'react';
import Channel from '@/Components/chat/Channel';

describe("chat channel component", () => {
    it('should render the channel component with the correct props', () => {
        // Mock context value
        const contextValue = {
            socket: { current: { emit: vi.fn() } },
            rooms: [],
            selectedRoomId: '',
            setSelectedRoomId: vi.fn(),
            setIsChannelSelected: vi.fn(),
            setIsAddChat: vi.fn(),
            setSelectedRoom: vi.fn()
        };

        const userContextValue = {
            user: {
                _id: '1',
                username: 'user1',
                email: 'samir@gmail.com'
            }
        }
        // Render the component
        render(
            <UserContext.Provider value={userContextValue}>
                <ChatContext.Provider value={contextValue} >
                    <Channel index={0} roomInfo={{ _id: '1', name: 'Channel 1', lastSentMessage: { createdAt: '2022-01-01', content: 'Hello', isRead: false } }} />
                </ChatContext.Provider >
            </UserContext.Provider>
        );

        // Assertions
        expect(screen.getByText('Channel 1')).toBeInTheDocument();
    });

});