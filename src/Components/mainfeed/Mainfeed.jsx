import Separator from "../sidebar/Nav-Icons/Separator";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDownIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import Post from "./Post";
import { getRequest } from "../../services/Requests";
import { baseUrl } from "../../constants";
import SortingMenu from "./components/SortingMenu";

// ...

const sorts = ["Best", "Hot", "New", "Top", "Rising"];

function getSelectedPost(location, posts, setSelectedPost) {
  console.log(location.pathname);
  // check if "comments" is in the url
  if (location.pathname.includes("comments")) {
    // get the post id from the url
    const postId = location.pathname.split("/").reverse()[0];
    console.log(postId);
    const post = posts?.find((post) => post.postId === postId);
    setSelectedPost(post);
  } else setSelectedPost(null);
}

const Mainfeed = () => {
  const [isOpenCateg, setIsOpenCateg] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);
  const [posts, setPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const location = useLocation();

  const menuRefCateg = useRef();
  const menuRefView = useRef();

  function handleSelectPost(postId) {
    if (postId == -1) return setSelectedPost(null);
    console.log(posts);
    const post = posts?.find((post) => {
      console.log(post.postId);
      return post.postId == postId;
    });
    console.log("Selected Post: ");
    console.log(post);
    setSelectedPost(post);
  }

  useEffect(() => {
    getSelectedPost(location, posts, setSelectedPost);
  }, [location]);

  useEffect(() => {
    getRequest(`${baseUrl}/posts`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        getSelectedPost(location, res.data, setSelectedPost);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let closeDropdown = (e) => {
      if (menuRefCateg.current && !menuRefCateg.current.contains(e.target)) {
        setIsOpenCateg(false);
      }
      if (menuRefView.current && !menuRefView.current.contains(e.target)) {
        setIsOpenView(false);
      }
    };
    document.addEventListener("click", closeDropdown);

    const mainfeedElement = document.getElementById("mainfeed");

    const handleScroll = () => {
      const scrollThreshold = 58;
      if (mainfeedElement.scrollTop > scrollThreshold) {
        setIsOpenCateg(false);
        setIsOpenView(false);
      }
    };

    if (mainfeedElement) {
      mainfeedElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
      if (mainfeedElement) {
        mainfeedElement.removeEventListener("scroll", handleScroll);
      }
    };
  });

  return (
    <div
      id="mainfeed"
      className="flex flex-col w-full h-full bg-reddit_greenyDark no-select px-1 py-1 overflow-auto scrollbar_mod_mf overflow-x-hidden "
    >
      <div
        className="flex items-center h-12 mb-2 px-2 w-full"
        hidden={selectedPost}
      >
        <div
          id="mainfeed_category_dropdown"
          ref={menuRefCateg}
          className="relative"
        >
          <SortingMenu
            isOpen={isOpenCateg}
            setIsOpen={setIsOpenCateg}
            items={sorts}
          />
        </div>

        <div ref={menuRefView} className="relative">
          <div
            id="mainfeed_view_type"
            onClick={() => setIsOpenView((prev) => !prev)}
            className={`flex w-14 h-7 rounded-full hover:bg-reddit_search_light ${
              isOpenView ? "bg-reddit_search_light" : ""
            } justify-center items-center cursor-pointer`}
          >
            <ViewColumnsIcon className="h-4.5 w-5 text-gray-500 rotate-90" />
            <ChevronDownIcon className="h-3 ml-0.5 w-3 text-gray-400" />
          </div>

          {isOpenView && (
            <div className=" w-30 h-33 bg-reddit_lightGreen absolute -ml-7 mt-2.5 text-white text-sm pt-2 z-1 rounded-lg  font-extralight flex flex-col">
              <div className="w-full pl-3  rounded-lg h-8 flex items-center font-medium">
                <p className="no-select">View</p>
              </div>
              <a
                id="mainfeed_view_card"
                href=""
                className="w-full pl-6 hover:bg-reddit_hover h-11 flex items-center cursor-pointer"
              >
                <ViewColumnsIcon className="h-4.5 w-5 text-white rotate-90" />
                <p className="ml-2 no-select">Card</p>
              </a>
              <a
                id="mainfeed_view_classic"
                href=""
                className="w-full pl-6 hover:bg-reddit_hover h-11 flex rounded-b-lg items-center cursor-pointer"
              >
                <ViewColumnsIcon className="h-4.5 w-5 text-white rotate-90" />
                {/* Todo change the icon, make the buttons change color when clicked, and when any click anyhwere else, close the dropdown */}
                <p className="ml-2 no-select">Classic</p>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className=" h-1 flex w-full" hidden={selectedPost}>
        <Separator />
      </div>

      {/* <Post id="post1" />
      <Post id="post2" />
      <Post id="post3" />
      <Post id="post4" />
      <Post id="post5" /> */}

      {posts &&
        posts.map((post, i) => (
          <Post
            key={i}
            id={`post${i}`}
            {...post}
            onClick={() => handleSelectPost(post.postId)}
            isSelected={selectedPost?.postId === post.postId}
            isHidden={selectedPost && selectedPost.postId !== post.postId}
          />
        ))}
    </div>
  );
};

export default Mainfeed;
