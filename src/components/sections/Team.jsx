import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Michael Anderson',
      role: 'Chief Executive Officer',
      description: 'Over 20 years of experience in investment banking and wealth management',
      image: 'assets/img/person/person-m-7.webp',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Chief Investment Officer',
      description: 'Expert in portfolio management and global market analysis',
      image: 'assets/img/person/person-f-8.webp',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Head of Corporate Finance',
      description: 'Specializes in mergers, acquisitions, and strategic financial planning',
      image: 'assets/img/person/person-m-6.webp',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Emily Roberts',
      role: 'Wealth Management Director',
      description: 'Dedicated to creating personalized wealth preservation strategies',
      image: '/assets/img/person/person-f-4.webp',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Leadership Team</h2>
        <p>Expert professionals committed to your financial success</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-6" data-aos="fade-up" data-aos-delay={100 * member.id}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img src={member.image} className="img-fluid" alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <p>{member.description}</p>
                  <div className="social">
                    <a href={member.social.twitter}><i className="bi bi-twitter-x"></i></a>
                    <a href={member.social.linkedin}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 