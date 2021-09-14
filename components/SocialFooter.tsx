import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        socialbutton: {
            maxWidth: '36px',
            maxHeight: '36px',
            minWidth: '36px',
            minHeight: '36px',
            backgroundColor: '#fff',
            '&:hover': {
                backgroundColor: '#fff',
            },


        },
    }),
);

export default function SocialFooter() {
    const classes = useStyles();

    return (
        <>
            <Grid container item direction="row" justifyContent="space-evenly">
                <Grid item xs={5} />
                <Grid item xs={2}>
                    <Box display='flex' justifyContent='center'>
                        <a href="https://twitter.com/ResearchVariant" target="_blank" rel="noreferrer">
                            <IconButton className={classes.socialbutton}>
                                <FontAwesomeIcon icon={faTwitter} size="lg" color="#000" />
                            </IconButton>
                        </a>
                        <a href="https://discord.gg/ArvDc39Xhc" target="_blank" rel="noreferrer">
                            <IconButton className={classes.socialbutton}>
                                <FontAwesomeIcon icon={faDiscord} size="lg" color="#000" />
                            </IconButton>
                        </a>
                    </Box>
                </Grid>
                <Grid item xs={5} />
            </Grid>
        </>
    )
}

// Twitter: "#8ccff8"
// Discord: "#a1b0e6"