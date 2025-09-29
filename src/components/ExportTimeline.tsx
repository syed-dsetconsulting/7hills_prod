import React, { useState, useEffect } from 'react';

const ExportTimeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const timelineData = [
    {
      year: "2019",
      title: "Foundation",
      description: "Company established as an Iron Ore Mineral Trading Firm in Odisha. Built partnerships with AMNS, JSW, M/s S.N. Mohanty, Geetarani Mines, etc.",
      type: "foundation",
      icon: "🏢",
      highlight: "Company Founded",
      details: "Strategic partnerships established with leading mining companies across Odisha"
    },
    {
      year: "2020–21",
      title: "Visakhapatnam Port",
      description: "1 Shipment, 35,000 MT exported",
      type: "export",
      icon: "🚢",
      shipments: 1,
      quantity: "35,000 MT",
      highlight: "First Export",
      details: "Successfully commenced international exports from Visakhapatnam Port"
    },
    {
      year: "2020–21 & 2021–22",
      title: "Gangavaram Port",
      description: "4 Shipments, 2.7 Lakh MT exported",
      type: "export",
      icon: "🚢",
      shipments: 4,
      quantity: "2.7 Lakh MT",
      highlight: "Scale Expansion",
      details: "Significant growth in export volumes through Gangavaram Port operations"
    },
    {
      year: "2022–2026",
      title: "Gopalpur Port",
      description: "11 Shipments, 5.6 Lakh MT exported",
      type: "export",
      icon: "🚢",
      shipments: 11,
      quantity: "5.6 Lakh MT",
      highlight: "Major Operations",
      details: "Established as primary export hub with consistent high-volume shipments"
    },
    {
      year: "2025–26",
      title: "Dhamra Port",
      description: "1 Shipment, 55,000 WMT exported (exports commenced this year)",
      type: "export",
      icon: "🚢",
      shipments: 1,
      quantity: "55,000 WMT",
      highlight: "New Gateway",
      details: "Successfully launched operations at Dhamra Port, expanding our port network"
    },
    {
      year: "Coming Soon",
      title: "Paradip Port",
      description: "Upcoming milestone - operations commencing soon",
      type: "upcoming",
      icon: "🚢",
      isUpcoming: true,
      highlight: "Next Chapter",
      details: "Preparing to launch operations at India's largest port by cargo volume"
    }
  ];

  const trustedBuyers = [
    { name: "IMR Metallurgical Resources", country: "Global", logo: "🌍" },
    { name: "KTP Exports", country: "Singapore", logo: "🇸🇬" },
    { name: "JSW International Tradecorp Pte Ltd", country: "Singapore", logo: "🇸🇬" },
    { name: "Tata International Singapore Pte Ltd", country: "Singapore", logo: "🇸🇬" },
    { name: "Falcon Commtarde", country: "UAE", logo: "🇦🇪" }
  ];

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="export-timeline">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <div className="section-tag">Export Journey</div>
          <h2 className="section-title">Our Export Timeline</h2>
          <p className="section-subtitle">
            From our foundation in 2019 to becoming a trusted global exporter, 
            discover our journey of growth and excellence in iron ore trading.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="timeline-progress">
          <div className="timeline-progress-bar">
            <div className="timeline-progress-fill"></div>
          </div>
          <div className="timeline-progress-stats">
            <div className="progress-stat">
              <span className="progress-number">6</span>
              <span className="progress-label">Major Milestones</span>
            </div>
            <div className="progress-stat">
              <span className="progress-number">5</span>
              <span className="progress-label">Ports Operated</span>
            </div>
            <div className="progress-stat">
              <span className="progress-number">9.6L+</span>
              <span className="progress-label">MT Exported</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {/* Timeline Line */}
          <div className="timeline-line">
            <div className="timeline-line-progress"></div>
          </div>
          
          {/* Timeline Items */}
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${visibleItems.includes(index) ? 'timeline-item-visible' : ''}`}
                data-index={index}
              >
                {/* Timeline Marker */}
                <div className={`timeline-marker ${
                  item.isUpcoming 
                    ? 'timeline-marker-upcoming' 
                    : item.type === 'foundation'
                    ? 'timeline-marker-foundation'
                    : 'timeline-marker-export'
                }`}>
                  <div className="timeline-marker-inner">
                    <span className="timeline-icon">{item.icon}</span>
                  </div>
                  <div className="timeline-marker-pulse"></div>
                </div>

                {/* Timeline Content */}
                <div className="timeline-content">
                  <div className={`timeline-card ${
                    item.isUpcoming 
                      ? 'timeline-card-upcoming' 
                      : item.type === 'foundation'
                      ? 'timeline-card-foundation'
                      : 'timeline-card-export'
                  }`}>
                    <div className="timeline-card-header">
                      <div className="timeline-card-badges">
                        <span className={`timeline-year ${
                          item.isUpcoming
                            ? 'timeline-year-upcoming'
                            : item.type === 'foundation'
                            ? 'timeline-year-foundation'
                            : 'timeline-year-export'
                        }`}>
                          {item.year}
                        </span>
                        <span className="timeline-highlight">
                          {item.highlight}
                        </span>
                      </div>
                      {item.isUpcoming && (
                        <span className="timeline-upcoming-badge">
                          <svg className="timeline-badge-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Upcoming
                        </span>
                      )}
                    </div>
                    
                    <h3 className="timeline-title">
                      {item.title}
                    </h3>
                    
                    <p className="timeline-description">
                      {item.description}
                    </p>

                    <p className="timeline-details">
                      {item.details}
                    </p>

                    {/* Export Stats */}
                    {item.type === 'export' && (
                      <div className="timeline-stats">
                        <div className="timeline-stat">
                          <div className="timeline-stat-icon">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                          </div>
                          <div className="timeline-stat-content">
                            <div className="timeline-stat-value">
                              {item.shipments}
                            </div>
                            <div className="timeline-stat-label">Shipments</div>
                          </div>
                        </div>
                        <div className="timeline-stat">
                          <div className="timeline-stat-icon">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="timeline-stat-content">
                            <div className="timeline-stat-value">
                              {item.quantity}
                            </div>
                            <div className="timeline-stat-label">Exported</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Upcoming Highlight */}
                    {item.isUpcoming && (
                      <div className="timeline-upcoming-highlight">
                        <div className="timeline-upcoming-content">
                          <svg className="timeline-upcoming-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="timeline-upcoming-text">
                            Operations commencing soon
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Buyers Section */}
        <div className="trusted-buyers-section">
          <div className="section-header">
            <h3 className="section-title">Trusted Buyers</h3>
            <p className="section-subtitle">
              Our exports are trusted by leading global buyers worldwide
            </p>
          </div>

          <div className="trusted-buyers-grid">
            {trustedBuyers.map((buyer, index) => (
              <div key={index} className="trusted-buyer-item">
                <div className="trusted-buyer-flag">{buyer.logo}</div>
                <div className="trusted-buyer-content">
                  <div className="trusted-buyer-name">{buyer.name}</div>
                  <div className="trusted-buyer-country">{buyer.country}</div>
                </div>
                <div className="trusted-buyer-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Summary Stats */}
        <div className="export-summary">
          <div className="export-summary-header">
            <h3 className="export-summary-title">Export Summary</h3>
            <p className="export-summary-subtitle">Our journey in numbers</p>
          </div>
          
          <div className="export-summary-stats">
            <div className="export-summary-stat">
              <div className="export-summary-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div className="export-summary-value">17</div>
              <div className="export-summary-label">Total Shipments</div>
            </div>
            <div className="export-summary-stat">
              <div className="export-summary-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="export-summary-value">9.6L+</div>
              <div className="export-summary-label">MT Exported</div>
            </div>
            <div className="export-summary-stat">
              <div className="export-summary-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="export-summary-value">5</div>
              <div className="export-summary-label">Major Ports</div>
            </div>
            <div className="export-summary-stat">
              <div className="export-summary-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="export-summary-value">5+</div>
              <div className="export-summary-label">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="timeline-cta">
          <div className="timeline-cta-content">
            <h3 className="timeline-cta-title">Ready to Partner with Us?</h3>
            <p className="timeline-cta-subtitle">
              Join our growing network of trusted partners and experience our commitment to excellence
            </p>
            <div className="timeline-cta-buttons">
              <a href="#contact" className="btn btn-primary">
                <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get in Touch
              </a>
              <a href="#about" className="btn btn-secondary">
                <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportTimeline;
