import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'bi bi-graph-up-arrow',
      title: 'Investment Management',
      description: 'Strategic investment solutions tailored to your goals, with a focus on long-term growth and risk management.'
    },
    {
      id: 2,
      icon: 'bi bi-shield-check',
      title: 'Wealth Protection',
      description: 'Comprehensive wealth protection strategies to preserve and grow your assets for future generations.'
    },
    {
      id: 3,
      icon: 'bi bi-building',
      title: 'Corporate Finance',
      description: 'Expert financial advisory services for businesses, including mergers, acquisitions, and capital raising.'
    },
    {
      id: 4,
      icon: 'bi bi-pie-chart',
      title: 'Portfolio Management',
      description: 'Professional portfolio management services with diversified investment strategies and regular rebalancing.'
    }
  ];

  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>Comprehensive financial solutions tailored to your needs</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service) => (
            <div key={service.id} className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={100 * service.id}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 