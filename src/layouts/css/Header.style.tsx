import { css } from '@emotion/react';

/*
----------------------------
----------------------------
      MEDIA QUERIES
----------------------------
----------------------------
*/
const breakpoints = [320, 769, 1024, 1440];

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

export const header = css({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 10px 10px 10px',
  width: '100%',
  maxWidth: '1920px',
  zIndex: 100,
});

export const logoSection = css({
  width: '80%',
});

export const logo = css({
  fontFamily: 'Bebas Neue',
  textTransform: 'uppercase',
  fontSize: '3.5em',
  color: '#e50914',
  marginLeft: 50,
});
