import './Page.css'

function Blog() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Blog</h1>
        <p className="lead">Latest articles and insights from our team.</p>
        <div className="blog-grid">
          <article className="blog-card">
            <h3>Getting Started with Modern Web Development</h3>
            <p className="blog-date">January 15, 2024</p>
            <p>
              Learn the fundamentals of modern web development and discover
              the tools and technologies that are shaping the future of the web.
            </p>
            <a href="#" className="read-more">Read More →</a>
          </article>
          <article className="blog-card">
            <h3>Best Practices for Responsive Design</h3>
            <p className="blog-date">January 10, 2024</p>
            <p>
              Explore the key principles of responsive design and how to create
              websites that look great on all devices, from mobile to desktop.
            </p>
            <a href="#" className="read-more">Read More →</a>
          </article>
          <article className="blog-card">
            <h3>The Future of User Experience</h3>
            <p className="blog-date">January 5, 2024</p>
            <p>
              Dive into emerging trends in UX design and discover what the future
              holds for creating exceptional user experiences.
            </p>
            <a href="#" className="read-more">Read More →</a>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Blog

