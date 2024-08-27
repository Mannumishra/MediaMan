import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './singleBlogPage.css';

const SingleBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { _id } = useParams();  // Assuming you are using 'id' as a URL parameter

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://mediamanserver.onrender.com/api/blog/${_id}`);
        if (res.status === 200) {
          setBlog(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };
    fetchBlog();
  }, [_id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-blog-container">
      <div className="single-blog-image">
        <img src={blog.image} alt={blog.blogName} />
      </div>
      <div className="single-blog-content">
        <h1>{blog.blogName}</h1>
        <p className="blog-date">Published on: {new Date(blog.createdAt).toLocaleDateString()}</p>
        <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog.blogDescription }}></div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
