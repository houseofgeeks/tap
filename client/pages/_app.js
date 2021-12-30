// styling
import '../styles/globals.css'

// theming
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

// views
import { Footer, Navbar } from '../components';

function MyApp({ Component, pageProps }) {
    return <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
}

export default MyApp;
