import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Assuming ID is a string
  const [post, setPost] = useState<any>(null); // Replace 'any' with your post type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://269school.pythonanywhere.com/v1/posts/${id}/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPost(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching post: {error}</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Display additional post details here */}
    </div>
  );
};

export default PostDetails;
