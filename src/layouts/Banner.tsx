/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { bannerWraper, bannerMask } from './css/Banner.style';

const Banner: FC = () => {
  return (
    <div css={bannerWraper}>
      <div css={bannerMask}>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
