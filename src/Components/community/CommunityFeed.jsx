import Separator from "../sidebar/Nav-Icons/Separator";
import { useState, useEffect, useRef, useContext, useCallback } from "react";
import { ChevronDownIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import Post from "../mainfeed/Post";
import { UserContext } from "@/context/UserContext";
import {
  postRequest,
  getRequest,
  postRequestImg,
} from "../../services/Requests";
import { baseUrl } from "../../constants";
import Loading from "../Loading/Loading";
import { useLocation } from "react-router-dom";
import Comment from "../mainfeed/comment/Comment";

/**
 * CommunityFeed is a React component that renders a feed of posts for a specific subreddit.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.subredditName - The name of the subreddit for which to fetch and display posts.
 *
 * @example
 * <CommunityFeed subredditName="reactjs" />
 *
 * @returns {React.Element} The rendered component.
 */
const CommunityFeed = ({ subredditName, isMember }) => {
  const [isOpenCateg, setIsOpenCateg] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [isSinglePostSelected, setIsSinglePostSelected] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [homeFeedScroll, setHomeFeedScroll] = useState(0);
  const [isSortChanged, setIsSortChanged] = useState(0);
  const commfeedRef = useRef();
  const existingPost = useRef(null);
  const prevSubredditNameRef = useRef(subredditName);

  const [selectedSort, setSelectedSort] = useState(() => {
    /**
     * This function checks if the selected sort is stored in local storage.
     * If it is, it returns the stored sort. If not, it sets the selected sort to "New" and stores it in local storage.
     * @returns {string} The selected sort.
     * @name selectedSort
     * @memberof CommunityFeed
     * @inner
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage|localStorage}
     */

    const storedSort = localStorage.getItem("subredditSelectedSort");
    if (storedSort) {
      return storedSort;
    } else {
      localStorage.setItem("subredditSelectedSort", "New");
      return "New";
    }
  });

  const [feedLoading, setIsFeedLoading] = useState(false);

  const menuRefCateg = useRef();
  const menuRefView = useRef();
  const navigate = useLocation();
  const prevSort = useRef(selectedSort);

  /**
   * This function is called when the last post in the feed is reached.
   * It fetches the next page of posts.
   * @param {Object} node - The last post in the feed.
   * @returns {void}
   * @callback
   * @name lastPostRef
   * @memberof CommunityFeed
   * @inner
   * @see {@link https://reactjs.org/docs/hooks-reference.html#usecallback|useCallback}
   */
  const observer = useRef();
  const lastPostRef = useCallback(
    (node) => {
      if (feedLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [feedLoading, hasMore]
  );

  /**
   * This function fetches a single post by its ID.
   * It sets the selected post to the fetched post.
   * @param {string} selectedPostId - The ID of the post to fetch.
   * @returns {void}
   * @callback
   * @name getSinglePost
   * @memberof CommunityFeed
   * @inner
   * @see {@link https://reactjs.org/docs/hooks-reference.html#usecallback|useCallback}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API|Fetch API}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|Response}
   */
  const getSinglePost = async (selectedPostId) => {
    setLoadingPost(true);
    const existingPost = posts.find((post) => post._id === selectedPostId);
    if (existingPost) {
      setSelectedPost(existingPost);
    } else {
      const response = await getRequest(`${baseUrl}/post/${selectedPostId}`);
      if (response.status == 200 || response.status == 201) {
        setSelectedPost(response.data);
      }
    }
    setLoadingPost(false);
  };

  /**
   * This function fetches the next page of posts for the current subreddit.
   * It sets the feed loading state to true, fetches the next page of posts, and sets the feed loading state to false.
   * @returns {void}
   * @callback
   * @name getHomeFeed
   * @memberof CommunityFeed
   * @inner
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API|Fetch API}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|Response}
   */
  useEffect(() => {
    if (prevSort.current !== selectedSort) {
      setPosts([]);
      setPage(1);
      setIsSortChanged((prev) => prev + 1);
    }
  }, [selectedSort]);

  /**
   * This useEffect hook is triggered when the `subredditName` changes.
   * It checks if the previous subreddit name is different from the current one.
   * If they are different, it resets the posts array, sets the page number to 1,
   * and increments the `isSortChanged` state by 1.
   *
   * @param {string} subredditName - The name of the subreddit currently being viewed.
   * @param {function} setPosts - Function to set the posts state.
   * @param {function} setPage - Function to set the page state.
   * @param {function} setIsSortChanged - Function to set the `isSortChanged` state.
   * @param {object} prevSubredditNameRef - A ref object that holds the previous subreddit name.
   *
   * @returns {void}
   */
  useEffect(() => {
    if (prevSubredditNameRef.current !== subredditName) {
      setPosts([]);
      setPage(1);
      setIsSortChanged((prev) => prev + 1);
    }
  }, [subredditName]);

  /**
   * This useEffect hook is triggered when the `page` state changes.
   * It checks if the `existingPost` ref is set to true.
   * If it is, it sets the `existingPost` ref to null and returns.
   * It then fetches the next page of posts for the current subreddit.
   * If the response status is 200 or 201, it sets the posts state to the fetched posts.
   * If the response status is not 200 or 201, it throws an error.
   * Finally, it sets the feed loading state to false.
   */
  useEffect(() => {
    if (existingPost.current) {
      existingPost.current = null;
      return;
    }

    /**
     * Asynchronously fetches the home feed from a subreddit.
     *
     * This function makes a GET request to the subreddit's posts endpoint with the current page, limit, and sort parameters.
     * If the request is successful (status 200 or 201), it appends the new posts to the existing ones and updates the `hasMore` state based on whether there are more posts to load.
     * If the request fails, it throws an error.
     * Regardless of the request's outcome, it sets `isFeedLoading` to false once the request is complete.
     *
     * @async
     * @function
     * @returns {Promise<void>} Nothing
     * @throws Will throw an error if the response status is not 200 or 201.
     */
    const getHomeFeed = async () => {
      try {
        setHasMore(true);
        setIsFeedLoading(true);

        const response = await getRequest(
          `${baseUrl}/subreddit/${subredditName}/posts?page=${page}&limit=15&sort=${selectedSort.toLowerCase()}`
        );
        const status = response.status;
        const data = response.data;
        if (status === 200 || status === 201) {
          setPosts((prevComments) => [...prevComments, ...data]);
          setHasMore(data.length > 0);
        } else {
          throw new Error("Error fetching comments");
        }
      } catch (error) {
      } finally {
        setIsFeedLoading(false);
      }
    };

    if (!navigate.pathname.includes("/comments/")) {
      getHomeFeed();
      prevSort.current = selectedSort;
      prevSubredditNameRef.current = subredditName;
    }
  }, [page, isSortChanged]);

  /**
   * This useEffect hook is triggered when the `navigate.pathname` changes.
   * It checks if the current path includes "/comments/".
   * If it does, it extracts the post ID from the path and sets the `isSinglePostSelected` state to true.
   * It then calls the `getSinglePost` function with the extracted post ID.
   * If the path does not include "/comments/", it sets the `isSinglePostSelected` state to false.
   * @param {string} navigate.pathname - The current path of the application.
   * @param {function} setIsSinglePostSelected - Function to set the `isSinglePostSelected` state.
   * @param {function} getSinglePost - Function to fetch a single post by its ID.
   * @returns {void}
   */
  useEffect(() => {
    const url = navigate.pathname;
    const regex = /.*\/comments\/([A-Za-z0-9]*)\/?.*/;
    const match = url.match(regex);
    if (match) {
      const selectedPostId = match[1];
      setIsSinglePostSelected(true);
      getSinglePost(selectedPostId);
    } else {
      setIsSinglePostSelected(false);
    }
  }, [navigate.pathname]);

  /**
   * This useEffect hook is triggered when the `isSinglePostSelected` state changes.
   * It checks if the `isSinglePostSelected` state is true.
   * If it is, it sets the `isSinglePostSelected` state to false.
   * @param {boolean} isSinglePostSelected - The current value of the `isSinglePostSelected` state.
   * @param {function} setSelectedPost - Function to set the selected post state.
   * @returns {void}
   */
  useEffect(() => {
    let closeDropdown = (e) => {
      if (menuRefCateg.current && !menuRefCateg.current.contains(e.target)) {
        setIsOpenCateg(false);
      }
    };
    document.addEventListener("click", closeDropdown);

    const commfeedElement = document.getElementById("community-feed");

    const handleScroll = () => {
      const scrollThreshold = 58;
      setHomeFeedScroll(commfeedElement.scrollTop);
      if (commfeedElement.scrollTop > scrollThreshold) {
        setIsOpenCateg(false);
      }
    };

    if (commfeedElement) {
      commfeedElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
      if (commfeedElement) {
        commfeedElement.removeEventListener("scroll", handleScroll);
      }
    };
  });

  /**
   * This useEffect hook is triggered when the `navigate.pathname` changes.
   * It checks if the current path includes "/comments/".
   * If it does, it sets the `homeFeedScroll` state to the current scroll position.
   * If it does not, it sets the scroll position to the stored scroll position.
   * @param {string} navigate.pathname - The current path of the application.
   * @param {function} localStorage.getItem - Function to get an item from local storage.
   * @param {function} localStorage.setItem - Function to set an item in local storage.
   * @param {number} homeFeedScroll - The current scroll position of the feed.
   * @returns {void}
   */
  useEffect(() => {
    if (navigate.pathname.includes("/comments/")) {
      localStorage.setItem("communityFeedScroll", homeFeedScroll);
    } else {
      setTimeout(() => {
        commfeedRef.current.scrollTop = localStorage.getItem(
          "communityFeedScroll"
        );
      }, 10);
    }
  }, [navigate.pathname]);

  return (
    <div
      ref={commfeedRef}
      id="community-feed"
      className="flex flex-col w-full h-full bg-reddit_greenyDark no-select px-1 py-1  overflow-hidden "
    >
      {!isSinglePostSelected && (
        <div className="flex items-center h-10 min-h-10 mb-2 mt-1 px-2 w-full">
          <div
            id="commfeed_category_dropdown"
            ref={menuRefCateg}
            className="relative"
          >
            <div
              onClick={() => setIsOpenCateg((prev) => !prev)}
              className={`flex w-14 h-7 rounded-full hover:bg-reddit_search_light ${
                isOpenCateg ? "bg-reddit_search_light" : ""
              } justify-center items-center cursor-pointer`}
            >
              <p className="text-gray-500 font-semibold text-xs no-select ">
                {selectedSort}
              </p>
              <ChevronDownIcon className="h-3 ml-0.5 w-3 text-gray-400" />
            </div>

            {isOpenCateg && (
              <div className=" w-20 h-48 bg-reddit_search absolute mt-2.5 -ml-2.5 text-white text-sm pt-2.5 z-20 rounded-lg  font-extralight flex flex-col">
                <div className="w-full pl-4 rounded-lg h-9 flex items-center font-normal">
                  <p className="no-select">Sort by</p>
                </div>

                <div
                  onClick={() => {
                    setSelectedSort("Hot");
                    setIsOpenCateg(false);
                    localStorage.setItem("subredditSelectedSort", "Hot");
                  }}
                  id="commfeed_category_hot"
                  href=""
                  className="w-full pl-4 hover:bg-reddit_hover h-12 flex items-center cursor-pointer"
                >
                  <p className="no-select">Hot</p>
                </div>

                <div
                  onClick={() => {
                    setSelectedSort("New");
                    setIsOpenCateg(false);
                    localStorage.setItem("subredditSelectedSort", "New");
                  }}
                  id="commfeed_category_new"
                  href=""
                  className="w-full pl-4  hover:bg-reddit_hover h-12 flex items-center cursor-pointer"
                >
                  <p className="no-select">New</p>
                </div>

                <div
                  onClick={() => {
                    setSelectedSort("Top");
                    setIsOpenCateg(false);
                    localStorage.setItem("subredditSelectedSort", "Top");
                  }}
                  id="commfeed_category_top"
                  href=""
                  className="w-full pl-4  hover:bg-reddit_hover h-12 flex items-center cursor-pointer"
                >
                  <p className="no-select">Top</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className={`${
          isSinglePostSelected ? "hidden" : ""
        } h-1 px-2.5 flex w-full`}
      >
        <Separator />
      </div>

      {feedLoading && page == 1 ? (
        <Loading />
      ) : (
        <>
          {!isSinglePostSelected &&
            posts.map((post, i) => {
              if (posts.length === i + 1) {
                return (
                  <Post
                    id={post._id}
                    key={i}
                    setPosts={setPosts}
                    isSinglePostSelected={isSinglePostSelected}
                    {...post}
                    isJoined={isMember}
                    lastPostRef={lastPostRef}
                  />
                );
              } else {
                return (
                  <Post
                    id={post._id}
                    key={i}
                    setPosts={setPosts}
                    isSinglePostSelected={isSinglePostSelected}
                    {...post}
                    isJoined={isMember}
                  />
                );
              }
            })}
        </>
      )}

      {isSinglePostSelected &&
        (loadingPost ? (
          <Loading />
        ) : (
          <>
            <Post
              id={selectedPost._id}
              setPosts={setPosts}
              isSinglePostSelected={isSinglePostSelected}
              {...selectedPost}
            />
            <Comment postId={selectedPost._id} />
          </>
        ))}

      {
        <div className="w-full max-h-15 mt-10">
          {feedLoading && page != 1 && <Loading />}
          {
            <div className="w-full h-6 mt-2">
              <div className="relative w-full h-full">
                <div className="text-gray-400 text-sm mt-1.5">
                  <p className=" text-transparent">
                    Tabgo corpus texo. Cicuta dsdsdsdddddddddddddsdsdsds
                    dsdsdsddsdsdsdsffffffffffff in quaerat caveo corpus
                    bellicus. Voluptates terror via curis deludo supra
                    somniculosus bibo.
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default CommunityFeed;
