import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import SearchFeed from '@/Components/search/SearchFeed';
import {  expect, describe, test } from 'vitest';

describe('SearchFeed', () => {
  test('renders SearchFeed component', () => {
    render(
      <MemoryRouter initialEntries={['/some/path']}>
        <SearchFeed isSafe={true} sortTime={"new"} sortType={"hot"} />
      </MemoryRouter>
    );
    const element = screen.getByTestId('search_feed');
    expect(element).to.exist;
  });
});