/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import {
  bannerWraper,
  bannerMask,
  bannerContent,
  bannerMessage,
  bannerFormWraper,
  bannerForm,
  bannerMessageH1,
  button,
} from './css/Banner.style';

const Banner: FC = () => {
  return (
    <div css={bannerWraper}>
      <div css={bannerMask}>
        <div css={bannerContent}>
          <div css={bannerMessage}>
            <h1 css={bannerMessageH1}>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
          </div>
          <div css={bannerFormWraper}>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form css={bannerForm}>
              <input type='text' placeholder='Email address' />
              <button type='submit' css={button}>
                Get started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
