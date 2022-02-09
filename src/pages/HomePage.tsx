/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import Banner from '../layouts/Banner';
import { homePageSection } from './css/HomePage.style';

const Home: FC = () => {
  return (
    <>
      <Banner />
      <div css={homePageSection}>
        <h1>Enjoy your TV.</h1>
      </div>
      <div css={homePageSection}>
        <h1>Download your shows to watch online.</h1>
      </div>
      <div css={homePageSection}>
        <h1>Watch everywhere.</h1>
      </div>
      <div css={homePageSection}>
        <h1>Create profile for kids.</h1>
      </div>
      <div css={homePageSection}>
        <h1>Frequently asked questions.</h1>
      </div>
    </>
  );
};

export default Home;
