import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = () => (
  <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">FLW Connected</h1>
        <p className="lead">A place for Fort Leonard Wood to Connect.</p>
        <p>Coming In 2020</p>
        <AnchorLink href="#scroll-here" className="scroll-handler">
          Learn More!
        </AnchorLink>
      </div>

      <span id="scroll-here" />
    </div>
  </section>
);

export default Landing;
