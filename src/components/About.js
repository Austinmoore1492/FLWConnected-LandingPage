import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h2 id="about" className="large text-center">
        About
      </h2>
      <div className="about-page text-center">
        <div>
          <h3 className="about-text">Let's Hangout</h3>
          <p className="lead about-para">
            This is a place for the community around Fort Leonard Wood to grow
            and connect.
          </p>
        </div>
      </div>

      <div className="about-grid text-center">
        <div className="about-what bg-white p-2">
          <h2 className="text-primary medium">What is this place</h2>
          <div>
            <p className="lead-para">
              We know larger social media sites offer alot for everyone, but
              there is no small town feel to it. Here we can share with people
              from our community and get a better insight as to whats going on
              around our area.
            </p>
          </div>
        </div>
        <div className="about-who bg-white p-2">
          <h2 className="text-primary medium">Who we are</h2>
          <div>
            <p className="lead-para">
              We are just a couple of people from our community that wanted a
              better place for us to connect to those we love to hangout with.
              We wanted to bring our community together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
