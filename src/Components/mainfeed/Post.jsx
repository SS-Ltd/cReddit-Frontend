import Share from "./Share";
import Comment from "./Comment";
import Vote from "./Vote";
import redditLogo from "../../assets/reddit_logo.png";
import postImg from "../../assets/post_img.png";
import { useState, useEffect, useRef } from "react";

import moment from "moment";
import { getRequest } from "../../services/Requests";
import { baseUrl } from "../../constants";
import SortingMenu from "./components/SortingMenu";
import SimpleMenu from "../settings/components/SimpleMenu";
import AddComment from "./components/AddComment";
import PostComment from "./components/PostComment";
import NoComments from "./components/NoComments";
import PostContent from "./components/PostContent";

const sorts = [
  { name: "Best" },
  { name: "Hot" },
  { name: "New" },
  { name: "Top" },
  { name: "Rising" },
];

const Post = ({
  id,
  title,
  username,
  content,
  uploadDate,
  commentCount,
  netVote,
  isUpvoted,
  isDownvoted,
  setSelectedPost,
  isSelected,
  isHidden,
}) => {
  const menuRefDots = useRef();
  const [isOpenDots, setIsOpenDots] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sorts[0].name);
  const [addingComment, setAddingComment] = useState(false);
  const [comments, setComments] = useState([]);
  const addCommentRef = useRef();

  // console.log(
  //   id,
  //   postId,
  //   title,
  //   username,
  //   content,
  //   uploadDate,
  //   commentCount,
  //   netVote,
  //   isUpvoted,
  //   isDownvoted,
  //   setSelectedPost,
  //   isSelected
  // );

  useEffect(() => {
    let closeDropdown = (e) => {
      if (menuRefDots.current && !menuRefDots.current.contains(e.target)) {
        setIsOpenDots(false);
      }
    };
    document.addEventListener("click", closeDropdown);

    const scrollingElement = document.getElementById("mainfeed");
    const handleScroll = () => {
      const scrollThreshold = 30;
      const rect = menuRefDots.current.getBoundingClientRect();
      if (rect.top < scrollThreshold) {
        setIsOpenDots(false);
      }
    };

    if (scrollingElement) {
      scrollingElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);

      if (scrollingElement) {
        scrollingElement.removeEventListener("scroll", handleScroll);
      }
    };
  });

  // get comments if selected
  useEffect(() => {
    if (isSelected) {
      getRequest(`${baseUrl}/post/${id}/comment`)
        .then((res) => {
          console.log(res);
          setComments(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else setComments([]);
  }, [isSelected]);

  return (
    <div
      id={"mainfeed_" + id + "_full"}
      href="L"
      className={`flex flex-col bg-reddit_greenyDark ${
        !isSelected && "hover:bg-reddit_hover"
      } ${
        isOpenDots ? "bg-reddit_hover" : ""
      } px-3 pt-2.5 mt-1 pb-1 rounded-2xl w-full cursor-pointer h-fit`}
      hidden={isHidden}
    >
      <PostContent
        id={id}
        profilePicture={redditLogo}
        username={username}
        uploadDate={uploadDate}
        menuRefDots={menuRefDots}
        isOpenDots={isOpenDots}
        setIsOpenDots={setIsOpenDots}
        title={title}
        content={content}
        postImg={postImg}
        isSelected={isSelected}
      />

      <div className="flex flex-row items-center w-full h-13 space-x-2.5 no-select ">
        <Vote
          id={id}
          netVotes={netVote}
          isUpvoted={isUpvoted}
          isDownvoted={isDownvoted}
        />
        <Comment
          id={id}
          commentCount={commentCount}
          url={!isSelected ? `/${username}/comments/${id}` : null}
          onClick={() => {
            console.log(addCommentRef.current);
            addCommentRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        />
        <Share id={id} />
      </div>

      {isSelected && (
        <>
          <div ref={addCommentRef} className="m-2 mt-3 w-10">
            <SimpleMenu
              title={selectedSort}
              menuItems={sorts}
              onSelect={setSelectedSort}
            />
          </div>

          <AddComment
            isCommenting={addingComment}
            setIsCommenting={setAddingComment}
          />

          {comments?.length ? (
            <div className="mb-5">
              {comments.map((comment) => (
                <PostComment
                  key={comment.postId}
                  id={comment.postId}
                  {...comment}
                />
              ))}
            </div>
          ) : (
            <NoComments />
          )}
        </>
      )}
    </div>
  );
};

export default Post;
