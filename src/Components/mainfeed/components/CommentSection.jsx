import { useState, useRef, useEffect } from "react";
import CancelComment from "./CancelComment";

function CommentSection({ isCommenting, setIsCommenting }) {
  const [comment, setComment] = useState("");
  const [buttonColor, setButtonColor] = useState("#4d4608");
  const [modalShow, setModalShow] = useState(false);
  const textareaRef = useRef();

  useEffect(() => {
    if (isCommenting) {
      textareaRef.current.focus();
    }
  }, [isCommenting]);

  return (
    <div
      className="w-full  bg-greenyDark flex flex-col items-center rounded-2xl font-plex border-1 border-gray-500 justify-end"
      hidden={!isCommenting}
    >
      <textarea
        ref={textareaRef}
        className="w-full block rounded-2xl pl-5 pr-5 pb-2 pt-2 text-sm text-gray-300 bg-reddit_greenyDark dark:bg-gray-700 border-0 outline-none"
        cols="10"
        style={{ outline: "none", boxShadow: "none" }}
        onInput={(e) => {
          e.target.style.height = "inherit";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      ></textarea>
      <div className="w-full flex flex-row justify-end p-2 pb-1">
        <button
          className="bg-gray-800 h-8 items-center rounded-3xl font-plex hover:bg-gray-700"
          onClick={() => {
            if (comment.length) setModalShow(true);
            else {
              setIsCommenting(false);
              setComment("");
            }
          }}
        >
          <p className="text-white text-xs font-bold pl-3 pr-3">Cancel</p>
        </button>
        <button
          className="h-8 items-center rounded-3xl font-plex ml-2 "
          style={{ backgroundColor: buttonColor }}
          onMouseEnter={() => setButtonColor("#6b610c")}
          onMouseLeave={() => setButtonColor("#4d4608")}
        >
          <p className="text-white text-xs font-bold pl-3 pr-3 ">Comment</p>
        </button>
      </div>

      <CancelComment
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setIsCommenting(false);
          setComment("");
        }}
      />
    </div>
  );
}

export default CommentSection;
