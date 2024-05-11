import { useEffect } from "react";
import CommunitiesSection from "./CommunitiesSection";
import Sidebar from "../sidebar/Sidebar";

/**
 * React component representing a page displaying top communities.
 * This component renders a list of top communities alongside a sidebar.
 * @param {Object} props - Component props.
 * @param {Object} props.sidebarProps - Props for the sidebar.
 * @param {boolean} props.sidebarProps.isVisibleLeftSidebar - Flag indicating if the left sidebar is visible.
 * @param {function} props.sidebarProps.setIsVisibleLeftSidebar - Function to set the visibility of the left sidebar.
 * @param {function} props.sidebarProps.setIsCommunityOpen - Function to set if a community is open.
 * @param {RefObject} props.sidebarProps.communityButtonRef - Reference to the community button.
 * @param {any} props.sidebarProps.userHistoryRes - User history response.
 * @param {RefObject} props.sidebarProps.sidebarRef - Reference to the sidebar.
 * @returns {JSX.Element} React component.
 */
const TopCommunities = ({ sidebarProps }) => {
  const {
    isVisibleLeftSidebar,
    setIsVisibleLeftSidebar,
    setIsCommunityOpen,
    communityButtonRef,
    userHistoryRes,
    sidebarRef,
  } = sidebarProps;

  useEffect(() => {
    setIsVisibleLeftSidebar(false);
  }, []);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`h-full ${
          isVisibleLeftSidebar
            ? "fixed left-0 xl:relative xl:flex pl-1 bg-reddit_navbar w-70"
            : "hidden"
        } z-20 w-66 min-w-60 border-r border-neutral-800 pt-2 mr-2 no-select ml-auto overflow-auto scrollbar_mod overflow-x-hidden`}
      >
        <Sidebar
          setIsCommunityOpen={setIsCommunityOpen}
          communityButtonRef={communityButtonRef}
          setIsVisibleLeftSidebar={setIsVisibleLeftSidebar}
          userHistoryRes={userHistoryRes}
        />
      </div>
      <div id="Top-Communities" className="bg-[#0b1416] min-w-[350px]">
        <CommunitiesSection />
      </div>
    </>
  );
};

export default TopCommunities;
