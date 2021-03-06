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

export const bannerWraper = css({
  margin: 0,
  marginTop: '-100px',
  height: '80vh',
  background:
    'url(https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/efc526df-4926-42b8-b0fb-4516b6237d95/PL-pl-20220117-popsignuptwoweeks-perspective_alpha_website_large.jpg) no-repeat',
  backgroundSize: 'cover top',
});

export const bannerMask = css({
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.6)',
  borderBottom: '8px solid #222',
});

export const bannerContent = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const bannerMessage = css({
  width: '40%',
  textAlign: 'center',
});

export const bannerMessageH1 = css({
  fontSize: '4.1em',
  margin: 0,
});

export const bannerFormWraper = css({
  textAlign: 'center',
  width: '40%',
});

export const bannerForm = css({
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'center',
  width: '100%',

  '& input': {
    width: '70%',
    padding: '10px',
  },
});

export const button = css({
  fontFamily: 'Arimo, sans-serif',
  fontSize: '2em',
  color: '#ffffff',
  fontWeight: 'bolder',
  width: '30%',
  padding: '20px 10px 20px 10px',
  backgroundColor: '#e50914',
  border: 'none',
  boxSizing: 'border-box',

  '&:hover': {
    cursor: 'pointer',
  },
});
