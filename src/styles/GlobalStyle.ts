import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle/*css*/ `

  :root {
    /* color */
    --white: #ffffff;
    --black: #1D1D1D;
    --gray: #D1D1D1;
    --red: #FA8B8B;
    --light-red: #FEDDDD;
    --green: #7EBB94;
    --light-green: #D9EBDF;
    --purple: #C1BEFA;
    --light-purple: #C1BEFA;
    --yellow: #FEDB9A;
    --light-yellow: #FFF9EB;

    /* drop shadow */
    --shadow-toast: 0px 4px 4px rgba(0, 0, 0, 0.20);

    /* text size */
    --text-xs: 8px;
    --text-sm: 12px;
    --text-bs: 16px;
    --text-md: 20px;
    --text-lg: 24px;

    /* text weight */
    --text-regular: 400;
    --text-semi-bold: 600;
    --text-bold: 700;

    /* spacing */ 
    --space-xs: 8px;
    --space-sm: 12px;
    --space-bs: 16px;
    --space-md: 20px;
    --space-lg: 24px;
    --space-xl: 28px;
    --space-xxl: 32px; 

    /* border radius */
    --radius-sm: 5px;
    --radius-bs: 10px;
    --radius-md: 18px;
    --radius-lg: 25px;
  }

  @font-face {
    font-family: 'Cafe24Ssurround';
    font-style: normal;
    font-weight: 400;
    src: url('/assets/Cafe24SsurroundAir.ttf') format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Cafe24Ssurround';
    font-style: normal;
    font-weight: 700;
    src: url('/assets/Cafe24Ssurround.ttf') format('truetype');
    font-display: swap;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  body {
    font-family: 'Cafe24Ssurround';
  }
  input {
    font-family: 'Cafe24Ssurround';
  }
  .srOnly {
    overflow: hidden;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }
`;
