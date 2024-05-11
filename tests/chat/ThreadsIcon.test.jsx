import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import * as React from 'react';
import ThreadsIcon from "@/Components/chat/ThreadsIcon";
afterEach(() => {
    cleanup();
});

describe("Threads component", () => {
    // Renders a div element with id 'open-threads' and data-testid 'open-threads'
    it('should render a div element with id \'open-threads\' and data-testid \'open-threads\'', () => {
        render(<ThreadsIcon />);
        const openThreadsDiv = screen.getByTestId('open-threads');
        expect(openThreadsDiv).toBeInTheDocument();
        expect(openThreadsDiv).toHaveAttribute('id', 'open-threads');
    });
    it('should have isOpenThreads state initially false', () => {
        render(<ThreadsIcon />);
        const openThreadsDiv = screen.getByTestId('open-threads');
        expect(openThreadsDiv).toHaveClass('flex');
    });

});