import React from "react";
import { baseUrl } from "@/constants";
import { deleteRequest, patchRequest } from "@/services/Requests";

/**
 * Component representing a message in the user's inbox.
 * Allows users to view, delete, and mark messages as read.
 * For invitations, users can also accept or reject community moderation invitations.
 * @param {Object} props - Component props.
 * @param {string} props.id - The unique identifier of the message.
 * @param {string} props.from - The sender of the message.
 * @param {string} props.to - The recipient of the message.
 * @param {string} props.subject - The subject of the message.
 * @param {string} props.text - The content of the message.
 * @param {boolean} props.isRead - Flag indicating if the message has been read.
 * @param {boolean} props.isDeleted - Flag indicating if the message has been deleted.
 * @param {string} props.createdAt - The timestamp when the message was created.
 * @returns {JSX.Element|null} Component representing a message.
 */
const MessagesInbox = ({
  id,
  from,
  to,
  subject,
  text,
  isRead,
  isDeleted,
  createdAt,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isInvitation = subject.toLowerCase().includes("invitation to moderate");

  const communityName = isInvitation ? subject.split("/r/")[1] : null;

  /**
   * Deletes the message from the inbox.
   * Reloads the page after successful deletion.
   * @returns {Promise<void>} A promise indicating completion.
   */
  const handleDelete = async () => {
    try {
      await deleteRequest(`${baseUrl}/message/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  /**
   * Marks the message as read.
   * Reloads the page after successful operation.
   * @returns {Promise<void>} A promise indicating completion.
   */
  const handleMarkAsRead = async () => {
    try {
      await patchRequest(`${baseUrl}/message/${id}/mark-as-read`);
      window.location.reload();
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  /**
   * Accepts a community moderation invitation.
   * Reloads the page after successful operation.
   * @returns {Promise<void>} A promise indicating completion.
   */
  const handleAccept = async () => {
    try {
      await patchRequest(`${baseUrl}/accept-invite/${communityName}`);
      window.location.reload();
    } catch (error) {
      console.error("Error accepting invitation:", error);
    }
  };

  /**
   * Rejects a community moderation invitation.
   * Reloads the page after successful operation.
   * @returns {Promise<void>} A promise indicating completion.
   */
  const handleReject = async () => {
    try {
      await patchRequest(`${baseUrl}/reject-invite/${communityName}`);
      window.location.reload();
    } catch (error) {
      console.error("Error rejecting invitation:", error);
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className="px-[10px] py-[20px] w-[60%] hover:w-[80%] hover:text-[16px] hover:px-[30px] text-[12px] transition-all duration-[400ms] ease-in-out text-[#D7DADC] bg-[#7A9299] m-[1.5rem] rounded-xl shadow-2xl">
      <div className="bg-[#1B2426] py-[10px] px-[15px] rounded-xl hover:shadow-2xl transition duration-[750ms] ease-in-out">
        <p className="mb-[0.5rem] font-bold">{subject}</p>
        <div className="text-sm text-gray-400">{formattedDate}</div>
        <div className="py-[10px] px-[15px]">
          <p className="pl-[14px] float-left">from /u/{from}</p>
          <p className="pl-[14px] float-left">to /u/{to}</p>
          <div className="pl-[28px] clear-left mt-[1.5rem]">{text}</div>
          {isInvitation && (
            <div className="my-[1.5rem] flex justify-center">
              <button
                className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleReject}
              >
                Reject
              </button>
            </div>
          )}
          <ul className="my-[10px] ml-[15px] list-none text-[13px] flex flex-row">
            <li
              className="mr-[10px] hover:bg-[#7A9299] hover:text-[#1B2426] rounded-md w-[50px] text-center cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </li>
            {!isRead && (
              <li
                className="hover:bg-[#7A9299] hover:text-[#1B2426] rounded-md w-[100px] text-center cursor-pointer"
                onClick={handleMarkAsRead}
              >
                Mark Read
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MessagesInbox;
