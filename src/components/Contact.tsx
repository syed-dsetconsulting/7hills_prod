import { FormEvent, useState } from "react";
import { EMAIL_CONFIG, sendEmail } from '../utils/emailConfig';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(1);
  
  const handleContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Store form reference before async operation
    const form = e.currentTarget;
    
    try {
      // Option 1: EmailJS (Recommended)
      const formData = new FormData(form);
      const formObject = Object.fromEntries(formData.entries());
      
      // Template parameters
      const templateParams = {
        from_name: String(formObject.fullName || ''),
        from_email: String(formObject.email || ''),
        company: String(formObject.company || ''),
        phone: String(formObject.phone || ''),
        material: String(formObject.material || ''),
        quantity: String(formObject.quantity || ''),
        requirements: String(formObject.requirements || ''),
        to_email: EMAIL_CONFIG.productionEmail,
        submission_date: new Date().toLocaleString(),
        form_type: 'Detailed Contact Form'
      };
      
      // Send email using shared utility
      const result = await sendEmail(templateParams);
      
      if (result.success) {
        alert("🚀 Your inquiry has been sent successfully! We'll get back to you within 24 hours.");
        form.reset();
        setFormStep(1);
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch {
      alert("❌ There was an error sending your message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormStep(2);
  };
  
  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormStep(1);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-pattern"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag light">Contact Us</div>
          <h2 className="section-title light">Ready to Partner?</h2>
          <p className="section-subtitle light">
            Get in touch for customized mining solutions and competitive quotes
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3>Head Office</h3>
                <p>
                  KHATA NO 130/63, SUNDRA,<br />
                  UNIT NO 12, STATION ROAD,<br />
                  Barbil, Kendujhar, Odisha, 758035
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3>Email Addresses</h3>
                <p>
                  sevenpvtltd@gmail.com<br />
                  info@sevenhillsminerals.com
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3>Phone Support</h3>
                <p>Contact us via email for immediate assistance</p>
              </div>
            </div>
            
            <div className="contact-social">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleContactForm}>
              <h3 className="form-title">Get Detailed Quote</h3>
              
              <div className={`form-step ${formStep === 1 ? 'active' : 'inactive'}`}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name*</label>
                    <input id="fullName" name="fullName" type="text" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company*</label>
                    <input id="company" name="company" type="text" className="form-input" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address*</label>
                    <input id="email" name="email" type="email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input id="phone" name="phone" type="tel" className="form-input" required />
                  </div>
                </div>
                
                <div className="form-nav">
                  <button onClick={nextStep} className="btn btn-primary">
                    Next Step
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className={`form-step ${formStep === 2 ? 'active' : 'inactive'}`}>
                <div className="form-group">
                  <label htmlFor="material">Material Required*</label>
                  <select id="material" name="material" className="form-select" required>
                    <option value="">Select material type</option>
                    <option value="iron-ore">Iron Ore (+62% Fe)</option>
                    <option value="bauxite">Bauxite</option>
                    <option value="manganese">Manganese</option>
                    <option value="limestone">Limestone</option>
                    <option value="multiple">Multiple Materials</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Quantity & Timeline</label>
                  <input id="quantity" name="quantity" type="text" className="form-input" placeholder="e.g., 5000 MT by Q3 2025" />
                </div>

                <div className="form-group">
                  <label htmlFor="requirements">Additional Requirements</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    className="form-input"
                    rows={4}
                    placeholder="Tell us more about your specific needs..."
                  ></textarea>
                </div>
                
                <div className="form-nav">
                  <button onClick={prevStep} className="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                  </button>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading-spinner">
                        <span className="spinner-circle"></span>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Submit Request
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="form-security">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Your information is secure. We respond within 24 hours.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
