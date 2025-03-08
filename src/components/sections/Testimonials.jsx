import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Prateek Kashyap',
      role: 'Director, Pyramidfabcon Eventmanger Pvt Ltd.',
      image: 'assets/img/person/person-m-9.webp',
      quote: 'Finolity has been an outstanding partner. Their team is professional, knowledgeable and customer-service driven. Their proactive collaborative approach has been critical in helping us build an IT infrastructure that enables our success today and supports our long-term positioning strategy.',
      rating: 5
    },
    {
      id: 2,
      name: 'Abhishek Tiwari',
      role: 'Partner & CTO Skillalgo',
      image: 'assets/img/person/person-m-12.webp',
      quote: 'I\'ve been a customer for more than a decade. Finolity is an example of the way Managed Services should be done. They do their very best to make sure you succeed. If there\'s an issue, they step in immediately. We will continue to be a customer for years to come.',
      rating: 5
    },
    {
      id: 3,
      name: 'Samriti Sharma',
      role: 'Corporate Relation Manager',
      image: 'assets/img/person/person-f-5.webp',
      quote: 'Finolity implemented such a powerful platform that we had no break in service when our employees had to work from home due to the COVID-19 pandemic. We weren\'t concerned about how to shift to a remote working environment because Finolity facilitated a seamless transition.',
      rating: 5
    },
    {
      id: 4,
      name: 'Shivam Rana',
      role: 'CIO, Kailasa Pictures',
      image: 'assets/img/person/person-m-13.webp',
      quote: 'Their expertise in financial technology and commitment to client success has been invaluable to our business growth. The team\'s proactive approach and deep industry knowledge make them a trusted partner we can rely on.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Client Testimonials</h2>
        <p>What our valued clients say about us</p>
      </div>

      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-item">
                <img src={testimonial.image} className="testimonial-img" alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {testimonial.quote}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 