/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { header, logo, navigation, button } from './css/Header.style';

const Header: FC = () => {
  return (
    <div css={header}>
      <div css={logo}>
        <h1>Logo</h1>
      </div>
      <div css={navigation}>
        <button css={button}>Polski</button>
        <button css={button}>Zaloguj</button>
      </div>
    </div>
  );
};

export default Header;
