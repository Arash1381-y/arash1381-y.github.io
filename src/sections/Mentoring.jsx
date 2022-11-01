import React from 'react';
import {Container, Divider, Grid} from "@mui/material";
import {Paragraph, SubTitle, Title} from "../components/Components";
//create a container with two grid one for title another for content



const Mentoring = () => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Title variant={'h5'}>
                        TA and Mentoring
                    </Title>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <SubTitle variant={'body1'}>
                        Sharif University of Technology, Tehran, Iran
                    </SubTitle>
                    <Paragraph variant={'body1'}>
                        - Fundamental of Electrical and Electronic circuits (Fall 2022, Winter 2021)

                    </Paragraph>
                </Grid>
            </Grid>


            <Divider sx={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
        </Container>
    );
}

export default Mentoring;