import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>Your Trusted Partner in Financial Success</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
              At Finolity, we are dedicated to providing exceptional financial services that help our clients achieve their goals. With years of experience and a commitment to excellence, we deliver innovative solutions that drive success.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>Expert financial advisors with proven track records</span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>Customized strategies for individual and business needs</span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>Cutting-edge technology and market analysis tools</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              Our mission is to empower our clients with the knowledge and tools they need to make informed financial decisions. We believe in building long-term relationships based on trust, transparency, and consistent performance. Whether you're planning for retirement, growing your business, or protecting your wealth, we're here to help you succeed.
            </p>
            <a href="#services" className="read-more">
              <span>Explore Our Services</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 