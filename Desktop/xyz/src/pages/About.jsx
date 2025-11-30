import './Page.css'

function About() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>About Us</h1>
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            We are a passionate team dedicated to creating exceptional digital experiences.
            Founded with a vision to make the web more accessible and beautiful, we've been
            serving clients worldwide for years.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality solutions that exceed expectations.
            We believe in building long-term relationships with our clients and helping
            them achieve their goals through innovative technology and creative thinking.
          </p>
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>Integrity in everything we do</li>
            <li>Innovation and continuous improvement</li>
            <li>Customer-centric approach</li>
            <li>Transparency and open communication</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

