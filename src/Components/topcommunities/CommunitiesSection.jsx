import { useState, useEffect } from "react";
import CommunityItem from "./CommunityItem";
import { baseUrl } from "../../constants";

/**
 * React component to display top communities from Reddit.
 * @returns {JSX.Element} React component.
 */
const CommunitiesSection = () => {
  /**
   * State to hold the list of communities.
   * @type {[Object[], function]} State hook for communities and setter function.
   */
  const [communities, setCommunities] = useState([]);

  /**
   * State to manage the current page.
   * @type {[number, function]} State hook for page number and setter function.
   */
  const [page, setPage] = useState(1);

  /**
   * Effect hook to fetch top communities based on the page number.
   */
  useEffect(() => {
    const getTop = async () => {
      const response = await getRequest(
        `${baseUrl}/subreddit/top?page=${page}&limit=250&sort=all`
      );
      if (response.status === 200 || response.status === 201) {
        setCommunities(response.data);
      }
    };
    getTop();
  }, [page]);

  /**
   * Generates an array of page numbers around the current page.
   * @param {number} currentPage - The current page number.
   * @returns {number[]} Array of page numbers.
   */
  const generatePages = (currentPage) => {
    const pages = [];
    for (let i = currentPage - 4; i <= currentPage + 4; i++) {
      if (i > 0) {
        pages.push(i);
      }
    }
    return pages;
  };

  return (
    <>
      <section className="box-border p-[1rem] relative max-w-[1200px] mx-auto mb-[1rem] block break-words leading-[1.5rem]">
        <header className="p-0 my-[1rem] mx-[0rem]">
          <h1 className="flex items-center justify-center font-bold mt-[64px] mb-[0.25rem] mx-0 text-[1rem] leading-[1.25rem] ms-0 me-0 text-[#F2F2F2]">
            Best of Reddit
          </h1>
          <h2 className="font-bold mt-[14px] mb-[0.25rem] mx-0 text-[0.875rem] text-[#F2F2F2] ms-0 me-0">
            Top Communities
          </h2>
          <h2 className="font-normal mt-[0.25rem] mx-0 text-[0.75rem] leading-[1rem] text-[#82959B] block ms-0 me-0">
            Browse Reddit's largest communities
          </h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 striped">
          {communities.map((community, index) => (
            <CommunityItem
              key={index}
              index={index}
              name={community.name}
              icon={community.icon}
              topic={community.topic}
              members={community.members}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {generatePages(page).map((pageNumber) => (
            <a
              key={pageNumber}
              className={`flex font-bold justify-center py-[0.25rem] relative w-[4rem] text-[0.75rem] leading-[1rem] no-underline hover:no-underline ${
                pageNumber === page
                  ? "text-[#1870F4] cursor-default"
                  : "text-[#F2F2F2] cursor-pointer"
              }`}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommunitiesSection;
