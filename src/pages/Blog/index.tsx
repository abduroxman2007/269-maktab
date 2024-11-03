import React, { useEffect, useState } from 'react';
import Post from './Post'; // Adjust this line

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching posts: {error}</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <Post key={post.id} post={post} /> // Assuming each post has a unique ID
        ))
      )}
    </div>
  );
};

export default BlogIndex;
