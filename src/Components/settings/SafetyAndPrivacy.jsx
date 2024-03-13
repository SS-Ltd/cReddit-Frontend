import Setting from "./Setting";
import Subtitle from "./Subtitle";
import FloatingInput from "./form-components/FloatingInput";

function SafetyAndPrivacy() {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-white text-xl font-bold font-plex">
        Safety & Privacy
      </h3>

      <h6 className="text-gray-600 text-xs font-bold font-plex mt-3 max-w-2xl">
        Manage how we use data to personalize your Reddit experience, and
        control how other redditors interact with you. To learn more, visit our
        Privacy & Security FAQs .
      </h6>

      <Subtitle title="SAFTEY" />
      <Setting
        title="People You’ve Blocked"
        message="Blocked people can’t send you chat requests or private messages."
      />
      <FloatingInput
        id="safety-block-user-input"
        label="BLOCK NEW USER"
        buttonText="ADD"
      />

      <Setting
        title="Communities You've Muted"
        message="Posts from muted communities won't show up in your feeds or recommendations."
      />
      <FloatingInput
        id="safety-mute-community-input"
        label="MUTE NEW COMMUNITY"
        buttonText="ADD"
      />
    </div>
  );
}

export default SafetyAndPrivacy;

/* ID Documentation */

// safety-block-user-input: Input to block new user
// safety-mute-community-input: Input to mute new community
