import React,{useState} from "react";
// styling
import '../styles/app.scss'

// theming
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

// views
import { Footer, Navbar } from '../components';

function MyApp({ Component, pageProps }) {
    //states
    const [navStatus,setNavStatus]=useState(false);
    return <ThemeProvider theme={theme}>
        <Navbar navStatus={navStatus} setNavStatus={setNavStatus} />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
}

export default MyApp;
