import { render } from '@testing-library/react'
import { expect, test, describe } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchSubredditRow from '@/Components/search/SearchSubredditRow'

describe('SearchSubredditRow', () => {
  test('renders correctly', async () => {
    const { getByText } = render(
      <Router>
        <SearchSubredditRow
          _id="testId"
          name="test"
          icon="test icon"
          members={1000}
          isNSFW={false}
          setSearchHistory={() => {}}
          setIsFocused={() => {}}
        />
      </Router>
    )

    expect(getByText('r/test')).to.exist
    expect(getByText('1.0K members')).to.exist
  })
})