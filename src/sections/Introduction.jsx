import React from 'react';
import {Container} from "@mui/material";
import color from "../constants/pallate";
import {StyledDivider, Paragraph, Highlight} from "../components/Components";






function Introduction() {
    return (
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
                joy of life.
            </Paragraph>

            <Paragraph variant={'body1'}>
                Recently I was reading about <Highlight>
                Gradient Descent
            </Highlight> what was funny about it was that it

                shows when the worlds get complex, finding a maximum or minimum is not easy it all So lets just
                learn from it. Take small steps and hope for the best =).
            </Paragraph>

            <StyledDivider/>
        </Container>
    );
}

export default Introduction;