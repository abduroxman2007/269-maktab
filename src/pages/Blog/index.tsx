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
    return <div className="loading" style={{fontSize: "50px", textAlign: "center", color: "darkblue", fontWeight: "bold"}}>Loading...</div>; // Add a class for loading
  }

  if (error) {
    return <div className="error" style={{fontSize: "50px", textAlign: "center", color: "red", fontWeight: "bold"}}>Error fetching posts: {error}</div>; // Add a class for error messages
  }

  return (
    <>
      <h1 className="blog-title" style={{textAlign: "center"}}>Yangiliklar</h1> {/* Class for title */}
      <div className="post-container"> {/* Add class for the container */}

        {posts.length === 0 ? (
          <p className="no-posts">No posts available.</p> // Class for no posts
        ) : (
          posts.map((post) => (
            <Post key={post.id} post={post} /> // Assuming each post has a unique ID
          ))
        )}
      </div>
    </>
  );
};

export default BlogIndex;
