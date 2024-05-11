import { render } from '@testing-library/react'
import { expect, test, describe } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchFeedCommunitiesRow from '@/Components/search/SearchFeedCommunitiesRow'

describe('SearchFeedCommunitiesRow', () => {
  test('renders correctly', async () => {
    const { getByText } = render(
      <Router>
        <SearchFeedCommunitiesRow
          name="test"
          description="test description"
          icon="test icon"
          isNSFW={false}
          members={1000}
          lastElementRef={null}
        />
      </Router>
    )

    expect(getByText('r/test')).to.exist
    expect(getByText('test description')).to.exist
    expect(getByText('1.0K members')).to.exist
  })
})