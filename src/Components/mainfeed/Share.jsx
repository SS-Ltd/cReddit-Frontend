import { useState, useRef, useEffect } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const Share = ({ id }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const node = useRef();

  const handleClick = (e) => {
    console.log("click");
    // console.log(e.target);
    // console.log(node.current);
    // console.log(node.current.contains(e.target));
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="relative" ref={node} onMouseDown={(e) => handleClick(e)}>
      <div
        id={"mainfeed_" + id + "_share"}
        className="flex flex-row items-center w-21 h-8 justify-center bg-reddit_search hover:bg-reddit_search_light rounded-3xl "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        // onBlur={() => setIsMenuOpen(false)}
      >
        <ArrowUpTrayIcon className="h-5 w-6 mr-1 text-gray-300" />
        <span className="text-gray-300 text-sm mr-1.5"> Share</span>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 rounded-md shadow-lg">
          <div className="bg-reddit_grayDark text-white text-md font-plex rounded-md">
            <span className="block pt-3 pb-3 pr-2 pl-5 hover:bg-reddit_hover flex flex-row items-center justify-start">
              <svg
                rpl=""
                fill="currentColor"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path d="M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z"></path>
                <path d="M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z"></path>
              </svg>
              <p className="ml-2">Copy Link</p>
            </span>
            <span className="block pt-3 pb-3 pr-2 pl-5 hover:bg-reddit_hover flex flex-row items-center justify-start">
              <svg
                rpl=""
                fill="currentColor"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path d="m15.944 11.926-.888.879 1.925 1.945H12A4.873 4.873 0 0 1 7.138 10 4.873 4.873 0 0 1 12 5.25h4.971l-1.915 1.936.888.878L18.875 5.1a.727.727 0 0 0-.007-1.025l-2.929-2.9-.878.888L17.011 4H12a6.128 6.128 0 0 0-6.056 5.25H1v1.625h4.981A6.117 6.117 0 0 0 12 16h5l-1.94 1.92.878.89 2.929-2.9a.726.726 0 0 0 .006-1.025l-2.929-2.96Z"></path>
              </svg>
              <p className="ml-2">Crosspost</p>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
