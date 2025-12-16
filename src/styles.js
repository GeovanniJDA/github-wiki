import { createGlobalStyle, keyframes } from 'styled-components';

const nebulaPulse = keyframes`
  0% {
    background-size: 100% 100%;
    background-position: 0% 0%;
  }
  50% {
    background-size: 120% 120%;
    background-position: 50% 50%;
  }
  100% {
    background-size: 100% 100%;
    background-position: 0% 0%;
  }
`;

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0f172a;
    color: #fff;
    height: 100vh;

    background-image: 
        radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
        radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
        radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);

    background-repeat: no-repeat;
    
    animation: ${nebulaPulse} 15s ease-in-out infinite;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;