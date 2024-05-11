/**
 * A custom React hook to manage chat functionality.
 * Sets the document title to "Reddit - Chat" and updates the chat state.
 * @param {function} setIsChat - A function to set the chat state.
 * @returns {void}
 */
import { useEffect } from 'react';
const useChat = (setIsChat) => {
  useEffect(() => {
    setIsChat(true);
    const originalTitle = document.title;
    document.title = "Reddit - Chat";

    return () => {
      document.title = originalTitle;
      setIsChat(false);
    };
  }, [setIsChat]); // Don't forget to include any dependencies
};

export default useChat;
