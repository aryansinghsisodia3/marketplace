import { Link } from 'react-router-dom';
import '../src/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Tech Haven</h1>
        <p className="hero-subtitle">Building the Future of Tech Shopping</p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <div className="story-content">
          <p>
            Founded in 2024, Tech Haven emerged from a simple idea: to create a one-stop destination for tech enthusiasts 
            seeking quality PC components and electronic gadgets. What started as a small online store has grown into 
            a trusted marketplace for tech aficionados worldwide.
          </p>
          <p>
            Our journey has been driven by a passion for technology and a commitment to providing the best shopping 
            experience for our customers. We believe in making high-quality tech accessible to everyone.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To empower tech enthusiasts and professionals by providing access to premium PC components and electronic 
            gadgets, backed by exceptional service and expert guidance.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To become the world's most trusted and innovative marketplace for PC gear and electronics, setting new 
            standards in customer satisfaction and product quality.
          </p>
        </div>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">💡</span>
            <h4>Innovation</h4>
            <p>Constantly evolving to bring you the latest in tech</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h4>Integrity</h4>
            <p>Honest and transparent in all our dealings</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🎯</span>
            <h4>Excellence</h4>
            <p>Committed to delivering the best quality</p>
          </div>
          <div className="value-card">
            <span className="value-icon">❤️</span>
            <h4>Customer Focus</h4>
            <p>Your satisfaction is our priority</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">👨‍💼</div>
            <h4>John Smith</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <div className="member-image">👩‍💻</div>
            <h4>Sarah Johnson</h4>
            <p>Tech Director</p>
          </div>
          <div className="team-member">
            <div className="member-image">👨‍🔧</div>
            <h4>Mike Chen</h4>
            <p>Product Specialist</p>
          </div>
          <div className="team-member">
            <div className="member-image">👩‍💼</div>
            <h4>Emily Davis</h4>
            <p>Customer Experience</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h3>Join Our Tech Community</h3>
        <p>Be part of our growing community of tech enthusiasts</p>
        <div className="cta-buttons">
          <Link to="/market" className="cta-button primary">Shop Now</Link>
          <Link to="/contact" className="cta-button secondary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default About;