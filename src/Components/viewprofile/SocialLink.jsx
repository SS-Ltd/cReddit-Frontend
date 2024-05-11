/**
 * Component representing a social media link.
 * Renders a link to a specific platform with its corresponding URL.
 * @param {Object} props - Component props.
 * @param {string} props.platform - The name of the social media platform.
 * @param {string} props.url - The URL of the social media profile.
 * @returns {JSX.Element} Social media link component.
 */
const SocialLink = ({ platform, url }) => {
  return (
    <a
      href={url}
      className="px-[10px] items-center justify-center rounded-full cursor-pointer inline-flex bg-[#1A282D] py-[8px] hover:bg-gray-700"
    >
      <span className="flex items-center justify-center text-white">
        <span className="flex items-center gap-[0.5rem]">
          <span className="flex items-center text-[12px]">{platform}</span>
        </span>
      </span>
    </a>
  );
};

export default SocialLink;
