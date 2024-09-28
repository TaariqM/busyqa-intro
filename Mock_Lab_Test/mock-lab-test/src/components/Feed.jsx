import Post from "./Post";
import "../css/feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <h1 className="feed-title">Social Feed</h1>
      <div className="feed-container">
        <Post message={"React is the best front end library"} />
        <Post
          message={"Blockchain technology will change the financial system"}
        />
      </div>
    </div>
  );
};

export default Feed;
