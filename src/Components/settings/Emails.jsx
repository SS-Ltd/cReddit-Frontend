import React, { useState } from "react";
import Setting from "./Setting";
import Subtitle from "./components/Subtitle";

function Emails({chatEmail, followEmail, setUserSettings}) {
  const [toggles, setToggles] = useState({
    chatRequests: chatEmail,
    newFollowers: followEmail,
    unsubscribeFromAllEmails: false,
  });

  const handleToggle = (id) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [id]: !prevToggles[id],
    }));
  };

  return (
    <div className="flex flex-col w-full">
      <h3 className="text-white text-xl -mb-3 font-bold font-plex">
        Manage Emails
      </h3>
      <Subtitle title = "Messages" />
      <Setting
          title = "Chat requests"
          clickableID = "settings-emails-chat-requests-toggle-button"
          settingName = "chatEmail"
          pageName = "email"
          setUserSettings = {setUserSettings}
          toggleButton = {true}
          isToggled = {toggles["chatRequests"]}
      />

      <Subtitle title = "Activity" />
      <Setting
          title = "New followers"
          clickableID = "settings-emails-new-followers-toggle-button"
          settingName = "followEmail"
          pageName = "email"
          setUserSettings = {setUserSettings}
          toggleButton = {true}
          isToggled = {toggles["newFollowers"]}
      />

      <Subtitle title = "" />
      <Setting
          title = "Unsubscribe from all emails"
          clickableID = "settings-emails-unsubscribe-from-all-emails-toggle-button"
          settingName = "unsubEmails"
          pageName = "email"
          setUserSettings = {setUserSettings}
          toggleButton = {true}
          isToggled = {toggles["unsubscribeFromAllEmails"]}
      />
    </div>
  );
}

export default Emails;

/* ID Documentation */
// settings-emails-chat-requests-toggle-button: Toggle Button for chat requests
// settings-emails-new-followers-toggle-button: Toggle Button for new followers
// settings-emails-unsubscribe-from-all-emails-toggle-button: Toggle Button for unsubscribing from all emails