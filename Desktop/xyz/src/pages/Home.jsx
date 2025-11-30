import './Page.css'

function Home() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Welcome to Our Website</h1>
        <p className="lead">
          Discover amazing content and services tailored just for you.
        </p>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Fast & Reliable</h3>
            <p>Experience lightning-fast performance with our optimized platform.</p>
          </div>
          <div className="feature-card">
            <h3>Modern Design</h3>
            <p>Beautiful, responsive design that works on all devices.</p>
          </div>
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Intuitive interface that makes everything simple and accessible.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

