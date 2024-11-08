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
                const response = await fetch(`https://269school.pythonanywhere.com/v1/posts/${id}`); // Adjust URL as necessary
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
        return <div style={{fontSize: "50px", textAlign: "center", color: "darkblue", fontWeight: "bold"}}>Loading...</div>;
    }

    if (error) {
        return <div style={{fontSize: "50px", textAlign: "center", color: "red", fontWeight: "bold"}}>Error fetching post: {error}</div>;
    }

    return (
        <div style={{padding: "0 40px"}}>
            <div style={{margin: "40px"}}>
                <h1 style={{ textAlign: "center", fontSize: "200%" }}>{post.title}</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {post.image && <img src={post.image} alt={post.title} style={{ width: '80%', height: 'auto', border: "5px solid rgb(24, 33, 109)" }} />} {/* Add image rendering here */}
            </div>
            <div style={{display: "flex", justifyContent: "center", margin: "30px 10%"}}>
                <p>{post.description}</p>
            </div>
            {/* Add more post details here */}
        </div>
    );
};

export default PostDetails;
