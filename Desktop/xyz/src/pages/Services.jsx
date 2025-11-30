import './Page.css'

function Services() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Our Services</h1>
        <p className="lead">We offer a wide range of services to meet your needs.</p>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              Custom website development using the latest technologies.
              We create responsive, fast, and SEO-friendly websites.
            </p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Beautiful and intuitive user interfaces that provide
              exceptional user experiences across all platforms.
            </p>
          </div>
          <div className="service-card">
            <h3>Consulting</h3>
            <p>
              Expert advice on technology strategy, digital transformation,
              and best practices for your business.
            </p>
          </div>
          <div className="service-card">
            <h3>Maintenance & Support</h3>
            <p>
              Ongoing maintenance and support to keep your systems
              running smoothly and securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

