import {
  BookmarkIcon,
  EllipsisHorizontalIcon,
  EyeSlashIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";

function PostContent({
  id,
  profilePicture,
  username,
  uploadDate,
  menuRefDots,
  setIsOpenDots,
  isOpenDots,
  title,
  content,
  postImg,
  isSelected,
}) {
  return (
    <>
      <div className="flex flex-row items-center w-full h-6 ">
        {isSelected && (
          <div
            className="max-w-10 min-h-10 mr-3 flex flex-row justify-center items-center w-full h-6 rounded-full bg-gray-800"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <svg
              rpl=""
              fill="currentColor"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400 text-bold rounded-full h-5 w-5"
            >
              <path d="M19 9.375H2.51l7.932-7.933-.884-.884-9 9a.625.625 0 0 0 0 .884l9 9 .884-.884-7.933-7.933H19v-1.25Z"></path>
            </svg>
          </div>
        )}
        <a
          id={"mainfeed_" + id + "_community"}
          href=""
          className="flex items-center w-fit"
        >
          <img src={profilePicture} alt="Logo" className="w-6 h-6" />
          <p className="text-gray-300 font-semibold text-xs ml-2 hover:text-cyan-600">
            {username}
          </p>
        </a>

        <p className="text-gray-400 font-bold text-xs ml-2 mb-1.5">.</p>
        <p className="text-gray-400 font-extralight text-xs ml-1.5">
          {moment(uploadDate).fromNow()}
        </p>

        <div ref={menuRefDots} className="relative ml-auto">
          <div
            id={"mainfeed_" + id + "_menu"}
            className="h-7 w-7 ml-auto text-white rounded-full flex justify-center items-center hover:bg-reddit_search_light"
          >
            <EllipsisHorizontalIcon
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenDots((prev) => !prev);
              }}
              className="h-6 w-6 outline-none"
            />
          </div>

          {isOpenDots && (
            <div className="z-1 w-30 h-37 bg-reddit_lightGreen absolute -ml-20 mt-1 text-white text-sm py-2 rounded-lg font-extralight flex flex-col">
              <div
                id={"mainfeed_" + id + "_menu_save"}
                className="w-full pl-6 hover:bg-reddit_hover h-12 flex items-center cursor-pointer"
              >
                <BookmarkIcon className="h-4.5 w-5 text-white " />
                <p className="ml-2 no-select">Save</p>
              </div>
              <div
                id={"mainfeed_" + id + "_menu_hide"}
                className="w-full pl-6 hover:bg-reddit_hover h-12 flex rounded-b-lg items-center cursor-pointer"
              >
                <EyeSlashIcon className="h-4.5 w-5 text-white" />
                {/* Todo change the icon, make the buttons change color when clicked, and when any click anyhwere else, close the dropdown */}
                <p className="ml-2 no-select">Hide</p>
              </div>

              <div
                id={"mainfeed_" + id + "_menu_report"}
                className="w-full pl-6 hover:bg-reddit_hover h-12 flex rounded-b-lg items-center cursor-pointer"
              >
                <FlagIcon className="h-4.5 w-5 text-white " />
                {/* Todo change the icon, make the buttons change color when clicked, and when any click anyhwere else, close the dropdown */}
                <p className="ml-2 no-select">Report</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-1 w-full flex  flex-col">
        <div className="text-white mt-1.5 font-medium text-lg">
          <h1>{title}</h1>
        </div>

        <div className="text-gray-400 text-sm mt-1.5">
          <p>{content}</p>
        </div>

        <a
          id={"mainfeed_" + id + "_img"}
          href="img"
          className="w-full h-full mt-2"
        >
          <img src={postImg} alt="Post" className="rounded-2xl" />
        </a>
      </div>
    </>
  );
}

export default PostContent;
