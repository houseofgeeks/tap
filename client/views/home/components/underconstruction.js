import { Typography, Box } from '@mui/material'

export default function UnderConstruction() {
    return <Box justifyContent={'center'} >
        <Typography textAlign={'center'} variant='h2' component='div'>Under construction</Typography>

        {/* remove once work starts */}
        <Box display={'flex'} justifyContent={'center'}>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_hslwihoj.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop autoplay></lottie-player>
        </Box>
    </Box>
}
