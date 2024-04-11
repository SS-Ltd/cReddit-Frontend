import React, { useState } from "react";
import Setting from "./Setting";
import Subtitle from "./components/Subtitle";

/**
 * Notifications is a React component that displays the user's notification settings.
 * It allows the user to toggle various notification settings, such as mentions, comments, upvotes, replies, new followers, and post notifications.
 *
 * @component
 * @param {Object} props - The props for the Notifications component.
 * @param {boolean} props.mentionsNotifs - Whether the user has enabled notifications for mentions.
 * @param {boolean} props.commentsNotifs - Whether the user has enabled notifications for comments on their posts.
 * @param {boolean} props.postsUpvotesNotifs - Whether the user has enabled notifications for upvotes on their posts.
 * @param {boolean} props.repliesNotifs - Whether the user has enabled notifications for replies to their comments.
 * @param {boolean} props.newFollowersNotifs - Whether the user has enabled notifications for new followers.
 * @param {boolean} props.postNotifs - Whether the user has enabled notifications for new posts in their communities.
 * @param {Function} props.setUserSettings - A function to update the user settings.
 */
function Notifications({
  mentionsNotifs,
  commentsNotifs,
  postsUpvotesNotifs,
  repliesNotifs,
  newFollowersNotifs,
  postNotifs,
  setUserSettings,
}) {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-white -mb-3 text-xl font-bold font-plex">
        Notification settings
      </h3>

      <Subtitle title="Activity" />

      <Setting
        title="Mentions of u/username"
        clickableID="settings-notifications-mentions-of-username-toggle-button"
        settingName="mentionsNotifs"
        pageName="notifications"
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={mentionsNotifs}
      />

      <Setting
        title="Comments on your posts"
        clickableID="settings-notifications-comments-on-your-posts-toggle-button"
        settingName="commentsNotifs"
        pageName="notifications"
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={commentsNotifs}
      />

      <Setting
        title="Upvotes on your posts"
        clickableID="settings-notifications-upvotes-on-your-posts-toggle-button"
        settingName="postsUpvotesNotifs"
        pageName="notifications"
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={postsUpvotesNotifs}
      />

      <Setting
        title="Upvotes on your comments"
        clickableID="settings-notifications-upvotes-on-your-comments-toggle-button"
        settingName="commentsUpvotesNotifs"
        pageName="notifications"
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={true}
      />

      <Setting
        title="Replies to your comments"
        clickableID="settings-notifications-replies-to-your-comments-toggle-button"
        settingName="repliesNotifs"
        pageName="notifications"
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={repliesNotifs}
      />

      <Setting
        title="New followers"
        clickableID="settings-notifications-new-followers-toggle-button"
        settingName="newFollowersNotifs"
        pageName="notifications"
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={newFollowersNotifs}
      />

      <Setting
        title="Posts you follow"
        clickableID="settings-notifications-posts-you-follow-toggle-button"
        settingName="postNotifs"
        pageName="notifications"
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={postNotifs}
      />

      <Setting
        title="Comments you follow"
        clickableID="settings-notifications-comments-you-follow-toggle-button"
        settingName="commentsYouFollowNotifs"
        pageName="notifications"
        setUserSettings={setUserSettings}
        toggleButton={true}
        isToggled={true}
      />
    </div>
  );
}

export default Notifications;

/* ID Documentation */
// settings-notifications-mentions-of-username-toggle-button: Toggle Button for mentions of username
// settings-notifications-comments-on-your-posts-toggle-button: Toggle Button for comments on your posts
// settings-notifications-upvotes-on-your-posts-toggle-button: Toggle Button for upvotes on your posts
// settings-notifications-upvotes-on-your-comments-toggle-button: Toggle Button for upvotes on your comments
// settings-notifications-replies-to-your-comments-toggle-button: Toggle Button for replies to your comments
// settings-notifications-new-followers-toggle-button: Toggle Button for new followers
// settings-notifications-posts-you-follow-toggle-button: Toggle Button for posts your follow
// settings-notifications-comments-you-follow-toggle-button: Toggle Button for comments you follow
