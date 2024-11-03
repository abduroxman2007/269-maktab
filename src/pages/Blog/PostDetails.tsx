import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; 

const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Assuming you're using the ID in the URL
    const [post, setPost] = useState<any>(null); // Replace 'any' with your post type
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://269school.pythonanywhere.com/v1/posts/${id}/`); // Adjust URL as necessary
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
            {post.image && <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />} {/* Add image rendering here */}
            <p>{post.description}</p>
            {/* Add more post details here */}
        </div>
    );
};

export default PostDetails;
