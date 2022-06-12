import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            light: '#AB9DFF',
            main: '#573BFF',
            dark: '#2B1D7F',
        },
        secondary: {
            light: '#40D2FB',
            main: '#00C3F9',
            dark: '#0092BB',
        },
        background: {
            default: '#F7F8FA',
            paper: '#FFFFFF',
        },
        text: {
            secondary: '#9095A2',
            primary: '#2A3256',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },

    components: {
        MuiTextField: {
            defaultProps: {
                sx: {
                    margin: '0 0 1rem 0'
                }
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true,
                placement: 'bottom-end'
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#111622'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'large'
            },
            styleOverrides: {
                root: {
                    height: 56,
                },
            },
        },
        // MuiAppBar: {
        //     defaultProps: {
        //         color: 'transparent',
        //         elevation: 0,
        //         position: 'static'
        //     }
        // }
    },
    shape: {
        borderRadius: 10,
    },
});

export default theme;