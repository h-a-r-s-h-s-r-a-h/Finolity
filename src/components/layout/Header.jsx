import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileNavOpen(!isMobileNavOpen);
    document.body.classList.toggle('mobile-nav-active');
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center" onClick={handleClick}>
          <h1 className="sitename">Finolity</h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${isMobileNavOpen ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><Link to="/" className="active" onClick={handleClick}>Home</Link></li>
            <li className="dropdown">
              <Link to="#" onClick={handleClick}>
                <span>Solutions</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link to="/solutions/android-development" onClick={handleClick}>Android Development</Link></li>
                <li><Link to="/solutions/blockchain" onClick={handleClick}>Blockchain</Link></li>
                <li><Link to="/solutions/ai-business-intelligence" onClick={handleClick}>Generative AI & Business Intelligence</Link></li>
                <li><Link to="/solutions/custom-software" onClick={handleClick}>Custom Software Development</Link></li>
                <li><Link to="/solutions/cloud-infrastructure" onClick={handleClick}>Cloud & Infrastructure</Link></li>
                <li><Link to="/solutions/erp" onClick={handleClick}>ERP Solutions</Link></li>
                <li><Link to="/solutions/hybrid-app" onClick={handleClick}>Hybrid App Development</Link></li>
                <li><Link to="/solutions/ios-development" onClick={handleClick}>iOS Development</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="#" onClick={handleClick}>
                <span>Business Challenges</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link to="/challenges/digital-campus" onClick={handleClick}>Digital Campus</Link></li>
                <li><Link to="/challenges/unity-education" onClick={handleClick}>Unity Education</Link></li>
                <li><Link to="/challenges/manufacturing-iiot" onClick={handleClick}>Manufacturing & IIoT</Link></li>
                <li><Link to="/challenges/data-science" onClick={handleClick}>Data Science</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="#" onClick={handleClick}>
                <span>Industries</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link to="/industries/manufacturing" onClick={handleClick}>Industry Manufacturing</Link></li>
                <li><Link to="/industries/logistics" onClick={handleClick}>Transportation Logistics</Link></li>
                <li><Link to="/industries/healthcare" onClick={handleClick}>Healthcare</Link></li>
                <li><Link to="/industries/finance" onClick={handleClick}>Banks & Insurance</Link></li>
                <li><Link to="/industries/consulting" onClick={handleClick}>Consulting Providers</Link></li>
                <li><Link to="/industries/non-profit" onClick={handleClick}>Non Profit</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="#" onClick={handleClick}>
                <span>Company</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link to="/about" onClick={handleClick}>About</Link></li>
                <li><Link to="/team" onClick={handleClick}>Team</Link></li>
                <li><Link to="/careers" onClick={handleClick}>Careers</Link></li>
                <li><Link to="/partners" onClick={handleClick}>Partners & Certifications</Link></li>
                <li><Link to="/reviews" onClick={handleClick}>Reviews & Awards</Link></li>
                <li><Link to="/why-us" onClick={handleClick}>Why us</Link></li>
              </ul>
            </li>
            <li><Link to="/market-research" onClick={handleClick}>Market Research</Link></li>
            <li><Link to="/blog" onClick={handleClick}>Blog</Link></li>
            <li><Link to="/contact" onClick={handleClick}>Contact</Link></li>
          </ul>
        </nav>

        <button 
          type="button"
          className={`mobile-nav-toggle ${isMobileNavOpen ? 'bi bi-x' : 'bi bi-list'}`}
          onClick={toggleMobileNav}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileNavOpen}
        >
          <span className="visually-hidden">Menu</span>
        </button>

        {/* <div className="client-support d-none d-lg-flex align-items-center">
          <i className="bi bi-telephone"></i>
          <div>
            <span>Client Support</span>
            <strong><a href="tel:0612-2500971" onClick={handleClick}>0612-2500971</a></strong>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header; 