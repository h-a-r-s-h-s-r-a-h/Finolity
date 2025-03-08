import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({
        loading: false,
        message: 'Your subscription request has been sent. Thank you!',
        type: 'success'
      });
      setEmail('');
    } catch (error) {
      setStatus({
        loading: false,
        message: 'An error occurred. Please try again.',
        type: 'error'
      });
    }
  };

  return (
    <section id="subscribe" className="subscribe section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="cta-content" data-aos="fade-up" data-aos-delay="200">
              <h2>Subscribe to our newsletter</h2>
              <p>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit.</p>
              <form onSubmit={handleSubmit} className="php-email-form cta-form" data-aos="fade-up" data-aos-delay="300">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address..."
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-primary" type="submit" id="button-subscribe">
                    Subscribe
                  </button>
                </div>
                {status.loading && <div className="loading">Loading</div>}
                {status.type === 'error' && <div className="error-message">{status.message}</div>}
                {status.type === 'success' && <div className="sent-message">{status.message}</div>}
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cta-image" data-aos="zoom-out" data-aos-delay="200">
              <img src="/assets/img/cta/cta-1.webp" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe; 