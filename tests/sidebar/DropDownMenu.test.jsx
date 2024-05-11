import { describe, it, expect, afterEach, vi } from 'vitest';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import DropDownMenu from '@/Components/sidebar/Nav-Icons/DropDownMenu';
import '@testing-library/jest-dom/vitest';
import { UserContext } from '@/context/UserContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router-dom';


// ...



afterEach(() => {
    cleanup();
});
vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: () => (url) => {
            // Simulate navigation (optional: log the URL)
            console.log(`Navigated to: ${url}`);
        },
        Route: actual.Route,
        Router: actual.Router,
        Routes: actual.Routes,
    };
});

const mockHistory = {
    location: { pathname: '/test-path' },
    listen: vi.fn(),
    push: vi.fn(),
};

describe('DropDown menue testing', () => {

    const setIsCommunityOpen = vi.fn();
    const communityButtonRef = { current: null };
    const setIsVisibleLeftSidebar = vi.fn();
    const userHistoryRes = [];


    const renderDropDownMenu = (userContextValue) => {
        return render(
            <UserContext.Provider value={userContextValue}>
                <Router >
                    <DropDownMenu
                        userHistoryRes={mockHistory}
                        MenuHeader="Test Menu"
                        id="test-menu"
                        setIsCommunityOpen={setIsCommunityOpen}
                        communityButtonRef={communityButtonRef}
                        setIsVisibleLeftSidebar={setIsVisibleLeftSidebar}
                    />
                </ Router>
            </UserContext.Provider >
        );
    }


    it('renders without crashing', () => {
        const { getByText } = renderDropDownMenu({ isLoggedIn: false });
        expect(getByText('Test Menu')).toBeInTheDocument();
    });

    it('toggles dropdown on click', () => {
        const { getByText } = renderDropDownMenu({ isLoggedIn: false });
        const menuHeader = getByText('Test Menu');
        fireEvent.click(menuHeader);
        expect(menuHeader).toBeInTheDocument();
        // Add assertions to check the dropdown state
    });
    it('renders the chevron up icon when menu is dropped', () => {
        const { getByTestId } = renderDropDownMenu({ isLoggedIn: false });
        fireEvent.click(getByTestId('isDropped-set')); // Assuming the menuHeader is a button
        expect(getByTestId('chvronUP')).toBeInTheDocument();
    });


})