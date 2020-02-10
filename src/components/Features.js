import React from 'react';

const Features = () => {
  return (
    <div className="features-container">
      <h2 id="features" className="large text-center">
        What do we have that others don't?
      </h2>

      <div className="features-grid text-center">
        <div className="features-privacy bg-white p-2">
          <h2 className="text-primary medium">Privacy</h2>
          <div>
            <p className="lead-para">
              The biggest thing that we offer is Privacy
            </p>
            <p className="justify-text">
              In this day and age our data gets thrown around all over the place
              and we never know who has it. We don't do any of that here. The
              only thing that we will collect from you is your email address,
              any post you write, and any information you add to your profile.
              We won't sell it and you can trust us to keep it safe.
            </p>
          </div>
        </div>
        <div className="features-local bg-white p-2">
          <h2 className="text-primary medium">Local People</h2>
          <div>
            <p className="lead-para">We are from this area and love it.</p>
            <p className="justify-text">
              We are from here and love our little slice of Heaven. We are not
              engineers from Silicon Valley or some huge Tech capital, nope, we
              are right here with all of you and we intend to keep it that way.
            </p>
          </div>
        </div>
        <div className="features-reaction bg-white p-2">
          <h2 className="text-primary medium">Quick Reaction</h2>
          <div>
            <p className="lead-para">
              Because we are from here we can get things done.
            </p>
            <p className="justify-text">
              We are easy to get ahold of and can fix issues very quickly.
              Nothing is worse than submitting a bug fix or vulnerability and it
              seems like weeks go on with no mention of a fix. You can email us
              at
              <a href="mailto:support@flwconnect.org?subject=Request For More Information!">
                {' '}
                support@flwconnect.org
              </a>{' '}
              and we will get things sorted out as quick as possible and we will
              keep you updated along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
