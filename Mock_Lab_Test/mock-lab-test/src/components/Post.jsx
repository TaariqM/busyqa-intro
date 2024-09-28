import { useState } from "react";
import "../css/post.css";

const Post = (props) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleClick = () => {
    setLikes(likes + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((prevComments) => [...prevComments, comment]);
    setComment("");
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="post">
      <p>{props.message}</p>
      <p>{likes} Likes</p>
      <div>
        <button className="like-button" onClick={handleClick}>
          Like
        </button>
        <h4>Comments:</h4>
        {comments.map((com, index) => (
          <p key={index}>{com}</p>
        ))}
        <form id="comment-form" className="comment" onSubmit={handleSubmit}>
          <input
            className="comment-input"
            id="control-input"
            type="text"
            placeholder="Add a comment"
            aria-label="Comment input"
            value={comment}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
