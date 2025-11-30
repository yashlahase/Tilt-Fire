import './Page.css'

function Contact() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Contact Us</h1>
        <p className="lead">We'd love to hear from you. Get in touch with us!</p>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <h3>Email</h3>
              <p>info@mywebsite.com</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <h3>Address</h3>
              <p>123 Main Street<br />City, State 12345<br />United States</p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

