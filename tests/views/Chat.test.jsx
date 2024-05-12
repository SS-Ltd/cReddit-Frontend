import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import Chat from "@/views/Chat";
import { ChatContext } from "@/context/ChatContext";

describe("Chat Component", () => {
  it("renders LandingOnChat component when neither isAddChat nor isChannelSelected is true", () => {
    const setIsChat = vi.fn();
    render(
      <ChatContext.Provider value={{}}>
        <Chat setIsChat={setIsChat} />
      </ChatContext.Provider>
    );
  });
});
