import React from "react";
import { Container, Grid, Typography, List, ListItem } from "@mui/material";
import { Title, StyledDivider, PageLayout } from "../components/Components";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    timeframe: "Fall 2020 - 2025",
    institution: "Sharif University of Technology",
  },
  {
    degree: "High School Diploma in Mathematics and Physics",
    timeframe: "Fall 2017 - Spring 2020",
    institution: "Alborz High School",
  },
];

const awardsData = [
  {
    title: "Ranked 55th in the National University Entrance Exam",
    year: "2020",
  },
  {
    title: "National Youth Champion in Kyokoushin Karate Contest (Kumite)",
    year: "2018",
  },
  {
    title: "Bronze Medal in Kyokoushin Karate Contest (Kata)",
    year: "2018",
  },
];

const Education = () => {
  return (
    
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Education Section */}
        <Grid item xs={12} sm={6}>
          <Title variant="h5">My Education</Title>
          <List>
            {educationData.map((education, index) => (
              <ListItem key={index} disableGutters>
                <div>
                <Typography>{`${education.degree}, ${education.timeframe}`}</Typography>

                <Typography variant="caption">
                  {education.institution}
                </Typography>
                </div>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Honors and Awards Section */}
        <Grid item xs={12} sm={6}>
          <Title variant="h5">Honors and Awards</Title>
          <List>
            {awardsData.map((award, index) => (
              <ListItem key={index} disableGutters>
                <Typography>{`${award.title}, ${award.year}`}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
