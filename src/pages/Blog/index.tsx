import React, { useEffect, useState } from 'react';
import Post from './Post'; // Adjust this line
import './style.css'; // Ensure this is the correct path to your CSS file

const BlogIndex: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // Replace 'any' with your post type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://269school.pythonanywhere.com/v1/posts/'); // Your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>; // Add a class for loading
  }

  if (error) {
    return <div className="error">Error fetching posts: {error}</div>; // Add a class for error messages
  }

  return (
    <div className="post-container"> {/* Add class for the container */}
      <h1 className="blog-title">Blog Posts</h1> {/* Class for title */}
      {posts.length === 0 ? (
        <p className="no-posts">No posts available.</p> // Class for no posts
      ) : (
        posts.map((post) => (
          <Post key={post.id} post={post} /> // Assuming each post has a unique ID
        ))
      )}
    </div>
  );
};

export default BlogIndex;
