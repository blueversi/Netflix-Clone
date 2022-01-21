/** @jsxImportSource @emotion/react */

import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Page from './layouts/Page';
import { appStyle } from './App.style';

function App() {
  return (
    <div css={appStyle}>
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
