import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Clients = () => {
  const clients = [
    { id: 1, image: '/assets/img/clients/clients-1.webp' },
    { id: 2, image: '/assets/img/clients/clients-2.webp' },
    { id: 3, image: '/assets/img/clients/clients-3.webp' },
    { id: 4, image: '/assets/img/clients/clients-4.webp' },
    { id: 5, image: '/assets/img/clients/clients-5.webp' },
    { id: 6, image: '/assets/img/clients/clients-6.webp' },
    { id: 7, image: '/assets/img/clients/clients-7.webp' },
    { id: 8, image: '/assets/img/clients/clients-8.webp' },
  ];

  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 120
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 120
            }
          }}
          className="align-items-center"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <img src={client.image} className="img-fluid" alt={`Client ${client.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients; 