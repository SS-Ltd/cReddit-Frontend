import { useState, useEffect } from "react";
import CommunityItem from "./CommunityItem";
import { baseUrl } from "../../constants";

const CommunitiesSection = () => {
  const [communities, setCommunities] = useState([]);
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
      </section>
    </>
  );
};

export default CommunitiesSection;
