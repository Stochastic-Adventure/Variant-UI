import React from 'react';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function SocialFooter() {

    return (
        <>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item xs={5} />
                <Grid item xs={2}>
                    <Box display='flex' justifyContent='center'>
                        <a href="https://twitter.com/ResearchVariant" target="_blank" rel="noreferrer">
                            <Button >
                                <FontAwesomeIcon icon={faTwitter} size="2x" color="#000" />
                            </Button>
                        </a>
                        <a href="https://discord.gg/ArvDc39Xhc" target="_blank" rel="noreferrer">
                            <Button>
                                <FontAwesomeIcon icon={faDiscord} size="2x" color="#000" />
                            </Button>
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