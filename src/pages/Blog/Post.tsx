import React from 'react';
import { Link } from 'react-router-dom';

interface PostProps {
  post: {
    id: number; // Replace with your actual ID type
    title: string;
    content: string; // Assuming your API provides these fields
    // Add any other fields your post object contains
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link> {/* Link to the detailed view */}
      </h2>
      <p>{post.content.substring(0, 100)}...</p> {/* Show only a snippet of the content */}
    </div>
  );
};

export default Post;
