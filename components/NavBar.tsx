import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import VariantLogo from '../components/VRLogo'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            display: 'flex',
            flexGrow: 1,
        },
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            backgroundColor: '#fff',
            color: '#000',
            transition: theme.transitions.create("color", {
                duration: 400
            }),
            '&:hover': {
                transition: theme.transitions.create("color", {
                    duration: 400
                }),
                backgroundColor: '#fff',
                color: '#48bfe3'
            },
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            width: theme.mixins.toolbar.minHeight,
        }
    }),
);




export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='fixed' color='transparent' elevation={0}>
                <Toolbar>
                    <Box className={classes.title}>
                        <VariantLogo className={classes.logo} />
                    </Box>
                    <Button className={classes.menuButton}>Charts</Button>
                    <Button className={classes.menuButton}>Trade Watcher</Button>
                    <Button className={classes.menuButton}>Option Simulator</Button>
                    <Button className={classes.menuButton}>Connect</Button>

                </Toolbar>
            </AppBar>
            <Toolbar />

        </div>

    );
}