import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

/*
----------------------------
----------------------------
      MEDIA QUERIES
----------------------------
----------------------------
*/
const breakpoints = [320, 768, 1024, 1440];

// mq => media query
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

/* 
for copy paste
  [mq[0]]: {
    flexDirection: 'column',
  },
  [mq[1]]: {
    flexDirection: 'row',
  },
  [mq[2]]: {
    flexDirection: 'row',
  },
  [mq[3]]: {
    flexDirection: 'row',
  },
*/
/*
----------------------------
----------------------------
      MEDIA QUERIES
----------------------------
----------------------------
*/

export const navigation = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '15%',
  backgroundColor: 'yellow',
});

export const button = css({
  color: '#ffffff',
  fontWeight: 'bold',
  padding: '8px 10px 8px 10px',
  backgroundColor: '#e50914',
  border: 'none',
  borderRadius: '5px',
});

export const langSelectWraper = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  backgroundColor: '#000',
  width: '100px',
  border: '1px solid #eee',
  borderRadius: '5px',
});

export const selectLanguage = css({
  appearance: 'none',
  color: '#fff',
  backgroundColor: '#000',
  height: '36px',
  fontSize: '14px',
  padding: '8px 5px 8px 5px',
  border: 'none',
  width: '70%',
});
