import React from 'react';
import {Container, Divider, Grid, Typography} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
//create a container with two grid one for title another for content
const SectionEducation = () => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Typography  fontWeight={'bolder'} sx={{borderLeft: '1px solid rgba(53,86,129, 0.3);', marginTop:'10%'}} paddingLeft={'1rem'}  variant={'h6'}>
                        About My Education
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography fontWeight={'bolder'} variant={'body1'}>
                        Donk University of Deknology
                    </Typography>
                    <Typography variant={'body2'}>
                        I have studied in best donkey schools in the world.
                        my first school was in the donkey school in the donkey village in the donkey country.
                        my degree was in donkey science. I have studied in best donkey schools in the world.
                        i have ranked 1st in the donkey school in the donkey village in the donkey country.
                    </Typography>
                    <Typography sx={{marginTop:'1rem'}} fontWeight={'bold'} variant={'body1'}>
                        DONKSCORE : 99.99 / 100
                    </Typography>
                    <Typography sx={{marginTop:'2rem'}} fontWeight={'bolder'} variant={'body1'}>
                        Donk highschool
                    </Typography>
                    <Typography variant={'body2'}>
                        I have studied in best donkey schools in the world.
                        my first school was in the donkey school in the donkey village in the donkey country.
                        my degree was in donkey science. I have studied in best donkey schools in the world.
                        i have ranked 1st in the donkey school in the donkey village in the donkey country.
                    </Typography>
                    <Typography sx={{marginTop:'1rem'}} fontWeight={'bold'} variant={'body1'}>
                        DONKSCORE : 19.81/20
                    </Typography>
                </Grid>
            </Grid>


            <Divider sx={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
        </Container>
    );
}

export default SectionEducation;