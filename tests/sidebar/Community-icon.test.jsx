import { describe, it, expect, afterEach } from 'vitest';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import CommunityIcon from '@/Components/sidebar/Nav-Icons/Community-icon';
import { MemoryRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom/vitest';
afterEach(() => {
    cleanup();
});

describe('Community Icon testing ', () => {
    // Renders a div element with the given divId and classNames
    it('should render a div element with the given divId and classNames', () => {
        // Arrange
        const divId = "testDiv";
        const classNames = "testClass";

        // Act
        render(<Router><CommunityIcon divId={divId} className={classNames} /></Router>);

        // Assert
        const divElement = screen.getByTestId(divId);
        expect(divElement).toBeInTheDocument();
        expect(divElement).toHaveClass(classNames);
    });
    // icon prop is not provided
    it('should render a default icon when icon prop is not provided', () => {
        // Arrange
        const defaultIcon = "default-icon.png";

        // Act
        render(<Router><CommunityIcon icon={defaultIcon} /></Router>);

        // Assert
        const iconElement = screen.getByAltText("randomImgs");
        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveAttribute("src", defaultIcon);
    });
})