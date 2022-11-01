import React from 'react';
import {Container, Divider, Grid, Typography} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
//create a container with two grid one for title another for content
const SectionContainer = ({title, text}) => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={4}>
                    <Typography align={'center'} variant={'body1'}>
                        <SchoolIcon sx={{color:'red'}} fontSize={'large'}/> Hi, this is me
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant={'body2'}>
                        The donkey is a member of the horse family. The words donkey and ass are used to identify the
                        same
                        animal. However, the term donkey is used for domesticated, or tamed, animals. The term ass is
                        more often
                    </Typography>
                </Grid>
            </Grid>


            <Divider sx={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
        </Container>
    );
}

export default SectionContainer;