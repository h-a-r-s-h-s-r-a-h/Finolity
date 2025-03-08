import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Investment Management', percentage: 95 },
    { name: 'Risk Analysis', percentage: 90 },
    { name: 'Market Research', percentage: 85 },
    { name: 'Financial Planning', percentage: 95 },
    { name: 'Wealth Management', percentage: 90 }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <img src="assets/img/illustration/illustration-10.webp" className="img-fluid" alt="Financial Expertise" />
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Our Financial Expertise</h3>
            <p className="fst-italic">
              With decades of combined experience and continuous professional development, our team brings deep expertise across all areas of financial management and advisory services.
            </p>

            <div className="skills-content skills-animation">
              {skills.map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">
                    {skill.name} <i className="val">{skill.percentage}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 