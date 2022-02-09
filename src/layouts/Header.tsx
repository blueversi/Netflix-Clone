/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import Navigation from './Navigation';
import { navBar, logoSection, logo } from './css/Header.style';

const Header: FC = () => {
  return (
    <>
      <div css={navBar}>
        <div css={logoSection}>
          <div css={logo}>NETFLIX</div>
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Header;
