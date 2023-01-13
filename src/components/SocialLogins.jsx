import React from 'react';
import SocialLink from './SocialLink';
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';

const SocialLogins = () => {
  return (
    <article className="social-login-container">
      <div className="social-login-text">
        <p>or log in with</p>
      </div>
      <div className="social-links-box">
        <div>
          <SocialLink>
            <img src={Google} alt="" className="google" />
          </SocialLink>
        </div>
        <div>
          <SocialLink>
            <img src={Facebook} alt="" className="facebook" />
          </SocialLink>
        </div>
        <div>
          <SocialLink>
            <img src={Twitter} alt="" className="twitter" />
          </SocialLink>
        </div>
      </div>

      <div className="redirect-to-sign-up">
        <p>
          Don't have an account?{' '}
          <a href="" className="sign-up-link">
            Create new now!
          </a>
        </p>
      </div>

      <div className="redirect-to-terms-condition">
        <p>
          By signing up, you are agree with our{' '}
          <a href="" className="terms-condition-link">
            Terms & Conditions
          </a>
        </p>
      </div>
    </article>
  );
};

export default SocialLogins;
