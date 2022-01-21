/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import {
  navigation,
  button,
  langSelectWraper,
  selectLanguage,
} from './css/Navigation.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
const Navigation: FC = () => {
  return (
    <>
      <div css={navigation}>
        <div css={langSelectWraper}>
          <FontAwesomeIcon size='1x' color='#FFF' icon={faGlobe} />
          <select css={selectLanguage}>
            <option> Polski</option>
            <option>English</option>
          </select>
        </div>
        <button css={button}>Zaloguj się</button>
      </div>
    </>
  );
};

export default Navigation;
