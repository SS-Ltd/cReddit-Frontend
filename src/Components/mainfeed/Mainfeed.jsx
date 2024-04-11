import Separator from "../sidebar/Nav-Icons/Separator";
import { useState, useEffect, useRef, useContext, useCallback } from 'react';
import { ChevronDownIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import { useLocation } from "react-router-dom";
import Post from "./Post";
import { UserContext } from '@/context/UserContext';
import { postRequest, getRequest, postRequestImg } from "../../services/Requests";
import { baseUrl } from "../../constants";
import Loading from "../Loading/Loading";
import SortingMenu from "./components/SortingMenu";


const sorts = ["Best", "Hot", "New", "Top", "Rising"];

function getSelectedPost(location, posts, setSelectedPost) {
  console.log(location.pathname);
  // check if "comments" is in the url
  if (location.pathname.includes("comment")) {
    // get the post id from the url
    const postId = location.pathname.split("/").reverse()[0];
    console.log(postId);
    const post = posts?.find((post) => post._id === postId);
    console.log(`Found post: ${post}`);
    setSelectedPost(post);
  } else setSelectedPost(null);
}


const Mainfeed = () => {
  const [isOpenCateg, setIsOpenCateg] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);
  const [posts, setPosts] = useState([]);
  const { isLoggedIn } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const location = useLocation();


  const menuRefCateg = useRef();
  const menuRefView = useRef();


  useEffect(() => {
    const getHomeFeed = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getRequest(`${baseUrl}/post/home-feed?page=${page}&limit=8&sort=all`);
        if (response.status == 200 || response.status == 201) {
          setPosts(prevPosts => [...prevPosts, ...response.data]);
          getSelectedPost(location, response.data, setSelectedPost);
          setHasMore(response.data.length > 0);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (!location.pathname.includes("comment")) {
      setLoading(true);
      getHomeFeed();
    }
  }, [isLoggedIn, page]);


  const handleScroll = useCallback(() => {
    const mainfeedElement = document.getElementById("mainfeed");
    const threshold = 10;
    if (mainfeedElement.scrollTop + mainfeedElement.clientHeight >= mainfeedElement.scrollHeight - threshold) {
      setPage(prevPage => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    const mainfeedElement = document.getElementById("mainfeed");

    if (mainfeedElement) {
      mainfeedElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainfeedElement) {
        mainfeedElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);


  function handleSelectPost(postId) {
    if (postId == -1) return setSelectedPost(null);
    console.log(posts);
    const post = posts?.find((post) => {
      console.log(post._id);
      return post._id == postId;
    });
    console.log("Selected Post: ");
    console.log(post);
    setSelectedPost(post);
  }

  useEffect(() => {
    getSelectedPost(location, posts, setSelectedPost);
  }, [location]);

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
    <div id="mainfeed" className="flex flex-col w-full h-full bg-reddit_greenyDark no-select px-1 py-1 overflow-auto scrollbar_mod_mf overflow-x-hidden ">
      <div className="flex items-center h-12 mb-2 px-2 w-full" >

        <div id="mainfeed_category_dropdown" ref={menuRefCateg} className="relative">


          <SortingMenu
            isOpen={isOpenCateg}
            setIsOpen={setIsOpenCateg}
            items={sorts}
          />

        </div>

        <div ref={menuRefView} className="relative">
          <div id="mainfeed_view_type" onClick={() => setIsOpenView((prev) => !prev)} className={`flex w-14 h-7 rounded-full hover:bg-reddit_search_light ${isOpenView ? 'bg-reddit_search_light' : ''} justify-center items-center cursor-pointer`} >
            <ViewColumnsIcon className='h-4.5 w-5 text-gray-500 rotate-90' />
            <ChevronDownIcon className='h-3 ml-0.5 w-3 text-gray-400' />
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

      {posts.map((post, i) => (
        <Post key={i}
          id={post._id}
          {...post}
          setSelectedPost={(postId) => handleSelectPost(postId)}
          isSelected={selectedPost?._id === post._id}
          isShown={selectedPost && selectedPost._id !== post._id} />
      ))}

      {
        <div className="w-full max-h-15 mt-10">
          {loading && <Loading />}
          <div className="relative w-full h-full">
            <div className="text-gray-400 text-sm mt-1.5">
              <p className=" text-transparent">
                Tabgo corpus texo. Cicuta dsdsdsddsdsdsds dsdsdsddsdsdsds in quaerat caveo corpus bellicus. Voluptates terror via curis deludo supra somniculosus bibo.
              </p>
            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default Mainfeed;
