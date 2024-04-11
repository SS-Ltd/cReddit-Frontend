/**
 * NoComments is a React component that displays a message when there are no comments on a post.
 * It shows an image and a text saying "Be the first to comment", along with a suggestion to add thoughts and start the conversation.
 *
 * @component
 */
function NoComments() {
  return (
    <div className="w-full mt-7 ml-3 mb-3 flex flex-row">
      <div className="w-13">
        <img
          src="https://www.redditstatic.com/shreddit/assets/thinking-snoo.png"
          srcSet=""
          sizes=""
          alt="Thinking Snoo"
        ></img>
      </div>
      <div className="ml-5">
        <p className="text-white text-lg font-medium mt-1">
          Be the first to comment
        </p>
        <div className="text-gray-400 text-sm mt-3">
          <p>Nobody's responded to this post yet.</p>
          <p>Add your thoughts and get the conversation going.</p>
        </div>
      </div>
    </div>
  );
}

export default NoComments;
