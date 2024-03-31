import { ChevronDownIcon } from "@heroicons/react/24/outline";

function SortingMenu({ isOpen, setIsOpen, items }) {
  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-14 h-7 rounded-full hover:bg-reddit_search_light ${
          isOpen ? "bg-reddit_search_light" : ""
        } justify-center items-center cursor-pointer`}
      >
        <p className="text-gray-500 font-semibold text-xs no-select ">Best</p>
        <ChevronDownIcon className="h-3 ml-0.5 w-3 text-gray-400" />
      </div>

      {isOpen && (
        <div className=" w-20 h-72 bg-reddit_lightGreen absolute mt-2.5 -ml-2.5 text-white text-sm pt-2.5 z-1 rounded-lg  font-extralight flex flex-col">
          <div className="w-full pl-4 rounded-lg h-9 flex items-center font-normal">
            <p className="no-select">Sort by</p>
          </div>

          {items.map((item, i) => (
            <a
              key={i}
              id={`mainfeed_category_${item.toLowerCase()}`}
              href=""
              className="w-full pl-4 hover:bg-reddit_hover h-12 flex items-center cursor-pointer"
            >
              <p className="no-select">{item}</p>
            </a>
          ))}

          {/* <a
                id="mainfeed_category_hot"
                href=""
                className="w-full pl-4 hover:bg-reddit_hover h-12 flex items-center cursor-pointer"
              >
                <p className="no-select">Hot</p>
              </a>

              <a
                id="mainfeed_category_new"
                href=""
                className="w-full pl-4  hover:bg-reddit_hover h-12 flex items-center cursor-pointer"
              >
                <p className="no-select">New</p>
              </a>

              <a
                id="mainfeed_category_top"
                href=""
                className="w-full pl-4  hover:bg-reddit_hover h-12 flex items-center cursor-pointer"
              >
                <p className="no-select">Top</p>
              </a>

              <a
                id="mainfeed_category_rising"
                href=""
                className="w-full pl-4  hover:bg-reddit_hover h-12 flex items-center cursor-pointer rounded-b-lg"
              >
                <p className="no-select">Rising</p>
              </a> */}
        </div>
      )}
    </>
  );
}

export default SortingMenu;
