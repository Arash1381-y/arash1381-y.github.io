import React from 'react';
import {Container, Divider, Grid, Typography} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
//create a container with two grid one for title another for content
const Mentoring = () => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Typography  fontWeight={'bolder'} sx={{borderLeft: '1px solid rgba(53,86,129, 0.3);', marginTop:'10%'}} paddingLeft={'1rem'}  variant={'h6'}>
                        TA and Mentoring
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography fontWeight={'bolder'} variant={'body1'}>
                        Donk Guided by Me
                    </Typography>
                    <Typography variant={'body'}>
                        <ul>
                            <li>Erfan Dojibi  infinite x times</li>
                            <li>Hossein Dli   2 x times</li>
                            <li>Alireza Doroozi 1 x times</li>
                            <li>Donk estain 0 x times</li>
                        </ul>
                    </Typography>
                </Grid>
            </Grid>


            <Divider sx={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
        </Container>
    );
}

export default Mentoring;