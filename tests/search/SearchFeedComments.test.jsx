import { render } from '@testing-library/react'
import SearchFeedComments from '@/Components/search/SearchFeedComments'
import { it, expect, describe } from 'vitest';
import { MemoryRouter as Router } from 'react-router-dom';

describe('SearchFeedComments', () => {
    it('renders without crashing', () => {
        const mockProps = {
            _id: '1',
            postID: '1',
            postTitle: 'Test Title',
            postUsername: 'TestUser',
            postVotes: 10,
            postPicture: 'https://example.com/test.jpg',
            postCreatedAt: new Date(),
            isPostNsfw: false,
            isPostSpoiler: false,
            communityName: 'TestCommunity',
            createdAt: new Date(),
            username: 'TestUser',
            netVote: 5,
            commentCount: 2,
            commentPicture: 'https://example.com/test.jpg',
            content: 'Test content',
            lastElementRef: null
        }

        const { container } = render(
            <Router>
                <SearchFeedComments {...mockProps} />
            </Router>
        );
        expect(container).toBeTruthy()
    })
})