import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import SocialFooter from '../components/SocialFooter'
import Typography from '@material-ui/core/Typography'


export default function Index() {

    return (
        <div>
            <NavBar />
            <Box pt={35} />
            <Grid container direction="row" justifyContent="space-evenly">
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Typography variant="h4" component="h1" align='center' gutterBottom>
                        VARIANT RESEARCH
                    </Typography>
                    <Typography variant="h5" component="h2" align='center' gutterBottom>
                        Option + On-chain Solana Data
                    </Typography>
                </Grid>
                <Grid item xs={4} />
            </Grid>
            <Box pt={5}></Box>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Typography variant='h5' component='h3' align='center' gutterBottom>
                        COMING SOON
                    </Typography>
                </Grid>
                <Grid item xs={4} />
            </Grid>
            <Box pt={30}></Box>
            <SocialFooter />
        </div >

    )
}