const About: React.FC = () => {
  const stats = [
    { value: "11.6Mt+", label: "Ore Delivered", icon: "📊" },
    { value: "99%", label: "On-time Delivery", icon: "⏰" },
    { value: "8+", label: "Active Sites", icon: "🏭" },
    { value: "Zero", label: "LTI Record", icon: "🛡️" }
  ];
  
  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "Managing Director & Founder",
      experience: "25+ years",
      bio: "Former VP at Tata Steel with expertise in iron ore extraction and logistics.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma", 
      role: "Chief Operations Officer",
      experience: "20+ years",
      bio: "Mining engineer who led sustainable mining initiatives across Karnataka and Odisha.",
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      role: "Head of Sales & Business Development", 
      experience: "15+ years",
      bio: "Expert in client relationship management and market expansion in steel sector.",
      avatar: "AP"
    }
  ];
  
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M8 11l3 3 5-5"></path>
        </svg>
      ),
      title: "Quality Excellence",
      description: "Delivering superior-quality iron ore that meets global standards"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: "Sustainability",
      description: "Eco-friendly practices that protect our environment for future generations"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      ),
      title: "Trust & Integrity",
      description: "Building lasting partnerships through transparency and reliability"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <div className="section-tag">About Us</div>
          <h2 className="section-title">Powering India's Steel Industry</h2>
          <p className="section-subtitle">
            From the mineral-rich heartland of Odisha, we deliver excellence in iron ore extraction 
            and logistics, partnering with industry leaders to build a sustainable future.
          </p>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-card">
              <div className="stat-icon-large">{stat.icon}</div>
              <div className="stat-value-large">{stat.value}</div>
              <div className="stat-label-large">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Story Section */}
        <div className="about-story-section">
          <div className="section-header">
            <div className="section-tag">Our Journey</div>
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">
              From humble beginnings to industry leadership
            </p>
          </div>
          
          <div className="story-container">
            <div className="story-main">
              <div className="story-opening">
                <p className="story-lead">
                  At Seven Hills Minerals Private Limited, our story begins in the mineral-rich heartland of Odisha, 
                  where iron ore has long powered industries and opportunities.
                </p>
                <p className="story-vision">
                  Founded with a vision to deliver excellence in iron and steel, we set out not just to supply raw material, 
                  but to be a trusted partner for industries in India and across the globe.
                </p>
              </div>
              
              <div className="story-content">
                <p>
                  From the very beginning, our focus has been clear: <strong>quality, sustainability, and reliability</strong>. 
                  Every consignment of iron ore we produce and deliver reflects our promise to uphold global standards, 
                  while supporting the backbone of the steel industry at home and abroad.
                </p>
                
                <div className="story-meaning">
                  <div className="meaning-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <div className="meaning-content">
                    <h4>The Seven Hills Legacy</h4>
                    <p>
                      Our name—<strong>Seven Hills</strong>—symbolizes resilience, strength, and the ability to rise to challenges. 
                      Guided by these values, we remain committed to excellence in every aspect of our operations.
                    </p>
                  </div>
                </div>
                
                <div className="story-commitments">
                  <h4>Our Core Commitments</h4>
                  <ul className="commitment-list">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Delivering superior-quality iron ore to steelmakers worldwide
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Conducting business with integrity, transparency, and trust
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Embracing sustainable, eco-friendly practices in mining and production
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Building long-term partnerships through customized, customer-focused solutions
                    </li>
                  </ul>
                </div>
                
                <div className="story-growth">
                  <p>
                    Over the years, we've grown from a regional supplier into a company with a <strong>strong global footprint</strong>. 
                    Today, we are proud to partner with some of the most respected names in the industry, including 
                    <span className="partner-highlight"> JSW Ispat Special Products Ltd</span>, 
                    <span className="partner-highlight"> Bhushan Power and Steel Ltd</span>, 
                    <span className="partner-highlight"> Rashmi Group</span>, 
                    <span className="partner-highlight"> Jai Balaji Group</span>, 
                    <span className="partner-highlight"> Shyam Sel & Power Ltd</span>, and 
                    <span className="partner-highlight"> Neo Metaliks Ltd</span>.
                  </p>
                </div>
                
                <div className="story-foundation">
                  <p>
                    Behind this success is our strong foundation—<strong>modern mining infrastructure</strong>, 
                    <strong>advanced processing units</strong>, and a <strong>robust logistics network</strong> that ensures 
                    efficiency and timely delivery at every step. Compliance with environmental and industry regulations 
                    isn't just a requirement for us—<em>it's at the core of who we are</em>.
                  </p>
                </div>
                
                <div className="story-philosophy">
                  <p>
                    Our story is one of <strong>growth, responsibility, and unwavering commitment</strong>. 
                    At 7Hills, we believe minerals are more than just resources—they are the building blocks of industries, 
                    livelihoods, and sustainable futures.
                  </p>
                </div>
              </div>
              
              <div className="story-conclusion">
                <div className="conclusion-banner">
                  <div className="banner-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div className="banner-content">
                    <h4>Seven Hills Minerals Private Limited</h4>
                    <p>Delivering Excellence in Iron and Steel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="about-mission-vision-section">
          <div className="about-mission-vision">
            <div className="mission-vision-card">
              <div className="mv-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4>Our Mission</h4>
              <p>
                To be India's most trusted mining partner, delivering sustainable extraction solutions 
                while maintaining the highest standards of safety, quality, and environmental responsibility.
              </p>
            </div>
            
            <div className="mission-vision-card">
              <div className="mv-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h4>Our Vision</h4>
              <p>
                Leading the transformation of India's mining industry through innovative practices, 
                technology adoption, and stakeholder-first approach.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="about-values">
          <div className="section-header">
            <div className="section-tag">Our Values</div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="about-leadership">
          <div className="section-header">
            <div className="section-tag">Our Team</div>
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Meet the industry veterans driving Seven Hills Minerals forward
            </p>
          </div>
          
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-avatar">
                  <span>{leader.avatar}</span>
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{leader.name}</h4>
                  <div className="leader-role">{leader.role}</div>
                  <div className="leader-experience">{leader.experience} experience</div>
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Highlights */}
        <div className="about-highlights">
          <div className="highlights-card">
            <div className="section-header">
              <div className="section-tag">Key Facts</div>
              <h2 className="section-title">Company Highlights</h2>
            </div>
            <div className="highlights-grid">
              <div className="highlight-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Founded in 2018, rapid growth trajectory</span>
              </div>
              <div className="highlight-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M8 11l3 3 5-5"></path>
                </svg>
                <span>ISO 9001:2015 & ISO 14001:2015 certified</span>
              </div>
              <div className="highlight-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Pan-India operations with regional expertise</span>
              </div>
              <div className="highlight-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span>Strong financial backing and credit rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
