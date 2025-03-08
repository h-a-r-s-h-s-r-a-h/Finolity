import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  useEffect(() => {
    // Initialize Isotope layout after the component mounts
    const initIsotope = async () => {
      const Isotope = (await import('isotope-layout')).default;
      const portfolioContainer = document.querySelector('.isotope-container');
      if (!portfolioContainer) return;

      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry'
      });

      const portfolioFilters = document.querySelectorAll('.isotope-filters li');
      portfolioFilters.forEach(filter => {
        filter.addEventListener('click', e => {
          e.preventDefault();
          portfolioFilters.forEach(el => el.classList.remove('filter-active'));
          filter.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: filter.getAttribute('data-filter')
          });
        });
      });
    };

    initIsotope();
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="/assets/img/portfolio/portfolio-portrait-1.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-portrait-1.webp" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <Link to="/portfolio-details" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="/assets/img/portfolio/portfolio-1.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-1.webp" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <Link to="/portfolio-details" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="/assets/img/portfolio/portfolio-3.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-3.webp" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                  <i className="bi bi-zoom-in"></i>
                </a>
                <Link to="/portfolio-details" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </Link>
              </div>
            </div>

            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 