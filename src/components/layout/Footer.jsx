import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="d-flex align-items-center" onClick={handleClick}>
              <span className="sitename">Finolity</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>R-7 Street, Yamuna Nagar</p>
              <p>Haryana 135001, India</p>
              <p className="mt-3"><strong>Phone:</strong> <span>0612-2500-971</span></p>
              <p><strong>Email:</strong> <span>info@finolity.com</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Solutions</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="/solutions/digital-strategy" onClick={handleClick}>Digital Strategy & Design</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/solutions/app-development" onClick={handleClick}>Application Development</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/solutions/cloud" onClick={handleClick}>Cloud & Infrastructure</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/solutions/saas" onClick={handleClick}>Software-as-a-Service</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/solutions/marketing" onClick={handleClick}>Digital & Brand Marketing</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/solutions/ai" onClick={handleClick}>Generative AI & BI</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Industry Focus</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="/industries/manufacturing" onClick={handleClick}>Industry Manufacturing</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/industries/logistics" onClick={handleClick}>Transportation Logistics</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/industries/healthcare" onClick={handleClick}>Healthcare</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/industries/finance" onClick={handleClick}>Banks & Insurance</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/industries/consulting" onClick={handleClick}>Consulting Providers</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Company</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="/events" onClick={handleClick}>Events</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/why-us" onClick={handleClick}>Why us</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/team" onClick={handleClick}>Team</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/careers" onClick={handleClick}>Careers</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/partners" onClick={handleClick}>Partners & Certifications</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/reviews" onClick={handleClick}>Reviews & Awards</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Platform Partnerships</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="/partners/aws" onClick={handleClick}>AWS</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/partners/google-cloud" onClick={handleClick}>Google Cloud</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/partners/microsoft" onClick={handleClick}>Microsoft</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/partners/salesforce" onClick={handleClick}>Salesforce</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>&copy; {new Date().getFullYear()} <strong>Finolity</strong>. All Rights Reserved</p>
        <div className="credits">
          <Link to="/privacy" onClick={handleClick}>Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link to="/terms" onClick={handleClick}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 