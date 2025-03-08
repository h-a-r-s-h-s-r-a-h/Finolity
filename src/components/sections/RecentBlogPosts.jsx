import React from 'react';
import { Link } from 'react-router-dom';

const RecentBlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Eum ad dolor et. Autem aut fugiat debitis',
      image: '/assets/img/blog/blog-post-1.webp',
      date: 'December 12',
      author: 'Julia Parker',
      category: 'Politics',
      excerpt: 'Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.'
    },
    {
      id: 2,
      title: 'Et repellendus molestiae qui est sed omnis',
      image: '/assets/img/blog/blog-post-2.webp',
      date: 'July 17',
      author: 'Mario Douglas',
      category: 'Sports',
      excerpt: 'Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda.'
    },
    {
      id: 3,
      title: 'Quia assumenda est et veritati tirana ploder',
      image: '/assets/img/blog/blog-post-3.webp',
      date: 'September 05',
      author: 'Lisa Hunter',
      category: 'Economics',
      excerpt: 'Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed.'
    }
  ];

  return (
    <section id="recent-blog-postst" className="recent-blog-postst section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent Blog Posts</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-xl-4 col-md-6">
              <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay={100 * post.id}>
                <div className="post-img position-relative overflow-hidden">
                  <img src={post.image} className="img-fluid" alt={post.title} />
                  <span className="post-date">{post.date}</span>
                </div>

                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">{post.title}</h3>

                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i>
                      <span className="ps-2">{post.author}</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i>
                      <span className="ps-2">{post.category}</span>
                    </div>
                  </div>

                  <hr />

                  <Link to="/blog-details" className="readmore stretched-link">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts; 