import React from 'react';
import {Container, Grid} from "@mui/material";
import {Title, SubTitle, Paragraph, Highlight, StyledDivider} from "../components/Components";


const Education = () => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Title variant={'h5'}>
                        About My Education
                    </Title>

                </Grid>
                <Grid item xs={12} sm={8}>
                    <SubTitle variant={'h6'}>
                        Alborz High School, Tehran, Iran
                    </SubTitle>
                    <Paragraph variant={'body1'}>
                        I studied <Highlight>mathematics and physics</Highlight> in Alborz High
                        School . I have been graduated as
                        the second best student in my high school.
                    </Paragraph>

                    <Paragraph variant={'body1'}>
                        My <Highlight> GPA </Highlight> Score was <Highlight> 19.81 / 20</Highlight>
                    </Paragraph>

                    <SubTitle variant={'h6'}>
                        Sharif University of Technology, Tehran, Iran
                    </SubTitle>
                    <Paragraph variant={'body1'}>
                        I am currently studying <Highlight>Computer Engineering</Highlight> at <Highlight>Sharif
                        University of Technology</Highlight>.
                    </Paragraph>

                    <Paragraph variant={'body1'}>
                        My <Highlight> major GPA </Highlight> Score is <Highlight> 18 / 20</Highlight>
                    </Paragraph>
                </Grid>
            </Grid>


            <StyledDivider/>
        </Container>
    );
}

export default Education;