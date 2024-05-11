import React, { createContext, useContext, useState, useEffect } from "react";

const NotificationContext = createContext();

/**
 * Custom hook to access notification data and functions within the NotificationProvider.
 *
 * @returns {Object} The context object containing notification state and related functions.
 */
export const useNotifications = () => useContext(NotificationContext);

/**
 * Provider component that manages notification state and provides it to children components.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components that will receive context values.
 * @returns {JSX.Element} The NotificationProvider component with shared notification context.
 */
export const NotificationProvider = ({ children }) => {
  const [isNotificationListVisible, setIsNotificationListVisible] =
    useState(false);
  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem("notifications");
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  });

  /**
   * Effect hook that updates localStorage whenever the notifications state changes.
   */
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  /**
   * Adds a new notification to the list of current notifications.
   *
   * @param {Object} notification - The notification object to add.
   */
  const addNotification = (notification) => {
    setNotifications((prev) => [notification, ...prev]);
  };

  /**
   * Clears all notifications from the list.
   */
  const flushNotifications = () => {
    setNotifications([]);
  };

  /**
   * Removes a specific notification based on its unique identifier.
   *
   * @param {string} id - The unique identifier of the notification to remove.
   */
  const removeNotification = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.filter((notification) => notification.key !== id)
    );
  };

  /**
   * Makes the notification list visible.
   */
  const showNotificationList = () => {
    setIsNotificationListVisible(true);
  };

  /**
   * Hides the notification list from view.
   */
  const hideNotificationList = () => {
    setIsNotificationListVisible(false);
  };

  /**
   * Clears existing notifications and replaces them with a new set.
   *
   * @param {Array} newNotifications - The new list of notifications to set.
   */
  const flushAndAddNotifications = (newNotifications) => {
    setNotifications(newNotifications);
  };

  return (
    <NotificationContext.Provider
      value={{
        isNotificationListVisible,
        showNotificationList,
        hideNotificationList,
        notifications,
        setNotifications,
        addNotification,
        flushAndAddNotifications,
        flushNotifications,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
