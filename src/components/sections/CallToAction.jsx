import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <img src="/assets/img/bg/finance-bg.webp" alt="" />

      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Let's Connect and Empower Your Financial Future</h3>
            <p>
              Ready to take the next step in your financial journey? Our expert team is here to help you achieve your goals with tailored solutions and innovative strategies.
            </p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <Link className="cta-btn align-middle" to="#contact">Schedule a Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 