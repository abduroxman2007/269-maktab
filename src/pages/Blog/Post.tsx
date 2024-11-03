import React from 'react';

interface PostProps {
  post: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} className="post-image" />
      <h2 className="post-title">{post.title}</h2>
      <p className="post-description">{post.description}</p>
      <div className="read-more-container">
            <a href={`/blog/${post.id}`} className="read-more">Read More</a> {/* Ensure this is included */}
      </div>
    </div>
  );
};

export default Post;
