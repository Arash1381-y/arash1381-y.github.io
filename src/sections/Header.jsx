import React from "react";
import { Container, Grid, styled, Typography, IconButton } from "@mui/material";
import me from "../assests/images/yet-another-me.jpg";
import color from "../constants/pallate";
import { GitHub, Email, LinkedIn } from "@mui/icons-material"; // MUI Icons
import { Highlight } from "../components/Components";

const MyName = styled(Typography)(({ theme }) => ({
  color: color.primary,
  fontWeight: "bold",
  alignSelf: " self-end",
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    textAlign: "center",
  },
}));

const MyCaption = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    textAlign: "center",
  },
}));

const headerTextStyle = {
  color: color.primary,
  fontWeight: "bold",
  marginBottom: "1 rem",
  fontFamily: "Rubik",
};

const headerContainerStyle = {
  marginTop: "2.5rem",
  marginBottom: "2.5rem",
};

export default function Header() {
  return (
    <Container maxWidth="lg" sx={headerContainerStyle}>
      <Grid container spacing={2}>
        <Grid
          display={"flex"}
          sx={{ flexFlow: "column", alignItems: "center" }}
          item
          xs={12}
          md={3}
        >
          <img
            src={me}
            alt={"me"}
            style={{ width: "200px", height: "200px", borderRadius: "100%" }}
          />
        </Grid>
        <Grid display={"grid"} item xs={12} md={9}>
          <MyName variant={"h3"} sx={headerTextStyle}>
            Arash Yadegari
          </MyName>

          <MyCaption variant={"body2"} color={"textSecondary"}>
            <Typography>
              Bachelor of Science Student in Computer Engineering
            </Typography>
            <Highlight variant={"h4"}>
              Sharif University of Technology
            </Highlight>
            {/* Add Social Media Icons */}
            <div style={{ marginTop: "1rem" }}>
              <IconButton href="https://github.com/Arash1381-y" target="_blank">
                <GitHub sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/arash-yadegari-668020207/" target="_blank">
                <LinkedIn sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton href="mailto: arashyadegari0402@gmail.com" target="_blank">
                <Email sx={{ fontSize: 40 }} />
              </IconButton>
            </div>
          </MyCaption>
        </Grid>
      </Grid>
    </Container>
  );
}
