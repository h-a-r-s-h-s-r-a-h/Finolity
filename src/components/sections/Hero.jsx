import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>Empowering Your Financial Future</h1>
            <p>Innovative financial solutions for businesses and individuals. We combine expertise with cutting-edge technology to deliver exceptional results.</p>
            <div className="d-flex">
              <Link to="#about" className="btn-get-started">Get Started</Link>
              <Link to="#services" className="btn-watch-video d-flex align-items-center">
                <i className="bi bi-arrow-right"></i>
                <span>Our Services</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="Financial Growth" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 