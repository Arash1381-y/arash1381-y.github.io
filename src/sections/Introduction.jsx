import React from 'react';
import {Container, Divider, Grid, styled, Typography} from "@mui/material";

import me from '../assests/images/me.jpg';
import color from "../constants/pallate";

const headerGridStyle = {
    placeContent: 'center',
    alignItems: 'center',
    display: 'grid',
}

const headerTextStyle = {
    color: color.primary,
    fontWeight: 'bold',
    marginBottom: '1 rem',
    fontFamily: 'Rubik',
}

const Paragraph = styled(Typography)({
    fontFamily: 'Rubik',
    fontSize: '1.2rem',
    marginTop: '0.5rem',
    marginBottom: '0.8rem',
});

const headerContainerStyle = {
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
};

const Highlight = styled(Typography)({
    color: color.secondary,
    fontWeight: 'bold',
    display: 'inline',
    fontStyle: 'italic',
    fontSize: '1.2rem',
});


export default function Introduction() {
    return (
        <div>
            <Container maxWidth={'md'} sx={headerContainerStyle}>
                <Grid container spacing={2}>
                    <Grid display={'grid'} sx={headerGridStyle} item xs={12} md={7}>
                        <Typography variant={'h3'} sx={headerTextStyle}>
                            Hi, I'm Arash
                        </Typography>
                        <Typography align={'center'} variant={'caption'} color={'textSecondary'}>
                            if you want to know about me read this
                        </Typography>
                    </Grid>
                    <Grid display={'flex'} sx={{flexFlow: 'column', alignItems: 'center'}} item xs={12} md={5}>
                        <img src={me} alt={'me'} style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth={'md'}>
                <Paragraph variant={'body1'} sx={{color: color.secondary, fontWeight: 'bold'}}>
                    Little About Me
                </Paragraph>
                <Paragraph variant={'body1'}>
                    Hi there, I'm Arash, a computer engineering undergraduate student at <Highlight>Sharif University of
                    Technology
                </Highlight>.
                    My field of interest from web applications to neural networks and computer architecture.
                </Paragraph>

                <Paragraph variant={'body1'}>
                    Choosing what I want to be is always challenging for me. I remember when I finished high school, I
                    wasn't sure about what field I liked to study. There were two choices for me 1) study mechanics and
                    2) study computer engineering. My first choice was driven by my passion for physics, which I
                    developed in high school, and the second choice was simply because it looked like it needed
                    creativity or somehow gave that feeling that I could create something new. So I chose to give myself
                    a challenge and start studying Computer Engineering.
                </Paragraph>

                <Paragraph variant={'body1'}>
                    After 3 years of studying, I realized that we can't truly know what we want to be until we try it.
                    Having a plan for features is good and even necessary, but it's not the only thing that matters.
                    Having the guts to try new things and sometimes change our plans gives us the flexibility and the
                    joy of life. Recently I was reading about <Highlight>
                    Gradient Descent
                </Highlight> what was funny about it was that it

                    shows when the worlds get complex, finding a maximum or minimum is not easy it all So lets just
                    learn from it. Take small steps and hope for the best =).
                </Paragraph>

                <Divider sx={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
            </Container>
        </div>
    );
}