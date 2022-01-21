/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import Navigation from './Navigation';
import { navBar, logoSection, logo } from './css/Header.style';
import Banner from './Banner';

const Header: FC = () => {
  return (
    <>
      <div css={navBar}>
        <div css={logoSection}>
          <div css={logo}>NETFLIX</div>
        </div>
        <Navigation />
      </div>
      <Banner />
    </>
  );
};

export default Header;
