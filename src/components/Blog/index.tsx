import React, { useEffect, useState } from 'react';
import './style.css';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://269school.pythonanywhere.com/v1/posts/');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched posts:", data); // Check the API response
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-section">
      <h2 className="blog-title">So‘nggi Yangiliklar va Tadbirlar</h2>
      <p className="blog-description">Maktabimizdagi yangiliklardan va o‘quvchilarimiz hayotidagi muhim voqealardan xabardor bo‘ling. Yangiliklarimizni kuzatib boring va maktab hayotining bir qismiga aylaning.</p>
      <div className="blog-posts">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-snippet">{post.description}</p>
                <a href={`/blog/${post.id}`} className="read-more">Read More</a>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p> // Display if no posts are retrieved
        )}
      </div>
      <button className="load-more">Load More</button>
    </div>
  );
};

export default Blog;
