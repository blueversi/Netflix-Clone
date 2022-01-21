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
  justifyContent: 'space-evenly',

  width: '20%',
  backgroundColor: 'yellow',
});

export const button = css({
  color: '#ffffff',
  padding: '15px 40px',
  backgroundColor: '#e50914',
});
