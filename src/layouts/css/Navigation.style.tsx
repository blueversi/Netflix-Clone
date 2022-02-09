import { css } from '@emotion/react';

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
  justifyContent: 'center',
  width: '20%',
});

export const button = css({
  fontFamily: 'Arimo, sans-serif',
  fontSize: '15px',
  color: '#ffffff',
  fontWeight: 'bolder',
  padding: '8px 10px 8px 10px',
  backgroundColor: '#e50914',
  border: 'none',
  borderRadius: '5px',
  marginLeft: '30px',

  '&:hover': {
    cursor: 'pointer',
  },
});

export const langSelectWraper = css({
  fontFamily: 'Arimo, sans-serif',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  backgroundColor: '#000',
  width: '120px',
  border: '1px solid #eee',
  borderRadius: '4px',
});

export const selectLanguage = css({
  fontFamily: 'Arimo, sans-serif',
  // appearance: 'none',
  color: '#fff',
  backgroundColor: '#000',
  height: '36px',
  fontSize: '14px',
  padding: '8px 5px 8px 5px',
  border: 'none',
  width: '70%',
  '&:hover': {
    cursor: 'pointer',
  },
});
