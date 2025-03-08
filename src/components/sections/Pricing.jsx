import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Free Plan',
      price: 0,
      features: [
        { text: 'Quam adipiscing vitae proin', included: true },
        { text: 'Nec feugiat nisl pretium', included: true },
        { text: 'Nulla at volutpat diam uteera', included: true },
        { text: 'Pharetra massa massa ultricies', included: false },
        { text: 'Massa ultricies mi quis hendrerit', included: false }
      ],
      featured: false
    },
    {
      id: 2,
      name: 'Business Plan',
      price: 29,
      features: [
        { text: 'Quam adipiscing vitae proin', included: true },
        { text: 'Nec feugiat nisl pretium', included: true },
        { text: 'Nulla at volutpat diam uteera', included: true },
        { text: 'Pharetra massa massa ultricies', included: true },
        { text: 'Massa ultricies mi quis hendrerit', included: true }
      ],
      featured: true
    },
    {
      id: 3,
      name: 'Developer Plan',
      price: 49,
      features: [
        { text: 'Quam adipiscing vitae proin', included: true },
        { text: 'Nec feugiat nisl pretium', included: true },
        { text: 'Nulla at volutpat diam uteera', included: true },
        { text: 'Pharetra massa massa ultricies', included: true },
        { text: 'Massa ultricies mi quis hendrerit', included: true }
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="pricing section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="col-lg-4" data-aos="zoom-in" data-aos-delay={100 * plan.id}>
              <div className={`pricing-item ${plan.featured ? 'featured' : ''}`}>
                <h3>{plan.name}</h3>
                <h4>
                  <sup>$</sup>
                  {plan.price}
                  <span> / month</span>
                </h4>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={!feature.included ? 'na' : ''}>
                      <i className={`bi ${feature.included ? 'bi-check' : 'bi-x'}`}></i>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Link to="#" className="buy-btn">
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 