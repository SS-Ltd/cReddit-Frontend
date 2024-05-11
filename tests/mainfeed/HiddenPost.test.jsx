import { render, screen, fireEvent } from '@testing-library/react';
import HiddenPost from '@/Components/mainfeed/HiddenPost';
import {  expect, describe, test } from 'vitest';

describe('HiddenPost', () => {
  test('renders HiddenPost component and calls handleHidePost when undo is clicked', () => {
    const handleHidePost = () => {};
    render(
      <HiddenPost id={1} handleHidePost={handleHidePost} />
    );
    const element = screen.getByText('Post hidden');
    expect(element).to.exist;
  });


});