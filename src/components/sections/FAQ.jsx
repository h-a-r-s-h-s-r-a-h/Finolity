import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What financial services do you offer?',
      answer: 'We offer a comprehensive range of financial services including investment management, wealth protection, corporate finance, portfolio management, and strategic financial planning. Our services are tailored to meet both individual and business needs.'
    },
    {
      id: 2,
      question: 'How do you ensure the security of client investments?',
      answer: 'We implement robust risk management strategies, diversify portfolios across multiple asset classes, and use advanced security measures to protect client investments. Our team constantly monitors market conditions and adjusts strategies accordingly.'
    },
    {
      id: 3,
      question: 'What is your investment philosophy?',
      answer: 'Our investment philosophy is based on long-term value creation, risk management, and personalized strategies. We focus on understanding each client\'s goals, risk tolerance, and time horizon to create tailored investment plans.'
    },
    {
      id: 4,
      question: 'How do you handle client communication?',
      answer: 'We maintain regular communication through scheduled reviews, monthly reports, and real-time updates. Our team is always available to address questions and concerns, with a typical response time of 3 minutes.'
    },
    {
      id: 5,
      question: 'What makes Finolity different from other financial firms?',
      answer: 'Our combination of experienced professionals, cutting-edge technology, and personalized service sets us apart. With an 8-year track record, 470+ successful projects, and 98% client satisfaction rate, we consistently deliver exceptional results.'
    }
  ];

  return (
    <section id="faq" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Common questions about our financial services and approach</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="col-lg-6" data-aos="fade-up" data-aos-delay={100 * faq.id}>
              <div className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 