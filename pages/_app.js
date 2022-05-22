import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import theme from 'utils/theme.ts';

import AOS from 'aos'
import 'aos/dist/aos.css'

import Rellax from 'rellax'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    let rellax = new Rellax('.rellax');
    
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledRoot>
        <Component {...pageProps} />
      </StyledRoot>
    </ThemeProvider>
  )
}

export default MyApp

const StyledRoot = styled.div`
  background: ${props => props.theme.background};
`
