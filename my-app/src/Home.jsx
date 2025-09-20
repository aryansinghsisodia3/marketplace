import { Link } from 'react-router-dom';
import '../src/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Tech Haven</h1>
        <p className="hero-subtitle">Your Ultimate Destination for PC Gear & Electronics</p>
        <div className="cta-buttons">
          <Link to="/market" className="cta-button primary">Explore Products</Link>
          <Link to="/about" className="cta-button secondary">Learn More</Link>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Premium PC Components</h3>
          <p>Discover the latest processors, graphics cards, and high-performance components for your dream PC build.</p>
        </div>
        <div className="feature-card">
          <h3>Gaming Peripherals</h3>
          <p>Enhance your gaming experience with our curated selection of keyboards, mice, and gaming accessories.</p>
        </div>
        <div className="feature-card">
          <h3>Smart Electronics</h3>
          <p>Explore cutting-edge gadgets and smart devices to upgrade your tech lifestyle.</p>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Tech Haven?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🚚</span>
            <h4>Fast Shipping</h4>
            <p>Quick delivery to your doorstep</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🛡️</span>
            <h4>Secure Shopping</h4>
            <p>Safe and protected transactions</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💯</span>
            <h4>Quality Guaranteed</h4>
            <p>Only the best products</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔄</span>
            <h4>Easy Returns</h4>
            <p>Hassle-free return policy</p>
          </div>
        </div>
      </section>

      <section className="trending-section">
        <h2>Trending Now</h2>
        <div className="trending-products">
          <div className="product-preview">
            <h4>Latest GPUs</h4>
            <p>Next-gen graphics cards</p>
          </div>
          <div className="product-preview">
            <h4>Mechanical Keyboards</h4>
            <p>Premium typing experience</p>
          </div>
          <div className="product-preview">
            <h4>Smart Home Devices</h4>
            <p>Automate your living space</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
