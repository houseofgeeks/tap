import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Error404() {
    return (
        <Box sx={{ width: '100%', }} textAlign='center'>
            <Typography variant='h2' component='div'>404</Typography>
            <Typography variant='body1' component='div' gutterBottom>Page not found</Typography>
        </Box >
    )
}
