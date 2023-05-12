import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function NavBar() {
  return (
    <AppBar position='static'>
        <Container maxWidth='xl'>
            <Toolbar>
                <Typography variant='h5'>
                    Calculadora de Hipoteca
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
