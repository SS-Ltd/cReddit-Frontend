import { describe, it, vi, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router-dom";
import NotificationList from "@/Components/notifications/NotificationList";

// Mocking the useNotifications hook
vi.mock("@/Components/notifications/NotificationContext", () => ({
  useNotifications: () => ({
    setNotifications: vi.fn(),
    removeNotification: vi.fn(),
  }),
}));

const notifications = [
  {
    key: 1,
    title: "Notification 1",
    description: "Description for notification 1",
    time: new Date().toISOString(),
    image: "notification1.png",
    isRead: false,
  },
  {
    key: 2,
    title: "Notification 2",
    description: "Description for notification 2",
    time: new Date().toISOString(),
    image: "notification2.png",
    isRead: true,
  },
];

describe("NotificationList", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <NotificationList
          notifications={notifications}
          isNewNotificationsPage={true}
          setIsOpenBellMenu={() => {}}
        />
      </BrowserRouter>
    );
  });

  it('handles "See All" click correctly', () => {
    render(
      <BrowserRouter>
        <NotificationList
          notifications={notifications}
          isNewNotificationsPage={false}
          setIsOpenBellMenu={() => {}}
        />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("See All"));
  });
});
