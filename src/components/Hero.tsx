import { FormEvent, useState } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuickQuote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("🎉 Thank you! Your quote request has been received.");
      e.currentTarget.reset();
    }, 1000);
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape-1"></div>
        <div className="hero-shape-2"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text slide-in-left">
          <div className="hero-badge">
            <span>Industry Leaders Since 2010</span>
          </div>
          
          <h1>
            Sustainable Mining. <br />
            <span className="highlight">Reliable Results.</span>
          </h1>
          
          <p className="hero-subtitle">
            India&apos;s trusted partner for iron ore, bauxite, manganese & limestone
            extraction with end-to-end logistics solutions.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 5h20M2 19h20M5 12h14"></path>
                </svg>
              </div>
              <span className="stat-number">11.6Mt+</span>
              <span className="stat-label">Ore Delivered</span>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <span className="stat-number">99%</span>
              <span className="stat-label">On-time Dispatch</span>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span className="stat-number">8+</span>
              <span className="stat-label">Active Sites</span>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="stat-number">Zero</span>
              <span className="stat-label">LTI Record</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Request Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
          
          <div className="hero-clients">
            <span>Trusted by industry leaders:</span>
            <div className="client-logos">
              <div className="client-logo">JSW</div>
              <div className="client-logo">SAIL</div>
              <div className="client-logo">TATA</div>
              <div className="client-logo">NALCO</div>
            </div>
          </div>
        </div>

        {/* Quick Quote Form */}
        <div className="quick-quote slide-in-right">
          <div className="quote-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3>Quick Quote Request</h3>
          </div>
          
          <form onSubmit={handleQuickQuote}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" className="form-input" placeholder="Enter your full name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" className="form-input" placeholder="your@email.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="material">Material Required</label>
              <select id="material" className="form-select" required>
                <option value="">Select material type</option>
                <option value="iron-ore">Iron Ore</option>
                <option value="bauxite">Bauxite</option>
                <option value="manganese">Manganese</option>
                <option value="limestone">Limestone</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="quantity">Quantity (MT)</label>
              <input id="quantity" type="text" className="form-input" placeholder="Approximate quantity" />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-spinner">
                  <span className="spinner-circle"></span>
                  Processing...
                </span>
              ) : (
                <>
                  Get Instant Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </>
              )}
            </button>
          </form>
          
          <div className="form-security">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Your information is secure. We respond within 24 hours.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
