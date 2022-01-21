/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { navigation, button } from './css/Navigation.style';

const Navigation: FC = () => {
  return (
    <>
      <div css={navigation}>
        <select>
          <option>Polski</option>
          <option>English</option>
        </select>
        <button css={button}>Zaloguj się</button>
      </div>
    </>
  );
};

export default Navigation;
