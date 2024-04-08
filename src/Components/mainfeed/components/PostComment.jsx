import moment from "moment";
import Vote from "../Vote";
import Comment from "../Comment";
import Share from "../Share";
import Save from "./Save";

function PostComment({
  username,
  content,
  image,
  uploadDate,
  profilePicture,
  netVote,
  isUpvoted,
  isDownvoted,
}) {
  return (
    <>
      <div className="w-full mt-6 flex flex-row justify-start items-center overflow-hidden">
        <div className=" bg-reddit_greenyDark flex flex-row justify-start items-center">
          <img
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
            alt="avatar"
            className="h-9 w-9 rounded-full"
          />
          <p className="text-white text-xs font-bold ml-3">{username}</p>
          <p className="text-gray-400 text-xs  ml-2">
            • {moment(uploadDate).fromNow()}
          </p>
        </div>
      </div>
      <div className="w-full mt-2 flex flex-row justify-start items-center overflow-hidden">
        <div className="ml-9 bg-reddit_greenyDark flex flex-row justify-start items-center">
          <p className="text-white text-sm ml-3">{content}</p>
        </div>
      </div>
      <div className="w-full mt-3 ml-12 flex flex-row justify-start items-center">
        <Vote
          id={"id"}
          netVotes={netVote}
          isUpvoted={isUpvoted}
          isDownvoted={isDownvoted}
        />

        <div className="ml-3">
          <Share id={"id"} />
        </div>
        <div className="ml-3">
          <Save />
        </div>
      </div>
    </>
  );
}

export default PostComment;
