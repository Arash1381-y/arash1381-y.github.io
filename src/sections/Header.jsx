import React from 'react';
import {Container, Grid, styled, Typography} from "@mui/material";
import me from '../assests/images/me.jpg';
import color from "../constants/pallate";


const MyName = styled(Typography)(({theme}) => ({
        color: color.primary,
        fontWeight: 'bold',
        alignSelf: ' self-end',
        [theme.breakpoints.down('md')]: {
            alignSelf: 'center',
            textAlign: 'center',
        }
    }
));

const MyCaption = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('md')]: {
        alignSelf: 'center',
        textAlign: 'center',
    }
}));

const headerTextStyle = {
    color: color.primary,
    fontWeight: 'bold',
    marginBottom: '1 rem',
    fontFamily: 'Rubik',
}


const headerContainerStyle = {
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
};


export default function Header() {
    return (
        <Container maxWidth={'md'} sx={headerContainerStyle}>
            <Grid container spacing={2}>
                <Grid display={'grid'} item xs={12} md={7}>
                    <MyName variant={'h3'} sx={headerTextStyle}>
                        Hi, I'm Arash
                    </MyName>
                    <MyCaption variant={'caption'} color={'textSecondary'}>
                        if you want to know about me read this
                    </MyCaption>
                </Grid>
                <Grid display={'flex'} sx={{flexFlow: 'column', alignItems: 'center'}} item xs={12} md={5}>
                    <img src={me} alt={'me'} style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
                </Grid>
            </Grid>
        </Container>
    );
}