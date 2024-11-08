import React from 'react';
import './style.css'
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
    <div className="blog-posts">
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-snippet">{post.description}</p>
                <a href={`/blog/${post.id}`} className="read-more">Read More</a>
              </div>
            </div>
      </div>
  );
};

export default Post;
