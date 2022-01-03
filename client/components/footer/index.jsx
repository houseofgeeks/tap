import { Box, Link, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{ padding: '0.5rem' }}>
            <Typography variant='h5'>Footer</Typography>
            A property of {' '}
            <Link
                underline='none'
                href="https://iiitranchi.ac.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                IIIT Ranchi
            </Link>
            <br />
            Developed by{' '}
            <Link
                underline='none'
                href="https://houseofgeeks.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
            >
                House of Geeks
            </Link>
        </Box>
    )
}
