/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import Navigation from './Navigation';
import { header, logo } from './css/Header.style';

const Header: FC = () => {
  return (
    <div css={header}>
      <div css={logo}>
        <h1>Logo</h1>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
