import React from "react";
import "./blog.css";
const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      summary: "This is the summary of the first blog post.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      summary: "This is the summary of the second blog post.",
    },
    // Add more blog posts here
  ];

  return (
    <>
      <div class="container">
        <div className="mt-5 mb-3">
          <h3 style={{ color: "red", textAlign: "start" }}>Blog</h3>
          <hr />
        </div>
        <div class="blog-row">
          <div class="blog">
            <div class="blog-image">
              <img
                src="https://denizhalil.com/wp-content/uploads/2024/05/Learning-Basic-Data-Types-in-Python-1024x580.png"
                alt="Blog Image 1"
              />
              <div class="date">June 10, 2024</div>
            </div>
            <div class="blog-content">
              <h2>Blog Post 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel metus vel est fermentum consectetur.
              </p>
              <button class="cssbuttons-io">
                <span>
                  Read More &nbsp;
                  <i class="bi bi-arrow-right-circle"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <img
                src="https://denizhalil.com/wp-content/uploads/2024/06/what-is-linux-by-denizhalil-1024x580.png"
                alt="Blog Image 2"
              />
              <div class="date">June 11, 2024</div>
            </div>
            <div class="blog-content">
              <h2>Blog Post 2</h2>
              <p>
                Nullam vehicula turpis in tellus lacinia euismod. Proin
                tristique arcu vel ullamcorper fermentum.
              </p>
              <button class="cssbuttons-io">
                <span>
                  Read More &nbsp;
                  <i class="bi bi-arrow-right-circle"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <img
                src="https://denizhalil.com/wp-content/uploads/2024/05/Anomaly-Detection-in-Cybersecurity-Using-Machine-Learning-1024x580.png"
                alt="Blog Image 3"
              />
              <div class="date">June 12, 2024</div>
            </div>
            <div class="blog-content">
              <h2>Blog Post 3</h2>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae.
              </p>
              <button class="cssbuttons-io">
                <span>
                  Read More &nbsp;
                  <i class="bi bi-arrow-right-circle"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="blog-row">
          <div class="blog">
            <div class="blog-image">
              <img
                src="https://denizhalil.com/wp-content/uploads/2024/05/Creating-Ransomware-with-Python-part-1-by-denizhalil-1024x597.png"
                alt="Blog Image 4"
              />
              <div class="date">June 13, 2024</div>
            </div>
            <div class="blog-content">
              <h2>Blog Post 4</h2>
              <p>
                Etiam nec justo euismod, maximus dui in, posuere nunc. Phasellus
                mollis felis sed felis ullamcorper.
              </p>
              <button class="cssbuttons-io">
                <span>
                  Read More &nbsp;
                  <i class="bi bi-arrow-right-circle"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <img
                src="https://denizhalil.com/wp-content/uploads/2024/05/End-to-End-Encryption-Implementation-and-Practical-Code-1024x580.png"
                alt="Blog Image 5"
              />
              <div class="date">June 14, 2024</div>
            </div>
            <div class="blog-content">
              <h2>Blog Post 5</h2>
              <p>
                Curabitur dignissim quam a felis rhoncus, non sagittis nunc
                ultricies. Sed vel massa semper, egestas.
              </p>
              <button class="cssbuttons-io">
                <span>
                  Read More &nbsp;
                  <i class="bi bi-arrow-right-circle"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <img
                src="https://denizhalil.com/wp-content/uploads/2024/05/recommendations-for-learning-cryptography-1024x580.png"
                alt="Blog Image 6"
              />
              <div class="date">June 15, 2024</div>
            </div>
            <div class="blog-content">
              <h2>Blog Post 6</h2>
              <p>
                Donec mattis libero sit amet dui vehicula, vel suscipit nulla
                aliquam. Fusce in ex nec est dapibus.
              </p>
              <button class="cssbuttons-io">
                <span>
                  Read More &nbsp;
                  <i class="bi bi-arrow-right-circle"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
