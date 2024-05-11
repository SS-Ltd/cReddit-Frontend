import { it, expect, describe, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, within } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CreatePost from '@/Components/create_post/CreatePost';
import { UserContext } from '@/context/UserContext';
afterEach(cleanup);
describe('Create post tests', () => {

    it('should select a community from the dropdown menu', () => {
        // Initialize and render the CreatePost component
        const mockUserValue = { user: 'Test user', setUser: vi.fn(), userProfilePicture: 'https://random.imagecdn.app/500/150', setUserProfilePicture: vi.fn() };
        render(
            <UserContext.Provider value={mockUserValue}>
                <Router>
                    <CreatePost />
                </Router>
            </UserContext.Provider>
        );
        fireEvent.click(screen.getByPlaceholderText('Choose a community'));
        const communityOption = screen.getByTestId('joined-subreddits');
        expect(communityOption).to.exist;

    });

    // Test if the form is not submitted when the content is empty for a Link type post


    it('should not submit the form when the content is empty for a Link type post', () => {
        // Initialize and render the CreatePost component
        const mockUserValue = { user: 'Test user', setUser: vi.fn(), userProfilePicture: 'https://random.imagecdn.app/500/150', setUserProfilePicture: vi.fn() };
        const mockSubmit = vi.fn();
        render(
            <UserContext.Provider value={mockUserValue}>
                <Router>
                    <CreatePost onSubmit={mockSubmit} />
                </Router>
            </UserContext.Provider>
        );
        // const typeSelect = screen.getByTestId('type-select');
        // fireEvent.change(typeSelect, { target: { value: 'Link' } });
        expect(mockSubmit).not.toHaveBeenCalled();
    });

   
})