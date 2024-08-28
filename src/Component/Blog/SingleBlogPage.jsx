import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './singleBlogPage.css';

const SingleBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [allBlog, setAllBlog] = useState([])
  const { _id } = useParams();  // Assuming you are using 'id' as a URL parameter

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://mediamanserver.onrender.com/api/blog");
      if (res.status === 200) {
        setAllBlog(res.data.data.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

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
    fetchBlogs();
  }, [_id]);

  if (!blog || !allBlog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="single-blog">
        <div className="container">
          <div className="row">

            <div className="col-md-9">

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

            </div>

            <div className="col-md-3">
              <h4 className="mb-4 mt-2 " style={{ fontSize: '1.5rem' }}>
                Latest Blogs
              </h4>

              {allBlog && allBlog.length > 0 ? (
                allBlog.map((blog, index) => (
                  <Link to={`/singleblog/${blog._id}`} key={index} className="sin row mb-3">
                    <div className="col-4">
                      <img src={blog.image} alt={blog.blogName} style={{ height: '70px' }} className="img-fluid" />
                    </div>
                    <div className="col-8 d-flex flex-column ">
                      <h6 className="mb-1">{blog.blogName}</h6>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No more blogs available</p>
              )}
            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
