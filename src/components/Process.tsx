const Process: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Exploration & Planning",
      description: "Geological surveys, statutory approvals, ESG baseline studies, and comprehensive mine planning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      )
    },
    {
      number: 2,
      title: "Extraction & Processing",
      description: "Sustainable drill-blast operations, crushing, screening, washing, and beneficiation to required grades.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 11h4a2 2 0 0 0 0-4h-4v12"></path>
          <path d="M9 12v-1h.01"></path>
          <path d="M11 12v-1h.01"></path>
          <path d="M13 12v-1h.01"></path>
          <path d="M15 12v-1h.01"></path>
          <path d="M17 12v-1h.01"></path>
          <path d="M19 12v-1h.01"></path>
          <path d="M21 12v-1h.01"></path>
          <path d="M8 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"></path>
          <path d="M6 10v8"></path>
          <path d="M2 15h20"></path>
        </svg>
      )
    },
    {
      number: 3,
      title: "Quality Assurance",
      description: "Third-party sampling, laboratory testing, digital documentation, and compliance certification.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      number: 4,
      title: "Logistics & Delivery",
      description: "Multi-modal transport, port handling, export facilitation, and end-to-end supply chain management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    }
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Methodology</div>
          <h2 className="section-title">Our 4-Step Process</h2>
          <p className="section-subtitle">Streamlined operations from mine to market</p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-number">
                <span>{step.number}</span>
                <div className="step-icon">{step.icon}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <a href="#contact" className="btn btn-primary">
            Start Your Journey With Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
