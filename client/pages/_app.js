// styling
import '../styles/globals.css'
import '../styles/image.css'

// theming
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

// views
import { Footer, Navbar } from '../components';
import Landingimage from '../src/components/Landingimage';
function MyApp({ Component, pageProps }) {
    return <ThemeProvider theme={theme}>
        <Navbar />
        <Landingimage />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
}

export default MyApp;
