import React from 'react';

const WhyUs = () => {
  return (
    <section id="why-us" className="section why-us light-background">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
            <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <span>Why Choose </span>
                <strong>Finolity</strong>
              </h3>
              <p>
                With over 8 years of proven experience, 470+ successful projects, and a 98% customer satisfaction rate, we're committed to delivering exceptional financial services that drive your success.
              </p>
            </div>

            <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-item">
                <h3><span>01</span> Proven Track Record</h3>
                <div className="faq-content">
                  <p>Our team of expert financial advisors brings decades of combined experience in investment management, wealth protection, and corporate finance.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3><span>02</span> Client-Centric Approach</h3>
                <div className="faq-content">
                  <p>We prioritize understanding your unique financial goals and challenges to deliver personalized solutions that meet your specific needs.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3><span>03</span> Innovative Technology</h3>
                <div className="faq-content">
                  <p>We leverage cutting-edge financial technology and market analysis tools to provide you with data-driven insights and optimal investment strategies.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3><span>04</span> Comprehensive Services</h3>
                <div className="faq-content">
                  <p>From investment management to wealth protection and corporate finance, we offer a full suite of financial services under one roof.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/img/why-us.png" alt="Why Choose Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 